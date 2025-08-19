   import mongoose, { Schema } from "mongoose";
   const videoSchema= new mongoose.Schema({

         videoFile:{
            type:string,
            requried:true
         },
         titel:{
            typr:string,
            required:true,
         },
         duration:{
            type:string,
            requried:true,
         },
         views:{
            type:Number,
            default:true,
         },
         description:{
         type:string,
         required:true
         },
         isPublishes:{
          type:Boolean,
          default:true,
         },
         owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
         }

   },{timestamps:true})
    



   export const video=mongoose.model("video",videoSchema)