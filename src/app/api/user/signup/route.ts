
import User from "@/models/userModel"
import {connect} from '@/dbConfig/dbConfig'
import { NextResponse,NextRequest } from 'next/server';

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

        const newUser = new User({
            username,email,password
        })

        const savedUser =await newUser.save(); 
        console.log(savedUser); 
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



