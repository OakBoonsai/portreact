import "./Navbar.css";
import React , { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from "react-icons/fa";


const Navbar = () => {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color,setColor]=useState(false);

    const changeColor=()=>{
        if(window.scrollY >= 50){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 style={{ fontFamily: '"Righteous", Arial, sans-serif' }}>My Profile</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/resume">Resume</Link>
                </li>
                <li>
                    <Link to ="/contact">About me</Link>
                </li>
            </ul>
            <div className="menu" onClick={handleClick}>
                {click?
                (<FaTimes size={20} style={{color: "#fff"}}/>):
                (<FaBars size={20} style={{color: "#fff"}}/>)
                }
            </div>
        </div>
    )
}

export default Navbar;