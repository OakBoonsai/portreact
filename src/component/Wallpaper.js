import "./Wallpaper.css";
import React from 'react';
import IntroImg from "../assets/marble.jpg";
import { Link } from "react-router-dom";

const Wallpaper = () => {
  return (
    <div className="picture">
        <div className="mask">
            <img className="into-img" src={ IntroImg } alt="IntroImg"/>
        </div> 
        <div className="content">
            <p style={{color:"White"}}>My nickname</p>
            <p style={{color:"White"}}>is</p>
            <h1 style={{color:"White"}}>OAK</h1>
            <div>
                <Link to ="/contact" className="btn">For more</Link>
            </div>
        </div>
    </div>
  )
}

export default Wallpaper