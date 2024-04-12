"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';




const SignupPage = () => {

  const router = useRouter(); 

  const [user,setUser] = useState({email:"",password:"",username:""})
  const [buttonDisabled,setButtonDisabled] = useState(false)
  const [loding,setLoding] = useState(false)

 

  const onSignup = async()=>{
    try{
      setLoding(true); 
    const response =  await axios.post("/api/user/signup",user)
     


    console.log("signUp success",response.data)
router.push('/signin'); 


    }
    catch(error:any){
 

      console.log(error)
      



    }
  }

  useEffect(()=>{
    if(user.username.length>0 &&user.password.length>0&&user.email.length>0){
      setButtonDisabled(false)

    }
    else{
      setButtonDisabled(true)

    }
  },[user])

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>
        {loding?"Processing":"signup"}
      </h1>
      <hr />
      <label htmlFor="username">username</label>
      <input type="text"
      id='username'
      value={user.username}
      onChange={(e)=>setUser({...user,username:e.target.value})}
      placeholder='username'

       />



       

<label htmlFor="email">email</label>
      <input type="email"
      id='email'
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      placeholder='email'
      
       />



<label htmlFor="username">password</label>
      <input type="password"
      id='password'
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      placeholder='password'
      
       />

<button onClick={onSignup}>
  {buttonDisabled ? "No signup":"signup"}
</button>
<Link href="/signin">visite login page </Link>
    </div>

  )
}

export default SignupPage