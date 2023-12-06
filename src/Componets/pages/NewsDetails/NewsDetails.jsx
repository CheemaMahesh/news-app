import React from "react";
import './NewsDetails.css';
import { useParams ,useNavigate} from "react-router-dom";
import { useValue } from '../../../Context';

export default function NewsDetails() {
    const { news,addFav,email } = useValue();
    const { id } = useParams();
    const ids = parseInt(id, 10);
    const navigate=useNavigate()

    
    // Check if 'news' exists and if 'articles' is an array
    const pageDetails = news && Array.isArray(news.articles) && news.articles.length > ids ? news.articles[ids] : null;

    const handleFav=()=>{
        if(email){
            addFav(pageDetails);

        }else{
            alert("Log it to add ");
            navigate('/Auth')
        }
    }

    return (
        <div className="news-details">
            {pageDetails ? (
                <>
                    <h1 className="news-details-title">{pageDetails.title}</h1>
                    <h6>{pageDetails.description}</h6>
                    <p className="news-details-time">{pageDetails.publishedAt}</p>
                    <img src={pageDetails.urlToImage} alt={pageDetails.title} className="news-details-image" />
                    <p>{pageDetails.content}</p>
                    <div className="additional-info">
                        <p>Author: {pageDetails.author}</p>
                        <button className="fav-btn" onClick={handleFav}>Favorite</button>
                    </div>
                    <a href={pageDetails.url}>Additional info: {pageDetails.url}</a>
                </>
            ) : (
                <p>No data found for this ID.</p>
            )}
        </div>
    );
}
