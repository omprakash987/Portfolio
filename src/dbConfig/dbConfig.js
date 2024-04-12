

import mongoose from 'mongoose'


export async function connect(){
    try{

        mongoose.connect(process.env.MONGODB_URI); 
       const connection = mongoose.connection; 

       connection.on("connected",()=>{
        console.log("mongodb connected"); 

       })

       connection.on("error",(error)=>{
        console.log("mongodb connection error"+error)
        process.exit() ; 


       })




    }
    catch(error){
      console.log("somtihing went wrong")


  console.log(error)
}

}