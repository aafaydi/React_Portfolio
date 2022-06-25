import React, {useState} from 'react';
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/portfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume";
import Navbar from './componts/Navbar/Navbar';
import Footer from './componts/footer/Footer';
import "./App.css"



function App() {
    const [contactSelected, setContactSelected] = useState(false);
    const [currentTab, setCurrentTab] = useState("home");

    // This function checks to see which tab is selected and then generates the appropriate tab.
    
	const renderTab = () => {
        switch (currentTab) {
            case "about":
                return <About/>;
            case "portfolio":
                return <Portfolio/>;
            case "contact":
                return <Contact/>;
            case "resume":
                return <Resume/>;
            default:
                return <Home/>;
        }
    };
	


    return (

        <div>
            
                <nav className='header'>
                    <h1 id="about">Ahmad Faydi</h1>
                    <Navbar setCurrentOption={setCurrentTab} currentOption={currentTab}/>
		         </nav>

				 
            
            <div>
                <main>
                
				

                    {renderTab()}
                </main>
            </div>
            <div> <Footer></Footer> </div>
        </div>


   


    );
}

export default App














    
    