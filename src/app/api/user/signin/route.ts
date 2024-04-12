

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcrypt'


connect(); 

export async function POST(request:NextRequest){
    try{
        const reqBody =await request.json();
        const {email,password} = reqBody;

        const user = await User.findOne({email}).select(["+password"]); 

        if(!user){
            return NextResponse.json({message:"user not found"}); 

        }
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return NextResponse.json({message:"invalid password"}); 
        }

        const response =  NextResponse.json({
            message:"login success",
            success:true
           })

           console.log("signin successfull",response)
           return response; 
           
      
    }
    catch(error){
        console.log(error)


    }



}

