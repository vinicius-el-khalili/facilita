import pkg from 'pg';
import { configDotenv } from 'dotenv';
const { Client } = pkg;
export async function createDatabase() {
    configDotenv();
    let client;
    client = new Client({
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD
    });
    try {
        console.log(`Creating database: ${process.env.POSTGRES_DATABASE}`);
        await client.connect();
        let query = await client.query(`
        
        -- Database: ${process.env.POSTGRES_DATABASE}

        -- DROP DATABASE IF EXISTS ${process.env.POSTGRES_DATABASE};
                
        CREATE DATABASE ${process.env.POSTGRES_DATABASE} 
            WITH
            OWNER = dev
            ENCODING = 'UTF8'
            LC_COLLATE = 'en_US.UTF-8'
            LC_CTYPE = 'en_US.UTF-8'
            LOCALE_PROVIDER = 'libc'
            TABLESPACE = pg_default
            CONNECTION LIMIT = -1
            IS_TEMPLATE = False;
        
        `);
        console.log(`* Database created: ${process.env.POSTGRES_DATABASE} *\n`);
    }
    catch (error) {
        console.log("! ERROR CREATING DATABASE !\n>", error.message, "\n");
        return false;
    }
}
//# sourceMappingURL=createDatabase.js.map