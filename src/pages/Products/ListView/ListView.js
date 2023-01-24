import React from 'react';
import { Link } from 'react-router-dom';
import { priceFormat } from '../../../utilities/priceFormat';


const ListView = ({product}) => {
    const {name,price,_id, image, description}=product
    const formatedPrice=priceFormat(price)
    return (
        <div className="card card-side bg-base-100 shadow-sm  ">
            <div className=" flex flex-col lg:flex-row w-full   lg:gap-20 items-center">
                <div className='lg:w-96'>
                    <figure><img src={image} alt={name} className='rounded-lg w-full  lg:w-96 h-full  lg:h-56'/></figure>
                </div>
                <div className='py-3 md:py-2'>
                  <div className='relative  h-56'>
                    <div className='flex flex-col gap-3 '>
                            <h2 className="card-title">{name}</h2>
                            <div >
                                <p className='text-2xl text-main'>{formatedPrice}</p>
                                <p>{description.slice(0,200)+ '...'}</p>
                            </div>
                        </div>
                        <div className="card-actions absolute bottom-0">
                        <Link to={`/products/${_id}`}>
                                <button
                                className="btn btn-outline border-main hover:bg-hover hover:border-main hover:text-main ">
                                See more
                                </button>
                        </Link>
                        </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ListView;