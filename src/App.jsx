import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';

import About1 from './About1';
import Contact from './Contact';
import Service from './Service';
import Footer from './Footer';
import Navbar from './Navbar';
import { Switch,Route, Redirect } from 'react-router-dom';

const App = () =>{
    return(
    <>

    <Navbar></Navbar>
    <Switch>
        <Route exact path='/' component={Home} ></Route>
        <Route exact path='/about' component={About1} ></Route>
        <Route exact path='/contact' component={Contact} ></Route>
        <Route exact path='/service' component={Service} ></Route>
        <Redirect to='/'></Redirect>
    </Switch>
    <Footer ></Footer>
    </>
    );
};

export default App;