import React from 'react';
import Comon from './Comon';
import web from '../src/Images/1.jpg'

const About = () =>{
    return(
    <>
        <Comon
        name="Welcome to About page"
        imgsrc={web}
        visit="/contact"
        btnname="Contact Now"
        ></Comon>
    </>
    );
};

export default About;