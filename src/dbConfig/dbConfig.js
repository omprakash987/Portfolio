

import mongoose from 'mongoose'

import User from '../models/userModel'

export async function Connect(){
    try{

       await mongoose.connect(process.env.MONGODB_URI); 
       const connection = mongoose.connection; 

       connection.on("connected",()=>{
        console.log("mongodb connected"); 

       })

       connection.on("error",(error)=>{
        console.log("mongodb connection error")
        process.exit() ; 


       })
; 



    }
    catch(error)

{

  console.log(error)
}}