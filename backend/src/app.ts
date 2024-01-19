import bodyParser from "body-parser";
import express from "express";
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
    host:"localhost",
    user:"dev",
    port:5432,
    password:"123654",
    database:"clientdb"
})

// express app
const app = express()

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// app routes
app.get("/",(req,res)=>{
    console.log("Test")
})

// server
app.listen(3000,()=>{
    console.log("Server is listening at port 3000")
})