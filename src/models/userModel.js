

import mongoose from 'mongoose'



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
    }

},{timestamps: true}) ; 

const User = mongoose.model.user||("user",userSchema); 


export default User