import { userResository } from "../Repositories/userRepository.js";
import { StatusCodes } from "http-status-codes";

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
