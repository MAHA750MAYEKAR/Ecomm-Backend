import { categoryRepository } from "../Repositories/categoryRepository.js";
import { StatusCodes } from "http-status-codes";
export const createCategory = async (data) => {
      try {
            if(!data||!data.name){
                  throw {
                        success: false,
                        status: StatusCodes.BAD_REQUEST,
                        message: "Category name is required",
                    };
            }
            const isCategoryAlreadyExist = await categoryRepository.findCategoryByName(data.name)
            if (isCategoryAlreadyExist) {
                  throw {
                        success: false,
                        status: StatusCodes.BAD_REQUEST,
                        message: "This category name already exists. Please provide a different name.",
                    };
                        }
            const newCategory = await categoryRepository.createCategory(data)
            return newCategory


      } catch (error) {
            console.error("Error in creating category at service", error);
            throw {
                  success: false,
                  status: StatusCodes.BAD_REQUEST,
                  message: "error in creating category",

            }

      }

}

