import { StatusCodes } from "http-status-codes";

export const validator=(zodSchema)=>{
      return async function(req,res,next){
            try {
                  await zodSchema.parseAsync(req.body);
                  next();
                  
            } catch (error) {
                  console.log("zod validation error");
                  
                  return res.status(StatusCodes.BAD_REQUEST).json({
                        success:"false",
                        message:"Validation failed",
                        Error:"Zod validation Error"

                  })                  
            }
      }

}