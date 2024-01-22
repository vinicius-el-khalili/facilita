import pkg from 'pg';
import { configDotenv } from 'dotenv';
const { Client } = pkg;
export async function createClientIdSequence() {
    configDotenv();
    let client;
    client = new Client({
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE
    });
    try {
        console.log(`Creating Client id sequence at: ${process.env.POSTGRES_DATABASE}`);
        await client.connect();
        let query = await client.query(`

        -- SEQUENCE: public.clients_id_seq

        -- DROP SEQUENCE IF EXISTS public.clients_id_seq;
        
        CREATE SEQUENCE IF NOT EXISTS public.clients_id_seq
            INCREMENT 1
            START 1
            MINVALUE 1
            MAXVALUE 2147483647
            CACHE 1
            OWNED BY clients.id;
        
        ALTER SEQUENCE public.clients_id_seq
            OWNER TO postgres;


        `);
        console.log(`* Client id sequence created: ${process.env.POSTGRES_DATABASE}\n`);
    }
    catch (error) {
        console.log("! ERROR CREATING CLIENT ID SEQUENCE !\n>", error.message, "\n");
        return false;
    }
}
//# sourceMappingURL=createClientIdSequence.js.map