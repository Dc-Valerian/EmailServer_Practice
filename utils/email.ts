import nodemailer from "nodemailer"
import { google } from "googleapis"

const GOOGLE_ID: string ="404545849557-gln2efcvnns1fsqf6n50mfigcho2t15c.apps.googleusercontent.com";
const GOOGLE_SECRET: string = "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";
const GOOGLE_REFRESHTOKEN: string = "1//04SsUaDmDIP-_CgYIARAAGAQSNwF-L9IrOaI8CSeNlG9avHNMMWIEFIxtwx8T2AbuuPJqmbMbox2QuZuL5Ebm9_-pNUDDdD2fTR8";
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
                user: "valerianpedro03@gmail.com",
                clientId: GOOGLE_ID,
                clientSecret: GOOGLE_SECRET,
                refreshToken: GOOGLE_REFRESHTOKEN,
                accessToken:"ya29.a0Ael9sCO8bU808PTGf8jgfIDGySdxjChr1fDA9QXIWNXyDFppk2Ss24cJUzAN0wuQeTdXBBNNZ6gymTCtz57e61AQ1nXHa87uB8OAcAZw3sZLwpvjceMkjPBPcLJrnDfjNlSLI-vJLgIr0sd6pkruhpsnii7naCgYKAfgSARESFQF4udJh0iZDTlqIYxPvP91OQOU7Ug0163"
            }
        })

        const mailerOption = {
            from: "Easy Pay💰💸 <valerianpedro03@gmail.com>",
            to: user.email,
            subject: "Account verification",
            html: `<div>Welcome ${user.username} 
            <a href="http://localhost:3111/api/user/${user._id}/verified">verified</a>
            <br/>
            <br/>
            ${user.otp}
              </div>`,
          };

        transporter
            .sendMail(mailerOption)
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

export const resetPassword = async(user:any) =>{
    try {
        oAuth.setCredentials({access_token:GOOGLE_REFRESHTOKEN})
        const getToken:any =(await oAuth.getAccessToken()).token;

        const transporter = nodemailer.createTransport({
            service:"gmail",

            auth:{
                type:"OAUTH2",
                user:"techicon19@gmail.com",
                clientId:GOOGLE_ID,
                clientSecret:GOOGLE_SECRET,
                refreshToken:GOOGLE_REFRESHTOKEN,
                accessToken:
                "ya29.a0Ael9sCO8bU808PTGf8jgfIDGySdxjChr1fDA9QXIWNXyDFppk2Ss24cJUzAN0wuQeTdXBBNNZ6gymTCtz57e61AQ1nXHa87uB8OAcAZw3sZLwpvjceMkjPBPcLJrnDfjNlSLI-vJLgIr0sd6pkruhpsnii7naCgYKAfgSARESFQF4udJh0iZDTlqIYxPvP91OQOU7Ug0163"
            }
        })

        const mailerOption ={
            from :"Easy Pay <valerianpedro03@gmail.com>",
            to:user.email,
            subject:"Reset Password Request",
            html:`<div>
            Welcome ${user.username}
            <a href="http://localhost:3111/api/user/${user._id}/${user.token}/reset-password">verified</a>
            <br/>
            <br/>
            ${user.OTP}
            </div>`
        };

        transporter.sendMail(mailerOption).then(()=>{
            console.log("Email Send");
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}