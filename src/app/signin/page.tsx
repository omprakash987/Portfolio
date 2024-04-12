"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';




const SigninPage = () => {

  const router = useRouter(); 

  const [user,setUser] = useState({email:"",password:""})
  const [buttonDisabled,setButtonDisabled] = useState(false)
  const [loding,setLoding] = useState(false)

 

  const onSignin = async()=>{
    try{
      setLoding(true); 
    const response =  await axios.post("/api/user/signin",user)
     


    console.log("signUp success",response.data)
router.push('/'); 


    }
    catch(error:any){
 

      console.log(error)
      



    }
  }

  useEffect(()=>{
    if(user.password.length>0&&user.email.length>0){
      setButtonDisabled(false)

    }
    else{
      setButtonDisabled(true)

    }
  },[user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>
        {loding?"Processing":"signin"}
      </h1>
      <hr />
      

<label htmlFor="email">email</label>
      <input type="email"
      id='email'
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      placeholder='email'
      
       />



<label htmlFor="password">password</label>
      <input type="password"
      id='password'
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      placeholder='password'
      
       />

<button onClick={onSignin}>
  {buttonDisabled ? "No signin":"signin"}
</button>
<Link href="/signup">visite signup page </Link>
    </div>

  )
}

export default SigninPage