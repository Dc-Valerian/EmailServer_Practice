import express,{Router} from "express"
import {registerUser, verifyuser} from "../controller/user.controller"

const route = Router()

route.post("/register",registerUser)
route.post("/:userId/verified",verifyuser)

export default route