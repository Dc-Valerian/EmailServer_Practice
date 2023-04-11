import mongoose from "mongoose";
import { enviromentvariables } from "../environmentvariables/environmentvariables";

const URL = enviromentvariables.MONGODB_STRING

export const dbconnection = async () => {
    try {
        const conn = await mongoose.connect(URL)
        if (
            mongoose.connection.host === "localhost"
        ) {
            console.log("connected to localhost")
        } else {
            console.log("Database is live now")
        }
    } catch (error) {
        console.log("failed to connect to the database", error)
    }
}