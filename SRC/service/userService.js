import { userResository } from "../Repositories/userRepository.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from 'bcrypt'
import {jwtTOKEN} from '../utils/jwtToken.js'

export const createUserService = async function (data) {
      try {
                   
            if(!data.name||!data.email||!data.password){

                  throw {
                        success: false,
                        status: StatusCodes.NOT_FOUND,
                        message: "Please fill all the fields"
                  }
                        };
            
            const user = await userResository.createUser(data)
            if (!user) {
                  throw {
                        success: false,
                        status: StatusCodes.NOT_FOUND,
                        message: "Invalid data user is not found "
                  }
            }

            return user

      } catch (error) {
            console.error("Error in createUserService:", error);
            throw error;
      }
}

export const userSignInService=async function(data){
      try {  
                                           
            if(!data.email){
                  throw{
                        success: false,
                        status: StatusCodes.NOT_FOUND,
                        message: "Invalid data email is not found ",
                        explanation:"email not found in req object in signinService "
                  }

            }
            const userExist=await userResository.findUserByEmail(data.email)
            if(!userExist){
                  throw{
                        success: false,
                        status: StatusCodes.NOT_FOUND,
                        message: "Invalid data send by the client",
                        explanation:"No registered user founf by this email"
                  }

            }

            const isPasswordValid=bcrypt.compareSync(data.password,userExist.password)
            if(!isPasswordValid){
           
            
                  throw new Error({
                        success: false,
                        status: StatusCodes.FORBIDDEN,
                        message: "Invalid data send by the client",
                        explanation:"Password is incorrect please try again"
                  });
                  

            }

            const genJwtToken=jwtTOKEN({
                  id:userExist.id,
                  email:userExist.email
            })

            console.log("token generated is:",genJwtToken);
            return{
                  name:userExist.name,
                  email:userExist.email,
                  userTypes:userExist.userTypes,
                  Token:genJwtToken

            }
            
            


      } catch (error) {
            console.error("Error in createSignInService:", error);
            throw{
                  success: false,
                  status: StatusCodes.BAD_REQUEST,
                  message: "error in sign in service",
                 
            }
            
      }

}
