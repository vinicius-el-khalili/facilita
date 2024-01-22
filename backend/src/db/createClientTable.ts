import pkg from 'pg';
import { configDotenv } from 'dotenv';
import { createClientIdSequence } from './createClientIdSequence.js';

const { Client } = pkg

export async function createClientTable() {
    
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

        console.log(`Creating Client table at: ${process.env.POSTGRES_DATABASE}`)
        await client.connect()
        let query = await client.query(
        `

        -- Table: public.clients
        
        -- DROP TABLE IF EXISTS public.clients;

        CREATE TABLE IF NOT EXISTS public.clients
        (
            id serial PRIMARY KEY,
            nome name COLLATE pg_catalog."default" NOT NULL,
            email text COLLATE pg_catalog."default" NOT NULL,
            telefone text COLLATE pg_catalog."default" NOT NULL,
            x numeric NOT NULL,
            y numeric NOT NULL
        )
        
        TABLESPACE pg_default;
        
        ALTER TABLE IF EXISTS public.clients
            OWNER to postgres;

        `
        )
        console.log(`* Client table created: ${process.env.POSTGRES_DATABASE}\n`)

    } catch(error) {

        console.log("! ERROR CREATING CLIENT TABLE !\n>",error.message,"\n")
        return false

    }

}