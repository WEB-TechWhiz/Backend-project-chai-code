//  import express from "express";
//  const app=express();
//  const PORT= 8000;
//  app.listen(`$PORT`)
//  app.get('/',(res,req)=>{
//     res.send("welcom")
//  })

// import { asyncHandler } from "../utils/asyncHandler";

// const {fullname,email,username,password}=req.body
// console.log("email",email);
import { apiResponse } from "../utils/apiResponse.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
import { User } from "../models/User.js"
 import { apiError } from "../utils/apiError.js"
 import { asyncHandler } from "../utils/asyncHandler.js"
 const registerUser=asyncHandler(async(res , req )=>{
    // res.status(200).json({
    //     message:"ok"
    // })

   const{FullName,email,Username,password}=req.body
   console.log("email",email )

   if(
    [FullName,email,Username,password].some((field)=>
    field?.trim()==="")
   ){
    //  throw new apiError(400,"fullname is requrired")
     throw new apiError(400,"all fields are reqired")
  }

  const existedUser= await User.findOne({
    $or:[{Username},{email}]
  })
  if(existedUser){
    throw new apiError(409,"user with email or username already exists")
  }
  const avatarLocalPath=req.files?.avatar[0]?.path;
  const coverImageLocalPath=req.files?.coverImage[0]?.path;
    
  if(!avatarLocalPath){
    throw new apiError(400,"Avatar file is required")
  }

 const avatar= await uploadOnCloudinary(avatarLocalPath)
 const coverImage=await uploadOnCloudinary(coverImageLocalPath)

 if(!avatar){
    throw new apiError(400,"Avatar file is requried") 
 }
  const user = await User.create({
    FullName,
    avatar:"avatar.url",
    coverImage: coverImage?.url || "",
    email,
    password,
    Username:Username.toLowerCase() 
   })
 const createduser = await User.findById(user._id).select(
    "-password -refreshToken"
 )
 if(!createduser){
    throw new apiError(500,"somthing went wrong while  registering the user")
 }
 return res.status(201).json(
    new apiResponse(200,createduser,"user registerd succesfully")
 )
})

export{registerUser}