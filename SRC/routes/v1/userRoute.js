import express from "express"
import { createUserSignupController } from "../../Controllers/userController.js"
import {validator} from '../../validators/zodValidator.js'
import {userSignUpZodSchema} from '../../validators/userSignUpZodSchema.js'

const router=express.Router()

router.post("/signup",validator(userSignUpZodSchema),createUserSignupController)



export default router