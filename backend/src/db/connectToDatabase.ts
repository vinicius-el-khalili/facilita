import pkg from 'pg';
const { Client } = pkg
import { configDotenv } from 'dotenv';
import { createDatabase } from './createDatabase.js';
import { createClientSchema } from './createClientSchema.js';
import { createClientTable } from './createClientTable.js';

export async function connectToDatabase(): Promise<false|pkg.Client> {

    let client: pkg.Client
    configDotenv()
    
    // 1. Check postgress connection and authorization
    
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

        console.log("\nConnecting to database...")
        await client.connect()
        console.log(`* Connected to database ${process.env.POSTGRES_DATABASE}\n`)
        return client 

    } catch(error) {

        console.log("! ERROR CONNECTING TO DATABASE !\n>",error.message,"\n")
        if (error.message==`database "${process.env.POSTGRES_DATABASE}" does not exist`){
            await createDatabase()
            await createClientSchema()
            await createClientTable()
        }
        return false

    }

}
