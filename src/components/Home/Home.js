import React from 'react';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import Clothes from '../Clothes/Clothes';
import Collection from '../Featured/Collection/Collection';
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
            <Featured />
            <Collection />
            <Clothes/>
        </div>
    );
};

export default Home;