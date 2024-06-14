import express from "express";
import dotenv from "dotenv";
import {database} from "./utils/database.js";
import router from "./routes/user.routes.js";
import cors from "cors";

const app=express();

dotenv.config({path: "./.env"});

database();

app.use(express.json())
app.use(cors())

app.use('/api', router);

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening ${process.env.PORT}`)
})