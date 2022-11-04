import React from 'react';
import HeroSection from '../../component/HeroSection/HeroSection';

const Home = () => {
    const data = {
        title:"Toys Town"
    }
    return (
        <div>
            <HeroSection myTitle={data}/>
        </div>
    );
};

export default Home;