// import express from "express"
// const app=express()
import connectDB from "./db/index.js";
import dotenv from 'dotenv'
import { app } from "./utils/app.js";
   dotenv.config({
    path:'../env',

   })
     
   connectDB()
   .then(()=>{
     app .listen(process.env.PORT || 8000,()=>{
      console.log(`server is running at port:$ {process.env.PORT}`)     })
   })

   .catch((error)=>{
     console.log("Mongodb connection failed!!!",error)
   })

   // app.get("/",(res, req)=>{
   //    res.send("server started now!")
   //   })

   console.log("server started here!")