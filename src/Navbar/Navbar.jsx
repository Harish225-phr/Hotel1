import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <>
    <nav>
        <div class="nav__bar">
        <div class="nav__header">
          <div class="logo nav__logo">
            <div>H</div>
            <span>HOTEL<br />DHAROHAR</span>
          </div>
          <div class="nav__menu__btn" id="menu-btn">
            <i class="ri-menu-line"></i>
          </div>
        </div>
        <ul class="nav__links" id="nav-links">
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