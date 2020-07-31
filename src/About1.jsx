import React from 'react';
import web from '../src/Images/harshil.jpg';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

import { NavLink } from 'react-router-dom';

const About1 = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center ">
                <div className="container">
                <div className="my-5"><h1 className="text-center">About </h1></div>
                    <div className="row">
                        {/* <div className="col-10 mx-auto"> */}
                            <div className="row">
                                <div className="col-md-6 mb-5 d-flex justify-content-center flex-column ">
                                    <img style={{ width:"60%",height:"auto"}} src={web} className="  rounded shadow img-thumbnail" ></img>
                                </div>
                                <div className="col-md-6 ">
                                    <h1>HARSHIL VAGHASIYA </h1>
                                    <p>Harshil is a fine - art photographer currently based in Surat, Gujarat, India. He took up photography in 2020. He is the founders of HR Studioz.</p>
                                    <p>          He likes to tell stories through photographs by placing them on the edge of reality where the visuals are realistic but hard to believe.</p>
                                    <p>HR Studioz traveling and destination wedding project is mostly done by Harshil. He had very good skill in cinematography and Pre-wedding video shoot.</p>
                                    <p>Knowing their clients and being a part of their stories a certain extent helps clients to establish a bond with him. This inspires to capture their raw nature and true self</p>
                                    <a href="https://instagram.com/picture.by_hr?igshid=1gpz8skhli5ib" ><InstagramIcon></InstagramIcon></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
        </>
    );
};

export default About1;