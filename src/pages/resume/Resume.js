import React from 'react'
import resumeImg from '../../assets/Images/tower.jfif'
import './Resume.css'


function Resume() {

    return (


        <section className="resume">
        <div className="container">
            <h2>My Resume</h2>
       </div>

       <div className="resume-display">
        
       <img className="image-display-resume"src={resumeImg}/>

       <a href={require("../../assets/Images/Ahmad_Resume_3.rtf")} 
       
    
       
       
       
       download>

      
    

       <h3>Download</h3>

       </a>
       </div>
    

        </section>
    )
}
 export default Resume;