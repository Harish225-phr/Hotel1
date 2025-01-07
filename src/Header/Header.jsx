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
      <section className="section__container booking__container d-flex justify-content-center align-items-center vh-100">
  <form  className="booking__form row g-3 p-4 border rounded bg-white shadow">
    <div className="col-md-4 input__group d-flex align-items-center">
      <span className="me-2"><i className="ri-calendar-2-fill"></i></span>
      <div>
        <label htmlFor="check-in" className="form-label">Plan Your Stay</label>
        
      </div>
      
    </div>
    <div className="col-md-4 input__group d-flex align-items-center">
  <span className="me-2"><i className="ri-home-heart-fill"></i></span>
  <div>
    <label htmlFor="check-in" className="form-label">Full Amenities</label>
  </div>
</div>


    <div className="col-md-4 input__group d-flex align-items-center">
  <span className="me-2"><i className="ri-home-smile-line"></i></span>
  <div>
    <label htmlFor="room-type" className="form-label">Preferred Room Type</label>
  </div>
</div>
      </form>
    </section>
    </>
  );
}

export default Header;
