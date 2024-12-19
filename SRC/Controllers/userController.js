import { StatusCodes } from "http-status-codes";
import { createUserService } from "../service/userService.js";

export const createUserSignupController=async function(req,res){
      try {
            const newUser=await createUserService(req.body)
            console.log(req.body);
            
            if (!newUser) {
                  throw{
                        success: false,
                        status: StatusCodes.NOT_FOUND,
                        message: "Invalid data user is not found ",
                        explanation:"new user not found at user controller"
                  }
                  
            }
            
            return res.status(StatusCodes.CREATED).json({
                  succuss:"true",
                  message:"User is created successfully",
                  data:newUser
            })
            
      } catch (error) {
            console.log("err in creating user controller");           
            
      }

}