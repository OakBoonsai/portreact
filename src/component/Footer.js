import { FaFacebook, FaGithub, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa"
import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
            <h4 style={{color:"white"}}>
                About me:<br/><br/>
            </h4>
                <div className="phone">
                    <h4 style={{color:"white"}}><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>099-746-2435</h4>
                </div> 
                <br/>
                <div className="email">
                    <h4 style={{color:"white"}}><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>tanachotboonsai@gmail.com</h4>
                </div>
                <div className="social">
                <a href="https://www.facebook.com/oakmol/" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={40} style={{color:"blue",marginRight: "1rem"}}/>
                </a>
                <a href="https://www.youtube.com/@o.s.r.vchannel6269" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={40} style={{color:"red",marginRight: "1rem"}}/>
                </a>
                <a href="https://github.com/OakBoonsai" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={40} style={{color:"#fff",marginRight: "1rem"}}/>
                </a>
                </div>
            </div>

            <div className="right">
                <h4 style={{color:"white"}}>
                    About me:<br/>
                </h4>
                <p>
                    I'm study college of industrial technology Computer engineering 4th year in KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (kmutnb). I'm passionate about networking and computer hardware
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer