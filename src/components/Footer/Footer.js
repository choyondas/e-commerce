import React from 'react';
import img1 from '../../img/insta/6.jpg';
import img2 from '../../img/insta/2.jpg';
import img3 from '../../img/insta/3.jpg';
import img4 from '../../img/insta/4.jpg';
import img5 from '../../img/insta/5.jpg';
import img6 from '../../img/insta/6.jpg';
import pay from '../../img/payment.png';

import './Footer.css'

const Footer = () => {
    return (
      <footer>
        <div className="py-5 mx-5">
          <div className="row pt-5">
            <div className="footer-one col-lg-3 col-md-6 col-12">
              <h3>DasShop</h3>
              <p>
                Find the lowest price for E Commerce Photography today! Now on
                sale at GigaPromo
              </p>
            </div>

            <div className="footer-one col-lg-3 col-md-6 col-12">
              <h5 className="pb-3">Featured</h5>
              <ul className="text-uppercase">
                <li>
                  <a href="#">men</a>
                </li>
                <li>
                  <a href="#">women</a>
                </li>
                <li>
                  <a href="#">kids</a>
                </li>
                <li>
                  <a href="#">girls</a>
                </li>
                <li>
                  <a href="#">new arrivals</a>
                </li>
              </ul>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12">
              <h5 className="pb-3">Contact Us</h5>
              <div>
                <h6 className="text-uppercase">Address</h6>
                <p>Kunming, Yunnan, China</p>
              </div>
              <div>
                <h6 className="text-uppercase">Phone</h6>
                <p>+8613085375070</p>
              </div>
              <div>
                <h6 className="text-uppercase">Email</h6>

                <a
                  style={{ textDecoration: "none" }}
                  href="mailto:choyondas08@gmail.com"
                >
                  choyondas08@gmail.com
                </a>
              </div>
            </div>
            <div className="footer-one col-lg-3 col-md-6 col-12">
              <h3 className="pt-5">Gallery</h3>
              <div>
                <img
                  width="70px"
                  height="100%"
                  className="img-fluid m-2"
                  src={img1}
                  alt=""
                />
                <img
                  width="70px"
                  height="100%"
                  className="img-fluid m-2"
                  src={img2}
                  alt=""
                />
                <img
                  width="70px"
                  height="100%"
                  className="img-fluid m-2"
                  src={img3}
                  alt=""
                />
                <img
                  width="70px"
                  height="100%"
                  className="img-fluid m-2"
                  src={img4}
                  alt=""
                />
                <img
                  width="70px"
                  height="100%"
                  className="img-fluid m-2"
                  src={img5}
                  alt=""
                />
                <img
                  width="70px"
                  height="100%"
                  className="img-fluid m-2"
                  src={img6}
                  alt=""
                />
              </div>
            </div>
          </div>
            </div>
            <div className="copyright mt-5 pb-5">
                <div className="row container mx-auto">
                    <div className="col-lg-3 col-md-6 col-12">
                        <img src={pay} alt="" />
                    </div>

                </div>

            </div>
      </footer>
    );
};

export default Footer;