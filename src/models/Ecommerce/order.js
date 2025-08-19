 import mongoose from "mongoose";

const oderItemSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        required:true,
    }
})

 const orderSchema=new mongoose.Schema({
        orderPrice:{
            type:Number,
            required:true
        },
          
        Customer:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

        orderItem:{
            type:[oderItemSchema]
        },
        address:{
            type:string,
            required:true,
        },
        status:{
            type:string,
            enum:["PENDING","CANCELLED",'DELIVERD'],
            default:"PENDING",
         }
        
 },{timestamps:true})


 export const Order=mongoose.model("Order",orderSchema)