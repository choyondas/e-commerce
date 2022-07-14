import React from "react";
import './Shop.css';

import shop1 from "../../img/featured/1.jpg";
import shop2 from "../../img/featured/2.jpg";
import shop3 from "../../img/featured/3.jpg";
import shop4 from "../../img/featured/4.jpg";
import shop5 from "../../img/shoes/5.jpg";
import shop6 from "../../img/shop/1.jpg";
import shop7 from "../../img/shop/2.jpg";
import shop8 from "../../img/shop/3.jpg";
import shop9 from "../../img/shop/4.jpg";
import shop10 from "../../img/shop/5.jpg";
import shop11 from "../../img/shop/6.jpg";
import shop12 from "../../img/shop/7.jpg";
import shop13 from "../../img/shop/8.jpg";
import shop14 from "../../img/shop/9.jpg";
import shop15 from "../../img/shop/10.jpg";
import shop16 from "../../img/shop/11.jpg";
import shop17 from "../../img/shop/12.jpg";
import shop18 from "../../img/shop/13.jpg";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
const Shop = () => {
  return (
    <div>
      <Nav />
      <section id="shoes" className="my-5 pt-5 ">
        <div
          className="container mt-5 py-5 "
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h3>Shoes Collection</h3>
          <hr />
          <p>Our latest shoes collection here.</p>
        </div>
        <div className="row mx-auto container">
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={shop9} alt="" />
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
            <img className="mb-3 img-fluid" src={shop10} alt="" />
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
            <img className="mb-3 img-fluid" src={shop3} alt="" />
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
            <img className="mb-3 img-fluid" src={shop4} alt="" />
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
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={shop2} alt="" />
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
            <img className="mb-3 img-fluid" src={shop6} alt="" />
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
            <img className="mb-3 img-fluid" src={shop7} alt="" />
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
            <img className="mb-3 img-fluid" src={shop8} alt="" />
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
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={shop11} alt="" />
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
            <img className="mb-3 img-fluid" src={shop12} alt="" />
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
            <img className="mb-3 img-fluid" src={shop13} alt="" />
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
            <img className="mb-3 img-fluid" src={shop14} alt="" />
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
          <div className=" product text-center col-lg-3 col-md-4 col-12">
            <img className="mb-3 img-fluid" src={shop15} alt="" />
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
            <img className="mb-3 img-fluid" src={shop16} alt="" />
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
            <img className="mb-3 img-fluid" src={shop17} alt="" />
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
            <img className="mb-3 img-fluid" src={shop18} alt="" />
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

          {/* pagination */}
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Shop;
