import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Gallery from '../Gallery/Gallery';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Brand />
            <Gallery />
        </div>
    );
};

export default Home;