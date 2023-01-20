import React from 'react';
import shopping from '../../../assets/images/home/head.jpeg'
import Button from '../../sharedComponents/Button/Button';
import './Head.css'

const Head = () => {
    return (
        <header className=''>
            <div className='max-w-[1480px] mx-auto  flex gap-5 py-10 items-center clip-path rounded-br-lg'>
                <div className='w-1/2 pr-10'>
                    <p className='uppercase font-medium text-main'>Welcome to</p>
                    <h1 className='text-6xl font-semibold'>Gadgets and Gear</h1>
                    <p className='mt-5 font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id minima voluptatum consequatur ipsam culpa nam ratione voluptatem asperiores! Dignissimos, nihil autem ipsam atque quaerat dolore?</p>
                    <Button value={'Shop Now'} margin={'mt-5'}></Button>
                </div>
                <div className='w-1/2'>
                    <figure >
                        <img src={shopping} alt="" className='rounded-t-lg' />
                    </figure>
                </div>
            </div>
            
        </header>
    );
};

export default Head;