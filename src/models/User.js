import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import mongoose from "mongoose";
 import { Schema } from "mongoose";

 const userSchema= new Schema({
     
     Username:{
      type:string,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
     },
      FullName:{
        type:string,
        require:true,
        trim:true,
        index:true
      },

      avatar:{
        type:string,
        require:true,
      },
      
      coverImage:{
        type:string,
      },
       watchHistory:{
           type:Schema.Types.ObjectId,
           ref:"video"
       },
      email:{
       type:string,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:string,
        require:[true,"Password is required"]
    },
    refreshToken:{
      type:String,
    },
 },{timestamps:true})

 userSchema.pre("save",async function (next){
   if(!this.isModified("password")) return next();   
  this.password=bcrypt.hash(this.password,10)
      next()
 })

 userSchema.method.isPasswordCorrect=async function (password){
 return await bcrypt.compare(password,this.password)
 }
userSchema.method.generateAccessToken=function(){
    jwt.sign(
      {
        _id:this._id,
        email:this.email,
        Username:this.Username,
        FullName:this.FullName  
      },
      process.env.ACCESS_TOKEN_SECRET,
    )
} 
userSchema.method.generateRefreshToken= function(){
       jwt.sign(
      {
        _id:this._id, 
      },
      process.env.REFRESH_TOKEN_SECRET,
    )
}
export const User = mongoose.model('User',userSchema);