import React from "react";
import './footer.css';
import githubImg from '../../assets/Images/GitHub-Mark.png'
import linklinImg from '../../assets/Images/LinkedIn_logo.png'
import facebookImg from '../../assets/Images/Facebook_logo.png'

function Footer() {
	return (
		<footer className="footer">
			<div>
				<a href="https://github.com/aafaydi" target="_blank" rel="noopener noreferrer">
        
					<img id="github" src={ githubImg } alt="Github" 	className="logo"></img>
				</a>
			</div>

			<div> 
				<a
					href="https://www.linkedin.com/in/aafaydi/" target="_blank" rel="noopener noreferrer">				
				       
					<img id="linkedin" 	src={ linklinImg } 	alt="LinkedIn" className="logo"></img>
          
				</a>
			</div>
      
			<div>
				<a
					href="https://www.facebook.com/ahmad.faydi/friends"	target="_blank" rel="noopener noreferrer">

					<img id= "face" src={ facebookImg } alt="Facebook" className="logo"></img>
				</a>
			</div>
		</footer>
	);
}

export default Footer;