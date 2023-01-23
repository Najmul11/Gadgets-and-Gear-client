import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import {useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const AddToCart = ({ product, color, image}) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()

    const addToCart=()=>{
        if (!user) {
          return navigate('/login',{state:{from:location}})
        }

        const cartItem={
            email:user?.email,
            name:user?.displayName,
            productName:product.name,
            productId:product.id,
            company:product.company,
            quantity:1,
            color:color,
            price:product.price,
            image:image[0].url
        }

        fetch('http://localhost:5000/cart',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(cartItem)
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.acknowledged) {
                toast.success('Item added to cart')
            }
        })

    }
    return (
        <div>
            <button  onClick={addToCart}
            className='px-3 mt-5 border-0 rounded-md btn bg-main'>
            Add to Cart
            </button>
        </div>
    );
};

export default AddToCart;