import bodyParser from "body-parser";
import express from "express";
import pkg from 'pg';
const { Client } = pkg;
const client = new Client({
    host: "localhost",
    user: "dev",
    port: 5432,
    password: "123654",
    database: "clientdb"
});
client.connect();
// express app
const app = express();
// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app routes
app.get("/", async (req, res) => {
    try {
        const result = await client.query("SELECT * FROM clients");
        res.status(200).json(result.rows);
    }
    catch (error) {
        res.status(500).json("Query fail");
    }
});
app.post("/add", async (req, res) => {
    try {
        console.log({ req: req.body });
        const result = await client.query("INSERT INTO clients(client_email,client_phone,client_x,client_y,client_name) VALUES($1, $2, $3, $4, $5)", [
            req.body.email,
            req.body.phone,
            req.body.x,
            req.body.y,
            req.body.name
        ]);
        res.status(200).json("ok");
    }
    catch (error) {
        res.status(500).json("Query fail");
    }
});
// server
app.listen(3000, () => {
    console.log("Server is listening at port 3000");
});
//# sourceMappingURL=app.js.map