import { FaFacebook, FaGithub, FaMailBulk, FaPhone, FaYoutube } from "react-icons/fa"
import "./Footer.css"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="phone">
                    <h4 style={{color:"white"}}><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>099-746-2435</h4>
                </div> 
                <br/>
                <div className="email">
                    <h4 style={{color:"white"}}><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>tanachotboonsai@gmail.com</h4>
                </div>
                <div className="social">
                    <FaFacebook size={40} style={{color:"aqua",marginRight: "1rem"}}/>
                    <FaYoutube size={40} style={{color:"red",marginRight: "1rem"}}/>
                    <FaGithub size={40} style={{color:"#fff",marginRight: "1rem"}}/>
                </div>
            </div>

            <div className="right">
                <h4 style={{color:"white"}}>
                    About me:<br/>
                </h4>
                <p style={{color:"white"}}>
                    I'm study college of industrial technology Computer engineering 4th year in KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK (kmutnb). I'm passionate about networking and computer hardware
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer