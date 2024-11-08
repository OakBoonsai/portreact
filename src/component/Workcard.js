import "./Workcard.css";
import pro1 from "../assets/strawberry.jpg"
import pro2 from "../assets/flutter.png"
import pro3 from "../assets/pet.jpg"
import pro4 from "../assets/cisco.png"
import pro5 from "../assets/ai.jpg"
import UB from "../assets/UB.png"
import SRV from "../assets/srv.png"
import CDV from "../assets/cdv.png"
import py from "../assets/pythonlogo.png"
import flut from "../assets/flutterlogo.png"
import sql from "../assets/SQLlogo.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import KMUTNB from "../assets/kmutnb.png"
import React from "react";
import IntroImg from "../assets/marble.jpg";

const Workcard = () => {
  return (
<div className="work-container" style={{color:"white"}}>

<div className="mask">
    <img className="into-img" src={ IntroImg } alt="IntroImg"/>
</div> 
<div className="mask">
    <img className="into-img" src={ IntroImg } alt="IntroImg"/>
</div> 
<div className="txt">
        <h1 className="project-heading">My education</h1>
        <div>
            <div className="education-card">
                <div className="logo">
                    <center><img className="data-container" src={SRV} alt="image"/></center>
                </div>
                <div className="data-text">
                    <h3>Sarawittaya</h3>
                    <div className="data-text">2015-2017</div>
                </div>
                
            </div>
            <div className="education-card">
                <div className="logo">
                <center><img className="data-container" src={CDV} alt="image"/></center>
                </div>
                <div className="data-text">
                    <h3>Chitralada Vocational School</h3>
                    <div>Vocational Certificate Major:Electronics Technician</div>
                    <div className="data-text">2018-2020</div>
                </div>
            </div>
            <div className="education-card">
                <div className="logo">
                    <center><img className="data-container" src={KMUTNB} alt="image"/></center>
                </div>
                <div className="data-text">
                    <h3 className="data-text">KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</h3>
                    <div className="data-text">Major: Electronics Engineeing (computer)</div>
                    <div className="data-text">2021-present</div>
                </div>
                
            </div>
        </div>
               
        <h1 className="project-heading">My experience</h1>
        <div className="education-card">
            <div className="logo">
            <center><img className="data-container" src={UB} alt="image"/></center>
            </div>
            <div className="data-text">
                <h3 className="data-text">university of burgundy</h3>
                <div className="data-text">I do "Smart My-Map project" My-Map will generate My-Map from your word that you need to know</div>
            </div>
        </div>

        <h1 className="project-heading">My skill</h1>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <div className="skill-card-lang">
                <div className="logo">
                <center><img className="data-container" src={py} alt="image"/>
                <h3 className="data-text-lang">python</h3>
                </center>
                </div>
            </div>
            <div className="skill-card-lang">
                <div className="logo">
                <center><img className="data-container" src={flut} alt="image"/>
                <h3 className="data-text-lang">flutter</h3>
                </center>
                </div>
            </div>
            <div className="skill-card-lang">
                <div className="logo">
                <center><img className="data-container" src={sql} alt="image"/>
                <h3 className="data-text-lang">SQL</h3>
                </center>
                </div>
            </div>
        </div>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
            <div className="skill-card-lang">
                <div className="logo">
                <center><img className="data-container" src={js} alt="image"/>
                <h3 className="data-text-lang">Java Script</h3>
                </center>
                </div>
            </div>
            <div className="skill-card-lang">
                <div className="logo">
                <center><img className="data-container" src={html} alt="image"/>
                <h3 className="data-text-lang">HTML</h3>
                </center>
                </div>
            </div>
        </div>
        
        
        
        <h1 className="project-heading">My Projects</h1>
        <div className="animate-scroll space-x-6">
            <div className="project-container">
                <div className="project-card">
                    <img src={pro1} alt="image"/>
                    <h2 className="project-title">Line Chatbot for Strawberry Diseases</h2>
                    <div className="project-detail">
                        <p>I build trained chatbot in Line by neural network</p>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro2} alt="image"/>
                    <h2 className="project-title">Webboard</h2>
                    <div className="project-detail">
                        <p>I do my profile by flutter</p>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro3} alt="image"/>
                    <h2 className="project-title">vet-clinic manage</h2>
                    <div className="project-detail">
                        <p>I do UX/UI for my group</p>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro4} alt="image"/>
                    <h2 className="project-title">network design</h2>
                    <div className="project-detail">
                        <p>config network on cisco system</p>
                    </div>
                </div>
                <div className="project-card">
                    <img src={pro5} alt="image"/>
                    <h2 className="project-title">animal classification</h2>
                    <div className="project-detail">
                        <p>train by using neural network on matlab</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Workcard