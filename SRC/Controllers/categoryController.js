import { StatusCodes } from "http-status-codes";
import { createCategory } from "../service/categoryService.js";

export const createCategoryController = async (req, res) => {
      try {
            const response = await createCategory(req.body)
            if (!response) {
                  throw {
                        success: false,
                        status: StatusCodes.NOT_FOUND,
                        message: "Invalid data ",
                        explanation: "no response in the creating category"
                  }
            }

            return res.status(StatusCodes.OK).json({
                  succuss:"true",
                  message:"Category is created successfully",
                  data:response

            })
      } catch (error) {
            console.log("Failed! Error in creating category controller", error);
            return res.status(StatusCodes.BAD_REQUEST).json({
                  Success: "false",
                  Message: "error occured in controller",
                  data: {}
            })

      }
}