import React,{useEffect, useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { priceFormat } from '../../utilities/priceFormat';

const CartItem = ({item, refetch}) => {
    const{image, productName, color,quantity, price}=item
    const [formatedPrice, setFormatedPrice]=useState('')

    useEffect(()=>{
        const formatePrice=priceFormat(price)
        setFormatedPrice(formatePrice)
    },[price])

    return (
        <div className='max-w-[1480px] mx-auto'>
            <div  className="grid grid-cols-6 py-2 items-center">
                <div className=' col-span-2 px-5'>
                    <div className="flex gap-5 items-center">
                        <div>
                            <img src={image} alt={productName} className='w-32 rounded-lg'/>
                        </div>
                        <div>
                            <p className='text-xl font-medium'>{productName}</p>
                            <div className='flex items-center gap-2'>Color:
                                <p style={{background:color}} className='w-5 h-5 rounded-full'></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center text-xl'>
                    <p>{formatedPrice}</p>
                </div>
                <div className='flex gap-5 justify-center'>
                    <button className='text-main hover:bg-second rounded-lg p-2 '><FaMinus/></button>
                    <p className='text-2xl'>{quantity}</p>
                    <button className='text-main hover:bg-second rounded-lg p-2'><FaPlus/></button>
                </div>
                <div className='text-center'>
                    <p>Subtotal</p>
                </div>
                <div className='text-2xl text-center text-red '>
                    <button className='rounded-lg p-2 hover:bg-second'><AiOutlineDelete/></button>
                </div>
            </div>
            
        </div>
    );
};

export default CartItem;