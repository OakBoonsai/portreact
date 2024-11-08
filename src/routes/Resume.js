import React from 'react'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"

const Resume = () => {
  return (
    <div>
      <Navbar/>
    <div style={{color:'white',marginBottom:'30px'}}>
    <header className="app-header">
      <h3 style={{marginTop:'80px',marginBottom:'30px'}}>Resume</h3>
    </header>
    <div className= "profile">
        <img src={`${process.env.PUBLIC_URL}/picture/profile.jpg`} />
        <span className="Name">
          <div>Thanachot Boonsai</div>
          <div>Tel: 0997462435</div>
          <div>Email: tanachotboonsai@gmail.com</div>
          <div>Network Engineer</div>
          <div>Front-end Developer</div>
        </span>
      </div>
    <hr/>
    <div className= "app-text">
      <div style={{marginRight:'30px'}}>
        <div className="text">
          <div className="Title">Core Competencies</div>
          <div>Programmer Skills</div>
          <ul>
            <li>SQL,Database</li>
            <li>python</li>
            <li>matlab</li>
            <li>Network</li>
            <li>css</li>
            <li>java (basic)</li>
            <li>Flutter</li>
            <li>javascript (basic)</li>
            <li>Github</li>
        </ul>
        <div className="Title">Education</div>
        <span style={{color:'orange'}}>BACHELOR OF ENGINEER ELECTRONIC OF COMPUTER</span> &nbsp; &nbsp;<span style={{fontSize:'20px'}}>(2021-present)</span>
        <div>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</div>
        <div className="Title">Language</div>
        <ul>
          <li>Thai (Native)</li>
          <li>English (pre-intermediate)</li>
        </ul>
        </div>
      </div>
      

      <div>
        <div className="Title">Professional Summary</div>
        <div className="text">Passionate about networking and computer devices with hands-on internship experience at the University of Burgundy. Actively seeking a cooperative opportunity to apply my skills and gain real-world experience. A fast learner with a methodical approach, positive attitude, and adaptability, I am eager to contribute effectively as part of a team. I possess strong logical reasoning and analytical problem-solving skills.</div>
        <div className="Title">Work Experience</div>
        <div className="text" style={{textDecoration: 'underline', lineHeight:'2.5'}}>Internship</div>
        <div className="text">University of burgundy for 2 month I developed Mindmap website which generate from chatgpt api with my co-worker by using node.js and typescript</div>
        <div className="Title">Project</div>
        <div className="text"><span style={{fontWeight:'bold'}}>2023 animal classification -</span>  train by using neural network on matlab</div>
        <div className="text"><span style={{fontWeight:'bold'}}>2023 network design -</span>  config network on cisco system</div>
        <div className="text"><span style={{fontWeight:'bold'}}>2024 Webboard -</span>  I do my profile by flutter</div>
        <div className="text"><span style={{fontWeight:'bold'}}>2024 vet-clinic manage -</span>  I designed ux/ui by figma</div>
        <div className="text"><span style={{fontWeight:'bold'}}>2024 Strawberry disease detection -</span>  I build trained chatbot in Line by neural network</div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Resume