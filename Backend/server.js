import express from "express";
import dotenv from "dotenv";
import {database} from "./utils/database.js";

const app=express();

dotenv.config({path: "./.env"});

database();

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening ${process.env.PORT}`)
})