import React from 'react'
import './Features.css';
function Features() {
  return (
    <section class="section__container feature__container" id="feature">
      <p class="section__subheader">FACILITIES</p>
      <h2 class="section__header">Core Features</h2>
      <div class="feature__grid">
  <div class="feature__card">
    <span><i class="ri-hotel-line"></i></span>
    <h4>Room in a Barn</h4>
    <p>
      Your own room in a home, plus access to shared spaces.
    </p>
  </div>
  
  <div class="feature__card">
    <span><i class="ri-moon-line"></i></span>
    <h4>Quiet Hours</h4>
    <p>
      We understand that peace and uninterrupted rest are essential for a rejuvenating experience.
    </p>
  </div>
  
  <div class="feature__card">
    <span><i class="ri-map-pin-2-line"></i></span>
    <h4>Best Location</h4>
    <p>
      At our hotel booking website, we take pride in offering accommodations in the most prime and sought-after locations.
    </p>
  </div>
  
  <div class="feature__card">
  <span><i class="ri-water-flash-line"></i></span>

    <h4>Dedicated Bathroom</h4>
    <p>
      This place has a bathroom that’s just for you.
    </p>
  </div>
  
  <div class="feature__card">
    <span><i class="ri-money-dollar-circle-line"></i></span>
    <h4>Payment Options</h4>
    <p>
      Our hotel booking website offers a range of convenient payment options to suit your preferences.
    </p>
  </div>
  
  <div class="feature__card">
    <span><i class="ri-community-line"></i></span>
    <h4>Shared Common Spaces</h4>
    <p>
      You’ll share parts of the home.
    </p>
  </div>
</div>

    </section>
  )
}

export default Features