import mongoose from 'mongoose'

const categorySchema=new mongoose.Schema({
      name:{
            type:String,
            required:true,
            unique:true
      },
      description:{
            type:String,
            required:true
      },
      userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
      }


},{timestamps:true})

export const Category=mongoose.model("Category",categorySchema)