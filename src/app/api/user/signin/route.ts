

import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { error } from "console";
import jwt from 'jsonwebtoken'



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
            return NextResponse.json({error:"check your credentails"},{status:400}); 

        }
        const tokenData = {
            id:user._id,
            username:"user.username",
            email:user.email,
        }
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        const response =  NextResponse.json({
            message:"login success",
            success:true
           })
           response.cookies.set("token",token,{
            httpOnly:true
           })

          
           return response; 
           
      
    }

    catch(error:any){
        
        console.log(error)

return NextResponse.json({error:error.message},{status:500})

    }



}

