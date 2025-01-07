import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
     <div
  className="section__container header__container"
  id="home"
>
<p>Comfort - Nature - Warmth</p>
<h3>
  Embrace the Beauty of Manali,  
  <br />
  Stay Where Comfort Meets Nature.
</h3>

      </div>
      <section class="section__container booking__container d-flex justify-content-center align-items-center vh-100">
  <form action="/" class="booking__form row g-3 p-4 border rounded bg-white shadow">
    <div class="col-md-4 input__group d-flex align-items-center">
      <span class="me-2"><i class="ri-calendar-2-fill"></i></span>
      <div>
        <label for="check-in" class="form-label">Plan Your Stay</label>
        
      </div>
      
    </div>
    <div class="col-md-4 input__group d-flex align-items-center">
  <span class="me-2"><i class="ri-calendar-2-fill"></i></span>
  <div>
    <label for="check-in" class="form-label">Start Date: Anytime |</label>
  
  </div>
</div>

<div class="col-md-4 input__group d-flex align-items-center">
  <span class="me-2"><i class="ri-user-fill"></i></span>
  <div>
    <label for="end-date" class="form-label">End Date: Anytime |</label>
  
  </div>      
    </div>
    <div class="col-md-4 input__group d-flex align-items-center">
  <span class="me-2"><i class="ri-home-smile-line"></i></span>
  <div>
    <label for="room-type" class="form-label">Preferred Room Type</label>
  </div>
</div>
      </form>
    </section>
    </>
  );
}

export default Header;
