import express from 'express'
import { createCategoryController } from '../../Controllers/categoryController.js'
import { validator } from '../../validators/zodValidator.js'
import { createCategorySchema } from '../../validators/createCategorySchema.js'

const router=express.Router()

router.post("/",validator(createCategorySchema),createCategoryController)

export default router