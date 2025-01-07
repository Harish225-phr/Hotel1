import React, { useState } from 'react';
import './Navbar.css'
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
    <nav>
        <div className="nav__bar">
        <div className="nav__header">
          <div className="logo nav__logo">
            <div>D</div>
            <span>HOTEL<br />DHAROHAR</span>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
        <ul  className={`nav__links ${isMenuOpen ? 'show' : ''}`} id="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#room">Room</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#feature">Feature</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Navbar