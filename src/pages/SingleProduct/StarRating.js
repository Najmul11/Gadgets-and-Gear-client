import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


const StartRating = ({stars, reviews}) => {
    return (
        <div className='flex items-center gap-3'>
           <div className='flex items-center gap-1'>
            {
                    [...Array(5)].map((a,i)=>
                    <div key={i} className='text-yellow'>
                        {
                            <div>
                                {
                               stars >= i + 1 ? <FaStar/> : stars >= i + 0.5 ? <FaStarHalfAlt/> : <AiOutlineStar className='text-[20.5px]' />
                                }
                            </div>
                        }
                       
                    </div> )   
                }
           </div>
            <p className='font-medium'>( {reviews} reviews )</p>
        </div>
    );
};

export default StartRating;