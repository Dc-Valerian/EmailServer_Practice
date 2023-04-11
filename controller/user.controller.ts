import express,{Request,Response} from "express"
import usermodel from "../model/usermodel"


export const registerUser = (req:Request,res:Response) =>{
    try {

        const {username, email,password,token,verified} = req.body;


        const user = usermodel.create({
            username,email,password,token,verified
        })

        return res.status(200).json({
            message:"User created Successfully"
        })
        
    } catch (error) {
       return res.status(400).json({
        message:"An Error Occured",
        data:error
       })
    }
}
