import React from 'react';
import { FiTruck} from 'react-icons/fi';
import { RiSecurePaymentLine, RiContactsLine, RiMoneyPoundBoxLine} from 'react-icons/ri';
import Service from './Service';


const Services = () => {
    return (
        <div className='py-32'>
            <div className='max-w-[1480px] grid lg:grid-cols-3 gap-10 mx-auto'>
                <div className=''>
                    <Service Icon={FiTruck} title={'Super Fast and Free Delivery'} height={'h-60'}/>
                </div>
                <div className='flex flex-col gap-10 lg:gap-5 '>
                    <Service Icon={RiContactsLine} title={'Non Contact Delivery'} height={'h-60 lg:h-1/2'}/>
                    <Service Icon={RiMoneyPoundBoxLine} title={'Money Back gurentee'} height={'h-60 lg:h-1/2'}/>
                </div>
                <div>
                    <Service Icon={RiSecurePaymentLine} title={'Super Secure Payment System'} height={'h-60'}/>
                </div>
            </div>
        </div>
    );
};

export default Services;