import { StatusCodes } from "http-status-codes";
import { createUserService, userSignInService } from "../service/userService.js";


export const createUserSignupController=async function(req,res){
      try {
            const newUser=await createUserService(req.body)
      
            
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
            return res.status(StatusCodes.BAD_REQUEST).json({
                  Success:"false",
                  Message:"error occured in controller",
                  data:{}
            })        
            
      }}

export const userSignInController=async function(req,res){
      try {                      
            const response=await userSignInService(req.body)
            if(!response){
                  return res.status(StatusCodes.NOT_FOUND).json({
                        Success:"false",
                        Message:"error occured in controller",
                       explanation:"response not found at usersign in"
                  })
            }

            return res.status(StatusCodes.OK).json({
                  succuss:"True",
                  message:"User is Signed In successfully",
                  data:response
            })      
           
      } 
      catch (error) {
            console.log("Failed! Error in signIn controller",error);
            return res.status(StatusCodes.BAD_REQUEST).json({
                  Success:"false",
                  Message:"error occured in controller",
                  data:{}
            })
            
            
      }

}