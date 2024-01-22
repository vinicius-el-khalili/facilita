import pkg from 'pg';
import fs from "fs";

const { Client } = pkg

export async function createDatabase() {
    
    let client: pkg.Client

    client = new Client({

        host: process.env.HOST,
        port: Number(process.env.PORT),
        user: process.env.USER,
        password: process.env.PASSWORD,

    })

    try {

        console.log("Connecting to postgress...")
        await client.connect()
        console.log("* Connected to postgress *")

    } catch(error) {

        console.log(error.message)
        return false

    }

}