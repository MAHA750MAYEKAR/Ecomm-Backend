import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export const connectDb=async()=>{
      try {
            await mongoose.connect(DB_URL)
            console.log("connected to db");
            
            
      } catch (error) {
            console.log("error in connecting to db");
            
            
      }
}