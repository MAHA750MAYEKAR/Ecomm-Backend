import express from "express"
import { createUserSignupController } from "../../Controllers/userController.js"
import {validator} from '../../validators/zodValidator.js'
import {userSignUpZodSchema} from '../../validators/userSignUpZodSchema.js'
import { userSignInController } from "../../Controllers/userController.js"
import { userSignInZodSchema } from "../../validators/userSignInSchema.js"

const router=express.Router()

router.post("/signup",validator(userSignUpZodSchema),createUserSignupController)
router.post("/signin",validator(userSignInZodSchema),userSignInController)



export default router