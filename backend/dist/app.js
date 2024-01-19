import express from "express";
import pkg from 'pg';
const { Client } = pkg;
const connect = "postgress://dev:123654@localhost/clientdb";
const app = express();
const client = new Client({
    host: "localhost",
    user: "dev",
    port: 5432,
    password: "123654",
    database: "clientdb"
});
await client.connect();
client.query(`Select * from clients`, (err, res) => {
    if (!err) {
        console.log("ok");
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    client.end();
});
//# sourceMappingURL=app.js.map