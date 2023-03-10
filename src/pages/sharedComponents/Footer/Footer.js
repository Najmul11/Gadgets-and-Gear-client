import React from 'react';
import card from '../../../assets/images/card.png'
import { FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='pt-32  '>
            <div className=' pb-10 '>
                <div className=' relative  max-w-[1480px] mx-auto'>
                    <div className='lg:w-2/5 p-5 bg-second h-32 relative rounded-lg shadow-lg -top-[62px] lg:left-[30%]'>
                        <p className='font-medium'>Subscribe to get updates</p>
                        <div className='flex justify-between items-center  mt-3'>
                            <div className="relative w-full">
                                <input type="text" placeholder="username@site.com" className="input input-bordered w-full " /> 
                                <button className="btn bg-main border-0 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 p-5 text-black'>
                        <div className=''>
                            <p className='text-lg font-semibold font-mono text-main'>Gadgets and Gear</p>
                            <div className='flex flex-col mt-5 gap-3 '>
                                <Link className='hover:underline' to={'/terms-n-condition'}>Terms and condition</Link>
                                <Link className='hover:underline' to={'/refund-policy'}>Refund policy</Link>
                                <p>@{new Date().getFullYear()} Gadgets and Gear. All Rights Reserved</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg font-semibold font-mono text-main'>Follow us</p>
                            <div className='flex gap-5 text-2xl mt-3 '>
                                <a href="https://www.facebook.com/"><FaFacebook/></a>
                                <a href="https://www.instagram.com/"><FaInstagram/></a>
                                <a href="https://discord.com/"><FaDiscord/></a>
                            </div>
                        </div>
                        <div>
                            <p className='text-lg font-semibold font-mono text-main'>We accept</p>
                            <img src={card} alt="" className='mt-3 w-full'/>
                        </div>
                    </div>
                </div> 
             </div>
        </div>
    );
};

export default Footer;