import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import route from "./Route/user.route"

export const appConfig = (app: Application) => {
    app.use(express.json()).use(cors()).use(morgan("dev"))

    app.use("/api",route)
}