import React from "react";
import Home from "./pages/Home/Home";
import Favorite from "./pages/Favorites/Favorites";
import NewsDetails from "./pages/NewsDetails/NewsDetails";
import AuthController from "./Auth/AuthController";
import Navbar from "./pages/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




export default function RoutesController(){


    
    return(
        <div>
            <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewsDetails/:id" element={<NewsDetails />} />
          <Route path="/Favorites" element={<Favorite />} />
          <Route path="/Auth" element={<AuthController/>}/>
        </Routes>
      </Router>
        </div>
    )
}