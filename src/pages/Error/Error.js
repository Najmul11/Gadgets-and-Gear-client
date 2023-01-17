import React from 'react';
import {Link} from 'react-router-dom'
import Button from '../sharedComponents/Button/Button';

const Error = () => {
    return (
        <section class="bg-second ">
        <div class="flex items-center justify-center h-screen">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 class="mb-4 text-7xl  font-extrabold lg:text-9xl text-primary-600">404</h1>
                <p class="mb-4 text-3xl  font-bold md:text-4xl">Something went wrong</p>
                <p class="mb-4 text-lg font-semibold ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link to={'/products'}>
                    <Button value={'continue shopping'} margin={'mt-5'}/>
                </Link>
            </div>   
        </div>
    </section>
    );
};

export default Error;