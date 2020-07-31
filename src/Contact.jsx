import React, { useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import * as emailjs from 'emailjs-com';

const Contact = () => {
    const [data, setdata] = useState({
        name: "",
        phone: "",
        email: "",
        location: "",
        session: "",
        time: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setdata((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault();
        /* alert(`${data.name}`); */
        const templateParam = {
            name1:data.name,
            phone1:data.phone,
            email1:data.email,
            location1:data.location,
            session1:data.session,
            time1:data.time
        };
        emailjs.send("gmail","arshittemplate",templateParam,"user_5nOxAqQjegn1OyB0dHBSF").then();
        alert(`Thank you ${data.name} for get is touch with us`);
        setdata({
            name: "",
            phone: "",
            email: "",
            location: "",
            session: "",
            time: "",
        });
    };
    return (
        <>
            <div className="my-5">
                <h1 className='text-center'>Contact US</h1>
            </div>
            <div className="container">
                <div className="row">
                    <h1 className="mb-5">Call Us, or share your details below; We'll be in touch soon</h1>
                    <div className="col-md-6 d-flex justify-content-center flex-column">
                        <form onSubmit={formSubmit} className="contact_form_class">
                            <div className="form-group m-3" >
                                <label>Name*</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={InputEvent} placeholder="Enter your name" required />
                            </div>
                            <div className="form-group m-3" >
                                <label>Phone*</label>
                                <input type="number" className="form-control" name="phone" value={data.phone} onChange={InputEvent} required placeholder="Enter mobile number" />
                            </div>
                            <div className="form-group m-3" >
                                <label for="exampleInputEmail1">Email address*</label>
                                <input type="email" className="form-control" name="email" value={data.email} onChange={InputEvent} required placeholder="Enter email" />
                            </div>
                            <div className="form-group m-3" >
                                <label>Location</label>
                                <input type="text" className="form-control" name="location" value={data.location} onChange={InputEvent} placeholder="Enter Location" />
                            </div>
                            <div className="form-group m-3" >
                                <label>What kind of photo session are you looking for? *</label>
                                <input type="text" className="form-control" name="session" value={data.session} onChange={InputEvent} required placeholder="e.g. Wedding, Films, Other" />
                            </div>
                            <div className="form-group m-3" >
                                <label>When is a good time to call you? *</label>
                                <input type="text" className="form-control" name="time" value={data.time} onChange={InputEvent} required placeholder="Enter time" />
                            </div>
                            <button type="submit" className="btn btn-outline-primary m-3">Submit</button>
                        </form>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center flex-column p-5">
                        <h4>HR Studioz</h4>
                        <ul>
                            <li><LocationOnIcon /> Ganga-Jamna Circle , Chikuwadi , Nana Varachha Road, Surat, Gujrat - 395006</li>
                            <li><EmailIcon /> harshilvaghasiya098@gmail.com</li>
                            <li><CallIcon /> +91 74359 02509</li>
                            <li><a href="https://www.youtube.com/channel/UClf4-__WxTMPdcDmvkPRJ_A"><YouTubeIcon /></a>YouTube</li>
                            <li><a href="https://www.facebook.com/hr.studioz.9"><FacebookIcon /></a>Facebook</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;