import "./Workcard.css";
import pro1 from "../assets/strawberry.jpg"
import React from "react";

const Workcard = () => {
  return (
    <div className="work-container" style={{color:"white"}}>
        <h1 className="project-heading">My Projects</h1>
        <div className="animate-scroll space-x-6">
        <div className="project-container">
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Line Chatbot for Strawberry Diseases</h2>
                <div className="project-detail">
                    <p>this is text</p>
                </div>
            </div>
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Project Title</h2>
                <div className="project-detail">
                    <p>this is text</p>
                </div>
            </div>
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Project Title</h2>
                <div className="project-detail">
                    <p>this is text</p>
                </div>
            </div>
            <div className="project-card">
                <img src={pro1} alt="image"/>
                <h2 className="project-title">Project Title</h2>
                <div className="project-detail">
                    <p>this is text</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Workcard