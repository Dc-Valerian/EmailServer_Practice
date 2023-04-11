import express,{Router} from "express"
import {registerUser} from "../controller/user.controller"

const route = Router()

route.post("/register",registerUser)

export default route