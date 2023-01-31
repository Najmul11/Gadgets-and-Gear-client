import React from 'react';
import shopping from '../../../assets/images/home/head.jpeg'
import Button from '../../sharedComponents/Button/Button';
import './Head.css'
import {Link} from 'react-router-dom'

const Head = () => {
    return (
        <header className=''>
            <div className='max-w-[1480px] mx-auto  flex gap-5 py-10 items-center clip-path rounded-br-lg flex-col lg:flex-row'>
                <div className='lg:w-1/2 pr-10'>
                    <p className='uppercase font-medium text-main'>Welcome to</p>
                    <h1 className='text-6xl font-semibold'>Gadgets and Gear</h1>
                    <p className='mt-5 font-semibold'>We provide the best solution for the technology Mad people. Yah heard it right , If you dont find the product you need, please leave a query </p>
                    <Link to='/allproducts'>
                        <Button value={'Shop Now'} margin={'mt-5'}></Button>
                    </Link>
                </div>
                <div className=' lg:w-1/2'>
                    <figure >
                        <img src={shopping} alt="" className='rounded-t-lg' />
                    </figure>
                </div>
            </div>
            
        </header>
    );
};

export default Head;