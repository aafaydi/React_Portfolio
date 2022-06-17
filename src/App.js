import { BrowserRouter,Routes,Route }  from "react-router-dom";
import React from 'react'
import Home from "./pages/home/Home";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact"
import"bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path = "/"element = {<Home/>}/>
        <Route path = "/projects"element = {<Project/>}/>
        <Route path = "/contact"element = {<Contact/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App