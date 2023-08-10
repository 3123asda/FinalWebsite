import React from 'react'
import './../pagesCss/navigationBar.css'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (    
    <div>
        <nav>
            <div className="navbar">
            <div className="logo"><a href="#">Affordable Store</a></div>
            <ul className ="menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/category">Category</Link></li>
            </ul>
            </div>
        </nav>
        {/* <section id="Home">Home Section</section>
        <section id="About">About Section</section>
        <section id="Category">Category Section</section>
        <section id="Contact">Contact Section</section>
        <section id="Feedback">Feedback Section</section>
        <div className="button">
            <a href="#Home"><i class="fas fa-arrow-up"></i></a>
        </div> */}
    </div>
  )
}

export default NavigationBar