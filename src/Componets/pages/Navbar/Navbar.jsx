import React from "react";
import './Navbar.css';
import { useValue } from "../../../Context";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar(){
    const {authUser,userSignOut,email}=useValue();
    const navigate=useNavigate()

    const handleFav=()=>{
        if(authUser){
            navigate('/Favorites');
        }else{
            alert("Log in to View Favorites");
            navigate('/Auth');
        }
    }
    return(
        <div className="nav">
                <div className="top">
                       <div className="logo"></div>         
                </div>
                <div className="middle">
                    <Link className="election" to='/'>HOME</Link>
                    <Link className="election" to='/'>India</Link>
                    <Link className="election" to='/'>New</Link>
                    <div className="election" onClick={handleFav}>Favorites</div>
                    <Link to='/Auth' className="election login-p-div">
                        <button>{email?<i onClick={userSignOut}>LogOut</i>:<>Login</>}</button>
                    </Link>


                </div>
               
        </div>
    )
}