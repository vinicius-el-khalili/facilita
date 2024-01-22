import pkg from 'pg';
const { Client } = pkg;
export async function createDatabase() {
    let client;
    client = new Client({
        host: process.env.HOST,
        port: Number(process.env.PORT),
        user: process.env.USER,
        password: process.env.PASSWORD,
    });
    try {
        console.log("Connecting to postgress...");
        await client.connect();
        console.log("* Connected to postgress *");
    }
    catch (error) {
        console.log(error.message);
        return false;
    }
}
//# sourceMappingURL=createDatabase.js.map