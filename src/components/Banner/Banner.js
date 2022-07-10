import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
      <section id="banner">
        <div className="container">
          <h5>NEW ARRAIVALS</h5>
          <h1>
            {" "}
            <span>Best Price</span> This Year
          </h1>
          <p>
            An e-commerce app is used by stores <br /> to sell e-commerce
            products online
          </p>
          <button>Shop Now</button>
        </div>
      </section>
    );
};

export default Banner;