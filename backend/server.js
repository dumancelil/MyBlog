const express = require ("express");
const app = express();
const cors = require ("cors");
const mongoose = require ("mongoose")//for mongoDB database
const connectDB = require('./connection/connection');// for mongoDB database
require('dotenv').config();// for backend-database connection


connectDB();// connect to database

app.use(express.json());



app.use (cors({
    origin: "*",
}))

app.listen (4242, ()=>{
    console.log ("Server is running on port 4242");
});

//Backend-Database connection is done.