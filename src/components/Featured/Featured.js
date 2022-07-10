import React from 'react';
import './Featured.css';
import feat1 from '../../img/featured/1.jpg';
import feat2 from '../../img/featured/2.jpg';
import feat3 from '../../img/featured/3.jpg';
import feat4 from '../../img/featured/4.jpg';
const Featured = () => {
    return (
      <section id="Featured" className="my-5 ">
        <div className="container text-center mt-5 py-5">
          <h3>Featured Products</h3>
          <hr className="mx-auto" />
          <p>All our featured products you can find here</p>
        </div>
        <div className="row mx-auto container-fluid">
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={feat1} alt="" />
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
            <img className="mb-3 img-fluid" src={feat3} alt="" />
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
            <img className="mb-3 img-fluid" src={feat2} alt="" />
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
            <img className="mb-3 img-fluid" src={feat4} alt="" />
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

export default Featured;