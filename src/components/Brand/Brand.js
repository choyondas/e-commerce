import React from 'react';
import './Brand.css';
import img1 from '../../img/brand/1.png';
import img2 from '../../img/brand/2.png';
import img3 from '../../img/brand/3.png';
import img4 from '../../img/brand/4.png';
import img5 from '../../img/brand/5.png';
const Brand = () => {
    return (
      <section className='container'>
        <div className="row m-0 py-5 ">
          <div className="col-lg-2 col-md-3 col-6 img-fluid">
            <img src={img1} alt="" />
          </div>
          <div className="col-lg-2 col-md-3 col-6 img-fluid">
            <img src={img2} alt="" />
          </div>
          <div className="col-lg-2 col-md-3 col-6 img-fluid">
            <img src={img3} alt="" />
          </div>
          <div className="col-lg-2 col-md-3 col-6 img-fluid">
            <img src={img4} alt="" />
          </div>
          <div className="col-lg-2 col-md-3 col-6 img-fluid">
            <img src={img5} alt="" />
          </div>
        </div>
      </section>
    );
};

export default Brand;