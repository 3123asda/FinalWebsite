import React from 'react';
import NavBar from '../navigation/navigationBar';
import './../pagesCss/about.css';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      <NavBar />
      <div className='about-message'>
        <p>
          “Welcome to our online store! We offer high-quality clothes
          at affordable prices because we buy directly from the supplier.
          Our goal is to provide you with the best shopping experience possible.
          We believe that everyone deserves to look and feel great without breaking the bank. 
          Shop now and see for yourself why we're the best choice for your fashion needs!”
        </p>
      </div>
      <div className="button-container">
        <Link to="/category">
        <button className="animated-button">Shop Now! <span>&raquo;</span></button>
        </Link>
      </div>
    </div>
  );
}

export default About;
