// #todo: hide hamburger menu when a link is clicked

import './Navbar.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link to="/">Project Collector</Link></div>
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </div>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/">About</Link></li>
        <li><Link to="/contact/">Contact</Link> </li>
        <li><Link to="/react-tutorial/">React Tutorial</Link></li>
        {/* <li><a href="#home">Home</a></li>
        <li><a href="#about">Über</a></li>
        <li><a href="#contact">Kontakt</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;