import React from 'react';
import useTitle from '../../../hooks/useTitle';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import Head from '../Head/Head';
import Services from '../Services/Services';
import Trusted from '../Trusted/Trusted';


const Home = () => {
    useTitle('Home')
    return (
        <div className=''>
            <Head/>
            <FeaturedProducts/>
            <Trusted/>
            <Services/>
        </div>
    );
};

export default Home;