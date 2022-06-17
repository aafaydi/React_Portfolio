import React from 'react'
import "./home.css"
import Navbar from '../../componts/Navbar/Navbar'
import Footer from '../../componts/footer/Footer'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='hero'></div>
        <div className='about'>
            <h1 className='about-title'>About me</h1>
            <p className='about-text'>lorme</p>
            
        </div>
       <div>
  <div classname="langueges" />
  <div classname="services">
    <h1 classname="servicesclasstitle">services</h1>
    <div classname="services-container" />
    <div className="row">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>

        </div>
        <Footer/>

    </div>
  )
}
