import bodyParser from "body-parser";
import express from "express";
import pkg from 'pg';
import { NNMethod } from "./utils/NearestNeighbor/NearestNeighbor.js";
import { connectToDatabase } from "./db/connectToDatabase.js";
import cors from 'cors';

type clientType = {

    "id": string
    "nome": string
    "email": string
    "telefone": string
    "x": string
    "y": string

}

let client = await connectToDatabase()


// express app 
const app = express()

// middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app routes
app.get("/", async(req,res)=>{

    try {

        if(!client){ return }
        const result = 
        await client.query<clientType>(
        "SELECT * FROM clients"
        )

        res.status(200).json(result.rows)

    } catch(error) {

        console.log(error.message)
        res.status(500).json("Query fail")

    }
})

app.post("/add",async(req,res)=>{

    try {

        if(!client){ res.status(500).json("Database fail"); return }
        const { nome,email,telefone,x,y } = req.body
        const result = await client.query(
        "INSERT INTO clients(nome,email,telefone,x,y) VALUES($1, $2, $3, $4, $5)",
        [ nome,email,telefone,x,y ])

        console.log(result)

        res.status(200).json("ok")

    } catch(error) {

        console.log(error.message)
        res.status(500).json("Query fail")

    }
})

app.delete("/delete/:id",async(req,res)=>{

    try {

        if(!client){ res.status(500).json("Database fail"); return }
        await client.query(
        "DELETE FROM clients WHERE id=$1",
        [req.params.id])
        
        res.status(200).json("ok")

    } catch(error) {

        res.status(500).json("Query fail")
        
    }
})

app.get("/routes", async (req,res) => {

    try {

        if(!client){ res.status(500).json("Database fail"); return }
        const result = await client.query<{
            id: string,
            x: string,
            y: string
        }>(
        "SELECT client, x, y FROM clients"
        )

        const rows = result.rows
        const nodes = rows.map( (row)=>({ x: Number(row.x), y: Number(row.y) }) )
        const path = NNMethod(nodes)
        
        res.status(200).json(path)

    } catch(error) {
        res.status(500).json("Query fail")
    }

})

// server
app.listen(3000,()=>{
    
    console.log("* Server is listening at port 3000 *")

})