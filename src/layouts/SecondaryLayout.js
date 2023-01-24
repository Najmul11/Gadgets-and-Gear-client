import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/sharedComponents/Nav/Nav';


const SecondaryLayout = () => {
   
    return (
            <div>
                <Nav/>
                <Outlet/>
            </div>
    );
};

export default SecondaryLayout;