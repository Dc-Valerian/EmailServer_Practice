import mongoose from "mongoose";

interface IUser {
    username:string;
    email:string;
    password:string;
    token:string;
    otp:string;
    verified:boolean;
    passwordData:any[];
    dateandtime:any[];
}

interface userdata extends IUser, mongoose.Document{}

const usermodel = new mongoose.Schema<IUser>(
    {
        username:{
            type:String,
        },
        email:{
            type:String,
        },
        password:{
            type:String,
        },
        token:{
            type:String,
        },
        otp:{
            type:String,
        },
        verified:{
            type:Boolean,
            default:false
        },
        passwordData:[],
        dateandtime:[],
    },{
        timestamps:true
    }
)

export default mongoose.model<userdata>("emailServerPractice",usermodel)