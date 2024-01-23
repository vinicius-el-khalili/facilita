import pkg from 'pg';
import { configDotenv } from 'dotenv';
import { createClientIdSequence } from './createClientIdSequence.js';

const { Client } = pkg

export async function createPublicSchema() {
    
    configDotenv()
    let client: pkg.Client

    client = new Client({

        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE

    })

    try{

        console.log(`Creating public Schema at: ${process.env.POSTGRES_DATABASE}`)
        await client.connect()
        let query = await client.query(
        `

        -- SCHEMA: public

        -- DROP SCHEMA IF EXISTS public ;
        
        CREATE SCHEMA IF NOT EXISTS public
            AUTHORIZATION pg_database_owner;
        
        COMMENT ON SCHEMA public
            IS 'standard public schema';
        
        GRANT USAGE ON SCHEMA public TO PUBLIC;
        
        GRANT ALL ON SCHEMA public TO pg_database_owner;

        `
        )
        console.log(`* public Schema created: ${process.env.POSTGRES_DATABASE} *\n`)

    } catch(error) {

        console.log("! ERROR CREATING public SCHEMA !\n>",error.message,"\n")
        return false

    }

}