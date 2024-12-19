import express from "express"
import { createUserSignupController } from "../../Controllers/userController.js"

const router=express.Router()

router.post("/signup",createUserSignupController)



export default router