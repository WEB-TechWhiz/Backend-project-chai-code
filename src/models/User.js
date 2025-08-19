 import mongoose from "mongoose";
 import { Schema } from "mongoose";

 const userSchema= new Schema({
     
      FirstName:{
        type:string,
        require:true,
      },
      LastNmae:{
        type:string,
        require:true
      },
      email:{
        type:string,
        require:true
    },
    password:{
        type:string,
        require:true
    }
 },{timestamps:true})


export const user = mongoose.model('user',userSchema);