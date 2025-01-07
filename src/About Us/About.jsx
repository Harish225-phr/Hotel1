import React from 'react';
import about1 from '../assets/about-1.avif';
import about2 from '../assets/about-2.avif';
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
            <h4>Dedicated Team</h4>
            <p>
            Our dedicated team is committed to providing exceptional hospitality and ensuring a flawless stay from start to finish.
            </p>
          </div>
          <div className="about__image">
            <img src={about2} alt="about" />
          </div>
          <div className="about__card">
            <span><i className="ri-calendar-check-line"></i></span>
            <h4>Opulent Rooms</h4>
            <p>Enjoy unmatched comfort and style in our luxury rooms.</p>
          </div>
        </div>
        <div className="about__content">
          <p className="section__subheader">ABOUT US</p>
          <h2 className="section__header">Uncover the Hidden Gem of Manali</h2>
          <p className="section__description">
          A picturesque villa(heritage) in the lap of himalyan mountains overlooking 
          the grandiose Beas river. Surrounded by the senic mountains of manali from all 4 sides.
          </p>
          <button className="btn">Book Now</button>
        </div>
      </div>
    </section>
  );
}

export default About;
