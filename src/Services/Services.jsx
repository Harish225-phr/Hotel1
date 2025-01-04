import React from 'react'
import './Services.css'
function Services() {
  return (
    <>
   <section class="service" id="service">
      <div class="section__container service__container">
        <div class="service__content">
          <p class="section__subheader">SERVICES</p>
          <h2 class="section__header">Strive Only For The Best.</h2>
          <ul class="service__list">
            <li>
              <span><i class="ri-shield-star-line"></i></span>
              High Class Security
            </li>
            <li>
              <span><i class="ri-24-hours-line"></i></span>
              24 Hours Room Service
            </li>
            <li>
              <span><i class="ri-headphone-line"></i></span>
              Conference Room
            </li>
            <li>
              <span><i class="ri-map-2-line"></i></span>
              Tourist Guide Support
            </li>
          </ul>
        </div>
      </div>
    </section>
       <section class="section__container banner__container">
       <div class="banner__content">
         <div class="banner__card">
           <h4>25+</h4>
           <p>Properties Available</p>
         </div>
         <div class="banner__card">
           <h4>350+</h4>
           <p>Bookings Completed</p>
         </div>
         <div class="banner__card">
           <h4>600+</h4>
           <p>Happy Customers</p>
         </div>
       </div>
     </section>
     </>
  )
}

export default Services