import nodemailer from "nodemailer"
import { google } from "googleapis"

const GOOGLE_ID: string ="404545849557-gln2efcvnns1fsqf6n50mfigcho2t15c.apps.googleusercontent.com";
const GOOGLE_SECRET: string = "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";
const GOOGLE_REFRESHTOKEN: string = "1//04BR7IkRlIcjKCgYIARAAGAQSNwF-L9IrgQkOUSy7WSD-XyYnpJILr3ssOJ7goZ6BbNXaWUOcxs_Cma6_-x-8IGwuJmRbrr4nTt4";
const GOOGLE_REDIRECT: string = "https://developers.google.com/oauthplayground/";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT)

export const verifyAccount = async (user:any) => {
    try {
        oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN })
        
        const getToken: any = oAuth.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAUTH2",
                clientId: GOOGLE_ID,
                clientSecret: GOOGLE_SECRET,
                refreshToken: GOOGLE_REFRESHTOKEN,
                accessToken:"ya29.a0Ael9sCObg7MQyU3hB-_T9uz3ZdfZOKV_st5q4U2_9qTiPspBf1Vbx_CRITwEVc3fueI7L3PUrcTbmkXG4gnlOSGhCjAMFL6hhsgjqYwLU5P2759xkTbA5819D_NscxV3UlWfCJg-MJtbVIeHB3w-69nMydcSaCgYKAbwSARESFQF4udJh6RfXbJSQt7rs7NokEsxdkw0163"
            }
        })

        const mailOptions = {
            from: "MyMail<valerianpedro03@gmail.com>",
            to: user.email,
            subject: "Account Verification",
            html: `<div> Welcome to EasyHR ${user.username}</div>`
        }

        transporter
            .sendMail(mailOptions)
            .then(() => {
            console.log("email sent")
            })
            .catch((err) => {
            console.log(err)
        })
    } catch (error) {
        console.log()
 }
}