import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Db from '../../../assets/images/home/logo slider/db.png'
import Dt from '../../../assets/images/home/logo slider/dt.png'
import independent from '../../../assets/images/home/logo slider/independent.png'
import star from '../../../assets/images/home/logo slider/star.png'
import tbs from '../../../assets/images/home/logo slider/tbs.png'


const Trusted = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear"
      };
    return (
        <div className='pb-20 bg-main'>
            <div className='max-w-[1480px] mx-auto pt-8'>
                <h3 className="text-4xl font-semibold text-center mb-12 font-mono text-white">Featured In</h3>
                <div className='md:w-4/5 mx-auto'>
                    <Slider {...settings}>
                        <div>
                            <img src={Dt} alt="" className='w-60 mx-auto' />
                        </div>
                        <div>
                            <img src={Db} alt="" className='w-60 mx-auto'/>
                        </div>
                        <div>
                            <img src={independent} alt="" className='w-60 mx-auto' />
                        </div>
                        <div>
                            <img src={star} alt="" className='w-60 mx-auto' />
                        </div>
                        <div>
                             <img src={tbs} alt="" className='mx-auto ' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Trusted;