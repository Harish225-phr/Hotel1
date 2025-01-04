import React from 'react';
import about1 from '../assets/about-1.jpg';
import about2 from '../assets/about-2.jpg';
import './About.css';
function About() {
  return (
    <section className="about" id="about">
      <div className="section__container about__container">
        <div className="about__grid">
          <div className="about__image">
            <img src={about1} alt="about" />
          </div>
          <div className="about__card">
            <span><i className="ri-user-line"></i></span>
            <h4>Strong Team</h4>
            <p>
              Unlocking Hospitality Excellence And Ensures Your Perfect Stay
            </p>
          </div>
          <div className="about__image">
            <img src={about2} alt="about" />
          </div>
          <div className="about__card">
            <span><i className="ri-calendar-check-line"></i></span>
            <h4>Luxury Room</h4>
            <p>Experience Unrivaled Luxury at Our Exquisite Luxury Rooms</p>
          </div>
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">Discover Our Underground</h2>
          <p className="section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="btn">Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default About;
