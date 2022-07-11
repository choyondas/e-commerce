import React from 'react';
import './Watches.css';
import wat1 from "../../img/watches/1.jpg";
import wat2 from "../../img/watches/2.jpg";
import wat3 from "../../img/watches/3.jpg";
import wat4 from "../../img/watches/4.jpg";

const Watches = () => {
    return (
      <section id="watches" className="my-5 ">
        <div className="container text-center mt-5 py-5">
          <h3>Watches Collection</h3>
          <hr className="mx-auto" />
          <p>Find your favourite watches here</p>
        </div>
        <div className="row mx-auto container-fluid">
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={wat1} alt="" />
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
            <img className="mb-3 img-fluid" src={wat2} alt="" />
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
            <img className="mb-3 img-fluid" src={wat3} alt="" />
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
            <img className="mb-3 img-fluid" src={wat4} alt="" />
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

export default Watches;