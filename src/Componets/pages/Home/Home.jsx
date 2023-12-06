import React from "react";
import './Home.css';
import News from '../News/News'
export default function Home(){
    return(
        <div className="home">
            <div className="home-new-heading">
                <div className="home-bars">
                        <div></div>
                </div>
                    <div className="home-news">
                            NEWS
                    </div>
                <div className="home-bars">
                        <div></div>
                </div>
            </div>
    {/* ======================================================================= */}

                            <News/>
           

        </div>
    )
}