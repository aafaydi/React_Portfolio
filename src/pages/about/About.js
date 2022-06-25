import React from 'react';
import './about.css'
import coverImage from "../../assets/Images/Ahmad2.JPG";

function About() {
  return (
    <section className="tabledisplay">
       
   
      <img src={coverImage} className="my-3" style={{ width: "40%" }} alt="cover" />
      
      <div>
      <p id="about-page">
      
      <h1> About Me</h1>
      My name is Ahmad Faydi and l have been in the car business for 18 years
       married for 25 years and father to four. I just completed my boot camp 
       in web development at UNC Charlotte. I graduated from UNC Greensboro in 
       computer science and math in 2002 but I did not proceed the IT career and 
       got in to sales.I am hoping to find the right role in your company.


      </p>
      </div>
    </section>
  );
}

export default About;