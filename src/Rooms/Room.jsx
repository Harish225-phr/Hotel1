import React from 'react'
import Room1 from '../assets/room-1.avif';
import Room2 from '../assets/room-2.avif';
import Room3 from '../assets/room-3.avif';

function Room() {
  return (
    <section className="room__container" id="room">
 <p className="section__subheader">OUR ROOM'S</p>
 <h2 className="section__header">The Most Memorable Rest Time Starts Here.</h2>
    <div className="room__grid">
      <div className="room__card">
        <img src={Room1} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Deluxe Suite</h4>
            <p>Well-appointed rooms designed for guests who desire a more.</p>
          </div>
          <h3>$399<span>/night</span></h3>
        </div>
      </div>
      <div className="room__card">
        <img src={Room2} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Family Suite</h4>
            <p>Consist of multiple rooms and a common living area.</p>
          </div>
          <h3>$599<span>/night</span></h3>
        </div>
      </div>
      <div className="room__card">
        <img src={Room3} alt="room" />
        <div className="room__card__details">
          <div>
            <h4>Luxury Penthouse</h4>
            <p>Top-tier accommodations usually on the highest floors of a hotel.</p>
          </div>
          <h3>$799<span>/night</span></h3>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Room