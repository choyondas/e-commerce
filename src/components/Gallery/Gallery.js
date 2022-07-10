import React from 'react';
import gal1 from '../../img/new/1.jpg';
import gal2 from '../../img/new/2.jpg';
import gal3 from '../../img/new/3.jpg';

import './Gallery.css'
const Gallery = () => {
    return (
      <div id="new">
        <div className="row p-0 m-0">
          <div className="one col-lg-4 col-md-12 col-12">
            <img className="img-fluid" src={gal1} alt="" />
            <div className="details">
              <h2>Extreme Rare Sneckers</h2>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12">
            <img className="img-fluid" src={gal2} alt="" />
            <div className="details">
              <h2>Best Outfit</h2>
              <button>Shop Now</button>
            </div>
          </div>
          <div className="one col-lg-4 col-md-12 col-12">
            <img className="img-fluid" src={gal3} alt="" />
            <div className="details">
              <h2>Up to 70% Off</h2>
              <button>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Gallery;