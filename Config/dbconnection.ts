import mongoose from "mongoose";
import { enviromentvariables } from "../environmentvariables/environmentvariables";

const URL = enviromentvariables.MONGODB_STRING
const DB_URL = "mongodb://0.0.0.0:27017/EMAILSERVER"

export const dbconnection = async () => {
    try {
        const conn = await mongoose.connect(DB_URL)
        if (
            mongoose.connection.host === "0.0.0.0"
        ) {
            console.log("connected to localhost")
        } else {
            console.log("Database is live now")
        }
    } catch (error) {
        console.log("failed to connect to the database", error)
    }
}