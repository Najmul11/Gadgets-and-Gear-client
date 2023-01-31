import React, { useContext} from 'react';
import { toast } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { CartContext } from '../../App';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Loader from '../sharedComponents/Loader/Loader';
import CartItem from './CartItem';

const Cart = () => {
    useTitle('Cart')
    const {user}=useContext(AuthContext)
    const {refetch, isLoading, items}=useContext(CartContext)

    const navigate=useNavigate()

 
    
  

    const deleteItems=()=>{
        fetch(`http://localhost:5000/allcartitems/${user?.email}`, {
        method:'DELETE',
       })
       .then(res=>res.json())
       .then(data=>{
           if (data.acknowledged) {
                toast.success('item deleted')
                refetch()
           }
       })
    }

    const postOrder=()=>{
        const order={
            email:user?.email,
            status:'pending',
            items:items
        }
        console.log(order);
        fetch('http://localhost:5000/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                deleteItems()
                navigate('/dashboard/orders')
            }
        })
    }

    if (isLoading) {
        return <Loader/>
    }

    return (
        <div className='py-20'>
            <div className='max-w-[1480px] mx-auto '>
                <div className="grid grid-cols-6 gap-4 border-b border-main text-center font-medium pb-1">
                   <div className=' col-span-2'><p>Item</p> </div>
                   <div><p>Price</p></div>
                   <div><p>Quantity</p></div>
                   <div><p>Subtotal</p></div>
                   <div><p>Remove</p></div>
                </div>
                <div className='py-5 border-b border-main'>
                    {
                        items?.map(item=><CartItem key={item._id} 
                            item={item} refetch={refetch}
                            ></CartItem>)
                    }
                </div>
               {
                    items?.length===0 ?
                    <div className='py-20'>
                        <h4 className="text-main font-medium text-3xl font-mono text-center">Cart is empty...Keep shopping</h4>
                    </div>
                    :
                    <>
                        <div className='flex justify-between mt-5'>
                            <NavLink to={'/allproducts'}>
                                <button
                                    className="btn border-main bg-main hover:bg-hover hover:border-main hover:text-black ">
                                    Continue shopping
                                </button>
                            </NavLink>
                            <button onClick={deleteItems}
                                className="btn border-main bg-main hover:bg-hover hover:border-main hover:text-black ">
                                Clear cart
                            </button>
                        </div>
                        <div className='flex justify-end mt-20 '>
                            <div className='w-[300px]  p-10 bg-second  rounded-lg'>
                                <div className='flex justify-between'>
                                    <p>Subtotal:</p>
                                    <p className='font-medium'>sample</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Shipping Fee:</p>
                                    <p className='font-medium'>sample</p>
                                </div> <hr className=' mt-3' />
                                <div className='flex justify-between'>
                                    <p>Total:</p>
                                    <p className='font-medium'>sample</p>
                                </div>
                                <div className=' mt-5'>
                                    <button onClick={postOrder}
                                        className="btn rounded-md w-full btn-sm border-main bg-main hover:bg-hover hover:border-main hover:text-black">
                                        checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Cart; 