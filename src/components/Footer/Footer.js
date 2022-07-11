import React from 'react';

const Footer = () => {
    return (
      <footer className="py-5 mx-5">
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
                        <li><a href="#">men</a></li>
                        <li><a href="#">women</a></li>
                        <li><a href="#">kids</a></li>
                        <li><a href="#">girls</a></li>
                        <li><a href="#">new arrivals</a></li>
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
                       
                        <a style={{textDecoration: 'none'}} href="mailto:choyondas08@gmail.com">choyondas08@gmail.com</a>
                    </div>
          </div>
          <div className="footer-one col-lg-3 col-md-6 col-12">
            <h3>DasShop</h3>
            <p>
              Find the lowest price for E Commerce Photography today! Now on
              sale at GigaPromo
            </p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;