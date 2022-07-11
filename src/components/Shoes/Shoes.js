import React from 'react';
import shoe1 from "../../img/shoes/1.jpg";
import shoe2 from "../../img/shoes/2.jpg";
import shoe3 from "../../img/shoes/3.jpg";
import shoe4 from "../../img/shoes/4.jpg";
import shoe5 from "../../img/shoes/5.jpg";
import shoe6 from "../../img/shoes/6.jpg";

const Shoes = () => {
    return (
      <section id="shoes" className="my-5 ">
        <div className="container text-center mt-5 py-5">
          <h3>Shoes Collection</h3>
          <hr className="mx-auto" />
          <p>Our latest shoes collection here.</p>
        </div>
        <div className="row mx-auto container-fluid">
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={shoe1} alt="" />
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
            <img className="mb-3 img-fluid" src={shoe2} alt="" />
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
            <img className="mb-3 img-fluid" src={shoe3} alt="" />
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
            <img className="mb-3 img-fluid" src={shoe4} alt="" />
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

export default Shoes;