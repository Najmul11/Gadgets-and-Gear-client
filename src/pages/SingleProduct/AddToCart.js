import React from 'react';
import { FaPlus, FaMinus} from "react-icons/fa";

const AddToCart = ({setIncrease, setDecrease, quantity}) => {
    return (
        <div>
            <div className='flex gap-5'>
                <button onClick={setDecrease} className=' px-2 rounded hover:bg-hover'><FaMinus/></button> 
                <span className='text-2xl text-center text-main w-8'>{quantity}</span>
                <button onClick={setIncrease}className=' px-2 rounded hover:bg-hover'><FaPlus/></button>
            </div>
            <button 
            className='px-3 mt-5 border-0 rounded-md btn bg-main'>
                Add to Cart
             </button>
        </div>
    );
};

export default AddToCart;