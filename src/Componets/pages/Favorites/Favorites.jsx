import React, { useEffect } from "react";
import './Favorites.css';
import { useNavigate} from "react-router-dom";
import { useValue } from "../../../Context";
export default function Favorite(){

    const {fav,removeFav,email,authUser}=useValue();

    const navigate=useNavigate();

    useEffect(()=>{
        if(!email){
            navigate('/');
        }
    },[authUser])

   

    return(
        <div className="Favorites">



            {fav.map((d)=>(
                <>

                    <div className="fav-container">
                            <img src={d.news.urlToImage} alt={d.news.title}/>
                                <div>
                                <h3>{d.news.title}</h3>
                                <p>
                                    <b>Author</b>:<i>{d.news.author}</i>
                                </p>
                                </div>
                                <button onClick={()=>removeFav(d.id)}>
                                    Remove FAVORITE
                                </button>
                    </div>
                    <hr/>   

                </>
            ))}

                 
                    
                           

        </div>
    )
}