import pkg from 'pg';
const { Client } = pkg
import { configDotenv } from 'dotenv';
import { createDatabase } from './createDatabase.js';
import { createPublicSchema } from './createPublicSchema.js';
import { createClientTable } from './createClientTable.js';

export async function connectToDatabase(): Promise<false|pkg.Client> {

    let client: pkg.Client
    configDotenv()
    
    // 1. Check PostgreSQL connection and authorization
    
    client = new Client({

        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT), 
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,

    }) 

    try {

        console.log("\nConnecting to PostgreSQL...")
        await client.connect()
        console.log("* Connected to PostgreSQL *\n")

    } catch(error) {

        console.log("ERROR CONNECTING TO POSTGRESQL:\n",error.message,"\n")
        return false

    }
    
    // 2. Check database existence

    client = new Client({

        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE

    })

    try {

        // 2.1. Connect to database

        console.log("\nConnecting to database...")
        await client.connect()
        console.log(`* Connected to database ${process.env.POSTGRES_DATABASE}\n`)
        return client 

    } catch(error) {

        // 2.2. If database is not found, create database

        console.log(">",error.message,"\n")
        if (error.message==`database "${process.env.POSTGRES_DATABASE}" does not exist`){

            let step = 0

            try {

                await createDatabase(); step++
                await createPublicSchema(); step++
                await createClientTable(); step++
                let client = await connectToDatabase()

            }

            catch(error){

                console.log(`Failed to create ${["database","public Schema","Client table"][step]}`)
            }
            
        }
        return false

    }

}
