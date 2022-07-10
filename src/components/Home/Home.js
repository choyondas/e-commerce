import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Featured from '../Featured/Featured';
import Gallery from '../Gallery/Gallery';
import Nav from '../Nav/Nav';

const Home = () => {
    return (
        <div>
            <Nav />
            <Banner />
            <Brand />
            <Gallery />
            <Featured/>
        </div>
    );
};

export default Home;