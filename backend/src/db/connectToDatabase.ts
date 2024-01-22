import pkg from 'pg';
const { Client } = pkg
import { configDotenv } from 'dotenv';

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

    console.log(process.env.POSTGRES_PASSWORD) 
    console.log(process.env.POSTGRES_USER) 
    console.log(process.env.POSTGRES_HOST)

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

        host: process.env.HOST,
        port: Number(process.env.PORT),
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE

    })

    try {

        console.log("Connecting to database...")
        await client.connect()
        console.log("* Connected to database *")
        return client

    } catch(error) {

        console.log(error.message)
        return false

    }

}
