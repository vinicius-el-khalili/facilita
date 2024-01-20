import bodyParser from "body-parser";
import express from "express";
import pkg from 'pg';
import { NNMethod } from "./utils/NearestNeighbor/NearestNeighbor.js";

type clientType = {
    "client": string
    "client_email": string
    "client_phone": string
    "client_x": string
    "client_y": string
    "client_name": string
}

const { Client } = pkg

const client = new Client({
    host:"localhost",
    user:"dev",
    port:5432,
    password:"123654",
    database:"clientdb"
})
client.connect()

// express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app routes
app.get("/", async(req,res)=>{
    try {

        const result = 
        await client.query<clientType>(
        "SELECT * FROM clients"
        )

        res.status(200).json(result.rows)

    } catch(error) {
        res.status(500).json("Query fail")
    }
})

app.post("/add",async(req,res)=>{
    try {

        const {email,phone,x,y,name} = req.body

        await client.query(
        "INSERT INTO clients(client_email,client_phone,client_x,client_y,client_name) VALUES($1, $2, $3, $4, $5)",
        [ email,phone,x,y,name ])

        res.status(200).json("ok")

    } catch(error) {
        res.status(500).json("Query fail")
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try {

        await client.query(
        "DELETE FROM clients WHERE client=$1",
        [req.params.id])
        
        res.status(200).json("ok")

    } catch(error) {
        res.status(500).json("Query fail")
    }
})

app.get("/routes", async (req,res) => {

    try {

        const result = await client.query<{
            client: string,
            client_x: string,
            client_y: string
        }>(
        "SELECT client, client_x, client_y FROM clients"
        )

        const rows = result.rows
        const nodes = rows.map( (row)=>({ x: Number(row.client_x), y: Number(row.client_y) }) )
        const path = NNMethod(nodes)
        res.status(200).json(path)

    } catch(error) {
        res.status(500).json("Query fail")
    }

})

// server
app.listen(3000,()=>{
    console.log("Server is listening at port 3000")
})