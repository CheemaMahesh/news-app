import React, { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useValue } from "../../Context";
import { useNavigate } from "react-router-dom";
export default function AuthController(){

    const {authUser}=useValue();
    const navigate=useNavigate()

    useEffect(()=>{
        if(authUser){
        navigate('/');
        }
    },[authUser])
    
    const [isClick,setIsClick]=useState(true)

    return(
        <>
        {isClick?<SignIn setIsClick={setIsClick}/>:<SignUp setIsClick={setIsClick}/>}
        
        </>
    )
}