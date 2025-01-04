import React from 'react';
import './Header.css';

function Header() {
  return (
    <>
     <div
  className="section__container header__container"
  id="home"
>
<p>Simple - Unique - Friendly</p>
        <h1>
          Make Yourself At Home
          <br />
          In Our <span>Hotel</span>.
        </h1>
      </div>
      <section class="section__container booking__container">
      <form action="/" class="booking__form">
        <div class="input__group">
          <span><i class="ri-calendar-2-fill"></i></span>
          <div>
            <label for="check-in">CHECK-IN</label>
            <input type="text" placeholder="Check In" />
          </div>
        </div>
        <div class="input__group">
          <span><i class="ri-calendar-2-fill"></i></span>
          <div>
            <label for="check-out">CHECK-OUT</label>
            <input type="text" placeholder="Check Out" />
          </div>
        </div>
        <div class="input__group">
          <span><i class="ri-user-fill"></i></span>
          <div>
            <label for="guest">GUEST</label>
            <input type="text" placeholder="Guest" />
          </div>
        </div>
        <div class="input__group input__btn">
          <button class="btn">CHECH OUT</button>
        </div>
      </form>
    </section>
    </>
  );
}

export default Header;
