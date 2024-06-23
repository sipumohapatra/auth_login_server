import express from "express"
const route=express.Router()
import { resgistration,login } from "../controller/userController.js"






route.post("/resgistration",resgistration)
route.post("/login",login)
 export default route