import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

import mongoose from "mongoose";
 import { Schema } from "mongoose";

 const userSchema= new Schema({
     
     Username:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true
     },
      FullName:{
        type:String,
        require:true,
        trim:true,
        index:true
      },

      avatar:{
        type:String,
        require:true,
      },
      
      coverImage:{
        type:String,
      },
       watchHistory:{
           type:Schema.Types.ObjectId,
           ref:"video"
       },
      email:{
       type:String,
        require:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    password:{
        type:String,
        require:[true,"Password is required"]
    },
    refreshToken:{
      type:String,
    },
 },{timestamps:true})

 userSchema.pre("save",async function (next){
   if(!this.isModified("password")) return next();   
  this.password= await bcrypt.hash(this.password,10)
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