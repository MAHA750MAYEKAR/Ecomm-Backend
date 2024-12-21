import {z} from "zod"
 export const userSignInZodSchema=z.object({
      email:z.string().email({ message: "Invalid email format" }),     
      password:z.string().min(4,{message:"Password must be at least 8 characters long"})

 })