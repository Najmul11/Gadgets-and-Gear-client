import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import CartItem from './CartItem';

const Cart = () => {
    const {user}=useContext(AuthContext)

    const {data:items=[], isLoading, refetch}=useQuery({
        queryKey:['items', user?.email],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/cart/${user?.email}`)
            const data= await res.json()
            return data
        }
    })

    return (
        <div className='py-20'>
            <div className='max-w-[1480px] mx-auto '>
                <div className="grid grid-cols-6 gap-4 border-b border-main text-center font-medium pb-1">
                   <div className=' col-span-2'><p>Item</p> </div>
                   <div className=''><p>Price</p></div>
                   <div className=''><p>Quantity</p></div>
                   <div className=''><p>Subtotal</p></div>
                   <div className=''><p>Remove</p></div>
                </div>
                <div className='py-5 border-b border-main'>
                    {
                        items.map(item=><CartItem key={item._id} item={item} refetch={refetch}></CartItem>)
                    }
                </div>
                <div className='flex justify-between mt-5'>
                    <NavLink to={'/allproducts'}>
                        <button
                            className="btn border-main bg-main hover:bg-hover hover:border-main hover:text-black ">
                            Continue shopping
                        </button>
                    </NavLink>
                    <button
                        className="btn border-main bg-main hover:bg-hover hover:border-main hover:text-black ">
                        Clear cart
                    </button>
                </div>
                <div className='flex justify-end mt-20 '>
                    <div className='w-[300px]  p-10 bg-second  rounded-lg'>
                        <div className='flex justify-between'>
                            <p>Subtotal:</p>
                            <p className='font-medium'>JMMMMM</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Shipping Fee:</p>
                            <p className='font-medium'>JMMMMM</p>
                        </div> <hr className=' mt-3' />
                        <div className='flex justify-between'>
                            <p>Total:</p>
                            <p className='font-medium'>JMMMMM</p>
                        </div>
                        <div className=' mt-5'>
                        <button
                            className="btn rounded-md w-full btn-sm border-main bg-main hover:bg-hover hover:border-main hover:text-black ">
                            checkout
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart; 