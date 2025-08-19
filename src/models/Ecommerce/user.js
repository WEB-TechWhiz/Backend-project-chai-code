 import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
        usernmae:{
            type:string,
            requried:true,
            unique:true,
            lowercase:true
        },
        email:{
             type:string,
            requried:true,
            unique:true,
            lowercase:true
        },
        password:{
            type:string,
            requried:true,
        }
 },{timestamps:true})


 export const User=mongoose.model("User",userSchema)