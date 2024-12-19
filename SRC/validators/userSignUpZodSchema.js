import {z} from 'zod'

export const userSignUpZodSchema=z.object({
      name:z.string().min(5, { message: "Username must be at least 3 characters long" }),
      email:z.string().email({ message: "Invalid email format" }),     
      password:z.string().min(4,{message:"Password must be at least 8 characters long"})
})