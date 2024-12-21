import { StatusCodes } from "http-status-codes";
import JWT from 'jsonwebtoken'
import { JWT_SECRETE } from "../Config/serverConfig.js";
import { User } from "../Schema/userSchema.js";

export const authMiddleware = async (req, res, next) => {
      try {

            const TOKEN = req.headers["x-access-token"]
            if (!TOKEN) {
                  return res.status(StatusCodes.NOT_FOUND).json({
                        success: false,
                        message: 'Token not found!! Please provide Token',
                  })

            }
            const varifyToken = JWT.verify(TOKEN, JWT_SECRETE)
        

            if (!varifyToken) {
                  return res.status(StatusCodes.FORBIDDEN).json({
                        success: false,
                        message: 'Invalid Token provided by the Client',
                  })

            }

            const isUserValid = await User.findById(varifyToken.id)
            if (!isUserValid) {
                  return res.status(StatusCodes.FORBIDDEN).json({
                        success: false,
                        message: 'User does not exist',
                  })

            }

            req.user = isUserValid.id
            next()

      } catch (error) {
            console.log("Error in auth middleware", error);
            return res.status(StatusCodes.BAD_REQUEST).json({
                  success: false,
                  message: 'Middleware error',

            })



      }
}