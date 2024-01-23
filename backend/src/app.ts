import bodyParser from "body-parser";
import express from "express";
import pkg from 'pg';
import { NNMethod } from "./utils/NearestNeighbor/NearestNeighbor.js";
import { connectToDatabase } from "./db/connectToDatabase.js";
import cors from 'cors';
import { executeBruteForceMethod } from "./utils/BruteForce.js";


type ClientType = {
    id: number,
    nome: string,
    email: string,
    telefone: string,
    x: string,
    y: string
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
        await client.query<ClientType>(
        "SELECT * FROM clients"
        )
        let clients = result.rows
        res.status(200).json(clients)

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

        // Query clients
        const result = await client.query<ClientType>(
        "SELECT * FROM clients"
        )
        let clients = result.rows

        // Add origin
        clients.unshift({id:-1,x:"0",y:"0",nome:"Origem",email:"",telefone:""})

        // 
        const coordinates = clients.map(({ x, y }) => ({ x:Number(x), y:Number(y) }))
        const { shortestPath, shortestDistance } = executeBruteForceMethod(coordinates)
        
        let clientPath: ClientType[] = []
        for (let i=0; i< shortestPath.length; i++){
            clientPath.push(clients[shortestPath[i]])
        }

        console.log(clientPath)
        res.status(200).json({clientPath,shortestDistance})

    } catch(error) {
        console.log(error.message)
        res.status(500).json("Query fail")
    }

})

// server
app.listen(3000,()=>{
    
    console.log("* Server is listening at port 3000 *")

})