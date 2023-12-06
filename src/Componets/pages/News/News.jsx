import React, { useState } from "react";
import './News.css';
import { useValue } from "../../../Context";

import forward from '../../assets/forward.svg';
import backward from '../../assets/backward.svg';
import { useNavigate} from "react-router-dom";

export default function Newss(){
    const { news } = useValue();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = news?.articles?.slice(indexOfFirstItem,indexOfLastItem);
    const totalPages=Math.ceil(news?.articles?.length/itemsPerPage);

    const navigate=useNavigate()

    const NextP=()=>{
        if(currentPage<totalPages-1){
            setCurrentPage(currentPage+1)
        }
    }

    const PrevP=()=>{
        if(currentPage>1){
            setCurrentPage(currentPage-1)
        }
    }

    const handleClick=(e)=>{
        const id=itemsPerPage*(currentPage-1);
        navigate(`/NewsDetails/${e+id}`)
    }


    return(
        <div className="news">

           <div className="news-wrap">
           {currentItems && currentItems.map((d, i) => (
                <div key={i} className="news-container" onClick={()=>handleClick(i)}>
                    <img src={d.urlToImage} alt={d.title} className="news-img"/>
                    <p className="news-title">{d.title}</p>
                </div>
            ))}
           </div>
           <div className="page-count">
                    <button className="page-btn b" disabled={currentPage===1} onClick={PrevP}><img src={backward} alt="prevPage"/></button><p className="page-no">{currentPage}</p><button className="page-btn f" onClick={NextP}><img src={forward} alt="nextPage"/></button>
           </div>

        </div>
    );
}
