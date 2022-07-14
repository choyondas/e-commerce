import React from "react";
import prod1 from "../../img/shop/1.jpg";
import sm1 from "../../img/shop/1.jpg";
import sm2 from "../../img/shop/24.jpg";
import sm3 from "../../img/shop/25.jpg";
import sm4 from "../../img/shop/26.jpg";
import Nav from "../Nav/Nav";

import "./SingleProduct.css";

const SingleProduct = () => {
  return (
    <div>
      <Nav />
      <section className="sProduct py-5 my-5 container">
        <div className="row mt-4 ">
          <div className="col-lg-6 col-md-12 col-12">
            <img className="img-fluid w-100 mb-2 " src={prod1} alt="" />
            <div className="small-img-group">
              <div className="small-img-col">
                <img className="small-img" width="100%" src={sm1} alt="" />
              </div>
              <div className="small-img-col">
                <img className="small-img" width="100%" src={sm2} alt="" />
              </div>
              <div className="small-img-col">
                <img className="small-img" width="100%" src={sm3} alt="" />
              </div>
              <div className="small-img-col">
                <img className="small-img" width="100%" src={sm4} alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-12">
            <h6>Home /T-Shirt</h6>
            <h3>Men's Fashion T Shirt</h3>
            <h2>$246</h2>
            <select className="my-3">
              <option>Select Size</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
              <option>XXXL</option>
            </select>
            <input
              type="number"
             
              
              min="1"
              max="100"
              
            />
            <button style={{ borderRadius: "0" }} className="buy-btn">
              Add To Cart
            </button>
            <h4 className="py-5">DESCRIPTION</h4>
            <span>
              GLOAT Tee from Barstool Sports from former NHL vets Ryan Whitney,
              Paul Bissonnette and Barstool Sports' Rear Admiral from the
              Spittin' Chiclets Podcast.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProduct;
