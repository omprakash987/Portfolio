
import User from "@/models/userModel"
import {connect} from '@/dbConfig/dbConfig'
import { NextResponse,NextRequest } from 'next/server';
import bcryptjs from 'bcryptjs'
import { IconArrowAutofitLeft } from "@tabler/icons-react";
import { sendEmail } from "@/helper/mailer";

connect(); 

export async function POST(request:NextRequest){
    try{
        const reqBody =await request.json(); 
        const {username, email,password} = reqBody; 

        console.log(reqBody); 
        const user = await User.findOne({email}); 
        if(user){
            return NextResponse.json({error:"user already exist"},{status:400}); 

        }
        const salt = await bcryptjs.genSalt(10); 
        const hashedPassword = await bcryptjs.hash(password,salt)


        const newUser = new User({
            username,email,password:hashedPassword
        })

        const savedUser =await newUser.save(); 

        console.log(savedUser); 

        await sendEmail({
            email,
            emailType:"VERIFY",
            userId:savedUser._id,

        })

        return NextResponse.json({
            messaage:"user registered sussfully",
            success:true,
            savedUser:savedUser._id
        })
    }
    catch(error:any){
        return NextResponse.json({error:error.message},{status:500})

    }
}



