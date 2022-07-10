import React from 'react';
import clo1 from "../../img/clothes/1.jpg";
import clo2 from "../../img/clothes/2.jpg";
import clo3 from "../../img/clothes/3.jpg";
import clo4 from "../../img/clothes/4.jpg";

import './Clothes.css';
const Clothes = () => {
    return (
      <section id="clothes" className="my-5 ">
        <div className="container text-center mt-5 py-5">
          <h3>Dresses Collection</h3>
          <hr className="mx-auto" />
          <p>Find your favourite dresses here</p>
        </div>
        <div className="row mx-auto container-fluid">
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={clo1} alt="" />
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h5 className="p-name">Sports Shoes</h5>
            <h4 className="p-price">$78</h4>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={clo2} alt="" />
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h5 className="p-name">Student Bag</h5>
            <h4 className="p-price">$67</h4>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={clo1} alt="" />
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h5 className="p-name">Party Shoes</h5>
            <h4 className="p-price">$78</h4>
            <button className="buy-btn">Buy Now</button>
          </div>
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={clo3} alt="" />
            <div className="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <h5 className="p-name">Fashion Cap</h5>
            <h4 className="p-price">$34</h4>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>
      </section>
    );
};

export default Clothes;