import React from 'react';
import web from '../src/Images/logo.PNG';
import { NavLink } from 'react-router-dom';
import Comon from './Comon';

const Home = () => {
    return (
        <>
            <Comon
                name="Welcome to "
                imgsrc={web}
                visit="/service"
                btnname="Services By Us"
            ></Comon>
        </>
    );
};

export default Home;