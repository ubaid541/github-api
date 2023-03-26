import express from "express"
import apiController from "../controllers/ApiController.js"
const router = express.Router()

router.get("/",apiController.getUsers)

export default router