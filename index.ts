import express, { Application } from "express"
import { appConfig } from "./app"
import { dbconnection } from "./Config/dbconnection"

const app: Application = express()

appConfig(app)
dbconnection()

app.listen(2033, () => {
    console.log("Server is up and running")
})