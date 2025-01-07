import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <>
    <section className="footer" id="footer">
    <footer className="footer">
    <div className="section__container footer__container">
      <div className="footer__col">
        <div className="logo footer__logo">
          <div >D</div>
          <span>HOTEL<br />HAROHAR</span>
        </div>
        <p className="section__description">
        Experience the best of both worlds—a peaceful retreat in the lap of nature with all the amenities of urban living. Ideal for solo travelers, couples, or families, our villa is the ultimate blend of comfort and charm.

Book your stay today and let the mountains be your sanctuary!
        </p>
        <ul className="footer__socials">
          <li>
            <a href="#"><i className="ri-instagram-line"></i></a>
          </li>
          <li>
            <a href="#"><i className="ri-facebook-fill"></i></a>
          </li>
        
        </ul>
      </div>
      <div className="footer__col">
        <h4>Offer's</h4>
        <div className="footer__links">
          <li><a href="#">Lake access</a></li>
          <li><a href="#">Wifi</a></li>
          <li><a href="#">Free parking on premises</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Kitchen</a></li>
          <li><a href="#">Dedicated workspace</a></li>
        </div>
      </div>
      <div className="footer__col">
        <h4>Contact Us</h4>
        <div className="footer__links">
          <li>
            <span><i className="ri-phone-fill"></i></span>
            <div>
              <h5>Phone Number</h5>
              <p>07018650679</p>
            </div>
          </li>
          <li>
            <span><i className="ri-map-pin-2-fill"></i></span>
            <div>
              <h5>Location</h5>
              <p>NH 3, Bran, Himachal Pradesh 175131</p>
            </div>
          </li>
        </div>
      </div>
    </div>
    <div className="footer__bar">
      Copyright © 2023 Web Design Mastery. All rights reserved.
    </div>
  </footer>
  </section>
  </>
  )
}

export default Footer