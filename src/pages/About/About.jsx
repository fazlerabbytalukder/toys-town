import React from 'react';
import HeroSection from '../../component/HeroSection/HeroSection';
import { useProductContext } from '../../context/productcontext';

const About = () => {
    const {myName} = useProductContext();
    const data = {
        title:"About Us"
    }
    return (
        <div>
            {myName}
            <HeroSection myTitle={data}/>
        </div>
    );
};




export default About;