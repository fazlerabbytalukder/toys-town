import React from 'react';
import FeatureProducts from '../../component/FeatureProducts/FeatureProducts';
import HeroSection from '../../component/HeroSection/HeroSection';

const Home = () => {
    const data = {
        title:"Toys Town"
    }
    return (
        <div>
            <HeroSection myTitle={data} />
            <FeatureProducts/>
        </div>
    );
};

export default Home;