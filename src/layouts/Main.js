import React from 'react';
import {Outlet} from 'react-router-dom'
import Footer from '../pages/sharedComponents/Footer/Footer';
import Nav from '../pages/sharedComponents/Nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;