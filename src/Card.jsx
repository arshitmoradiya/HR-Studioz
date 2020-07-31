import React from 'react';
import web from '../src/Images/2.jpg'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>

            <div className="col-md-4 col-10 mx-auto">
                <div className="card" >
                    <img src={props.imgsrc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                   
                        <NavLink to="/contact" className="btn btn-outline-primary">Inquiry</NavLink>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Card;