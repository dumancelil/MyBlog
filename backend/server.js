const express = require ("express");
const cors = require ("cors");
const mongoose = require ("mongoose");//for mongoDB database
const dotenv = require("dotenv"); // for dotenv infos
dotenv.config();// for backend-database connection
const userRouter= require ("./routers/router");

const app = express();

app.use(express.json());
app.use("/users", userRouter);


app.use (cors({
    origin: "*",
}))

app.listen (4242, ()=>{
    //connect to database
    mongoose.connect (process.env.MONGODB_URI)
    .then(() => console.log("DB connected successfully"))
    .catch((err) => console.log(err));
    console.log ("Server is running on port 4242");
});

//Backend-Database connection is done.