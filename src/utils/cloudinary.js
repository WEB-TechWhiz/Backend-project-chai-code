 import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
 import fs from 'fs'

 cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
 });
 
 const uploadOnCloudinary=async(localFilePath)=>{
    try {
        if(!localFilePath)return null
        cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        console.log("file is uploded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)//remove the localy save temp file as the operation got faild
        return null;
    }
 }

 export {uploadOnCloudinary}