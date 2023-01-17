import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
const Map = () => {
    return (
        <div className='pt-10 pb-10'>
            <div className='max-w-[1480px] mx-auto'>
                <div className='w-2/5 mx-auto flex items-center pb-10'>
                    <button className='px-3 border-0 flex items-center justify-center bg-main gap-3 rounded-lg btn'>
                        <BsWhatsapp className='text-2xl'/>Whatsapp
                    </button>
                </div>
                <iframe title='location' 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7921738777277!2d90.40439671536318!3d23.790413893162487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70d8b34fc37%3A0x6d8b4881d74019bc!2sGadget%20%26%20Gear%20(G%26G%2C%20Banani%20Road%2011)!5e0!3m2!1sen!2sbd!4v1673878175098!5m2!1sen!2sbd"
                width="100%" 
                height="450" 
                style={{border:'0'}}
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
};

export default Map;