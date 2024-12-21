import express from 'express'
import { createCategoryController } from '../../Controllers/categoryController.js'
import { validator } from '../../validators/zodValidator.js'
import { createCategorySchema } from '../../validators/createCategorySchema.js'
import { authMiddleware } from '../../middleware/authMiddleware.js'

const router=express.Router()

router.post("/",validator(createCategorySchema),authMiddleware,createCategoryController)

export default router