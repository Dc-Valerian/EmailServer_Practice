import express,{Request,Response} from "express"
import usermodel from "../model/usermodel"
import crypto from "crypto"


export const registerUser =async (req:Request,res:Response) =>{
    try {

        const {username, email,password,token,verified,otp} = req.body;

        const getToken = await crypto.randomBytes(32)

        const getOtp = await crypto.randomBytes(2)

        const user = await usermodel.create({
            username,email,password,token:getToken,verified, otp:getOtp
        })

        return res.status(200).json({
            message:"User created Successfully",
            data:user
        })
        
    } catch (error) {
       return res.status(400).json({
        message:"An Error Occured",
        data:error
       })
    }
}
