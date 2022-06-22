// import { BrowserRouter,Routes,Route }  from "react-router-dom";
import React from 'react'
import Home from "./pages/home/Home";
import Portfolio from "./pages/portfolio/Portfolio";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact"
import Resume from "./pages/resume/Resume"
import"bootstrap/dist/css/bootstrap.min.css"

const [contactSelected, setContactSelected] = useState(false);

function App() {
  const [currentTab, setCurrentTab] = useState("about");

	// This function checks to see which tab is selected and then generates the appropriate tab.
	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};




  return (

    <div>
			<div className="header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	
    
    // <BrowserRouter>
    //     <Routes>
    //     <Route path = "/"element = {<Home/>}/>
    //     <Route path = "/about"element = {<About/>}/>
    //     <Route path = "/projects"element = {<Project/>}/>
    //     <Route path = "/contact"element = {<Contact/>}/>

    //     </Routes>
    // </BrowserRouter>


  );
}

export default App