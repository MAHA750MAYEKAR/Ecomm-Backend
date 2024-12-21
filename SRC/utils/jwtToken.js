import JWT from "jsonwebtoken"
import { JWT_EXPIRY,JWT_SECRETE } from "../Config/serverConfig.js"

export const jwtTOKEN=(payload)=>{
      return JWT.sign(payload,JWT_SECRETE,{ expiresIn: JWT_EXPIRY })

}