import mongoose from "mongoose";
import mpngoose from "mongoose";

export const database=()=>{
    mongoose
    .connect(process.env.MONGO_URI, {dbName: "Info-List", family:4})
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((error)=>{
        console.log("Some error is occured: ",error);
    });
}