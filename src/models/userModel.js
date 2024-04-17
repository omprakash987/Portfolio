

import mongoose from 'mongoose'
import { type } from 'os';



const userSchema = new mongoose.Schema({
    username:{
        type:String, 
        require:true, 
    },
    email:{
        type:String, 
        require:true,
        unique:true, 
    },
    password:{
        type:String, 
        require:true, 
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
    

},{timestamps: true}) ; 

const User = mongoose.models.user || mongoose.model("user", userSchema);



export default User