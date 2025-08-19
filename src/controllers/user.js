//  import express from "express";
//  const app=express();
//  const PORT= 8000;
//  app.listen(`$PORT`)
//  app.get('/',(res,req)=>{
//     res.send("welcom")
//  })

const {fullname,email,username,password}=req.body
console.log("email",email);