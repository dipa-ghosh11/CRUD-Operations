import mongoose from "mongoose";

const userSchema= new mongoose.Schema({

    name:{
        type:String,
        requierd:true
    },
    email:{
        type:String,
        requierd:true
    },
    phone:{
        type:Number,
        requierd:true
    },
    profession:{
        type:String,
        requierd:true
    }

}, {timestamps: true})

export const USER=mongoose.model("USER", userSchema);