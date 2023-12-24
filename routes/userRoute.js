import express  from "express";
import * as userController from "../controllers/userControlller.js"
const router = express.Router()


router.route("/register").post(userController.createUser)
router.route("/login").post(userController.loginUser)

export default router