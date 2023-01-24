import React,{ useEffect, useState} from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { priceFormat } from '../../utilities/priceFormat';
import { toast } from 'react-hot-toast';

const CartItem = ({item, refetch}) => {
    const{image, productName, color,quantity, price, stock, subTotal,_id}=item
 
    const [formatedPrice, setFormatedPrice]=useState('')
    const [formatedSub, setFormatedSub]=useState('')
    const [newQuantity, setNewQuantity]=useState(quantity)



    useEffect(()=>{
        const formatePrice=priceFormat(price)
        setFormatedPrice(formatePrice)
        setFormatedSub(priceFormat(subTotal))
    },[price, subTotal])

 

    const increment=()=>{
        if (newQuantity<stock) {
            const increasedQuantity=newQuantity + 1;
            setNewQuantity(increasedQuantity)
            updateQuantity(increasedQuantity)
        }
        if (newQuantity===stock) {
            toast.error('Not enough stock')
        }
    }
    const decrement=()=>{
        if (newQuantity>0) {
            const decreasedQuantity=newQuantity - 1;
            setNewQuantity(decreasedQuantity)
            updateQuantity(decreasedQuantity)
        }
        if (newQuantity===1) {
            deleteItem()
        }
    }

    const updateQuantity=(modifiedQuantity)=>{
        const info={modifiedQuantity, price}
        fetch(`http://localhost:5000/cart/${_id}`, {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(info)
       })
       .then(res=>res.json())
       .then(data=>{
            if (data.acknowledged) {
                refetch()
            }
       })
    }
    const deleteItem=()=>{
        fetch(`http://localhost:5000/cart/${_id}`, {
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
                    <button onClick={decrement} className='text-main hover:bg-second rounded-lg p-2 '><FaMinus/></button>
                    <p className='text-2xl'>{newQuantity}</p>
                    <button onClick={increment} className='text-main hover:bg-second rounded-lg p-2'><FaPlus/></button>
                </div>
                <div className='text-center'>
                    <p>{formatedSub}</p>
                </div>
                <div className='text-2xl text-center text-red '>
                    <button onClick={deleteItem} className='rounded-lg p-2 hover:bg-second'><AiOutlineDelete/></button>
                </div>
            </div>
            
        </div>
    );
};

export default CartItem;