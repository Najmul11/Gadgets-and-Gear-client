import axios from 'axios';
import React, { useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import Loader from '../sharedComponents/Loader/Loader';
import { MdLoop } from "react-icons/md";
import { AiOutlineSafetyCertificate} from "react-icons/ai";
import {CiDeliveryTruck} from "react-icons/ci";
import Images from './Images';
import StartRating from './StarRating';
import ColorPicker from './ColorPicker';
import AddToCart from './AddToCart';



const SingleProduct = () => {
    const [singleProduct, setSingleProduct]=useState({})
    const [loading, setLoading]=useState(false)
    const {id}=useParams()
    const [quantity, setQuantity]=useState(1)

    const {name, company, price, colors, description, stock, reviews, image, stars}=singleProduct


    const api='http://localhost:5000/products'
    useEffect(()=>{
        setLoading(true)
            axios.get(`${api}/${id}`)
           .then(res=> {
            setSingleProduct(res.data)
            setLoading(false)
           })
    },[id])

    const setIncrease=()=>{
        quantity<stock ? setQuantity(quantity + 1): setQuantity(quantity)
    }

    const setDecrease=()=>{
        quantity>1 ?setQuantity(quantity - 1):setQuantity(1)
    }


    if (loading) {
        return <Loader classes={'h-screen'}/>
    }


    return (
        <div className='pt-32 h-screen'>
           <div className='max-w-[1480px] mx-auto grid grid-cols-2 gap-12'>
               <div>
                    <Images images={image}/>
               </div>
               <div>
                    <h3 className="text-3xl font-medium">{name}</h3>
                    <StartRating stars={stars} reviews={reviews}/>
                    <div className='flex flex-col gap-5 py-5 font-medium'>
                        <p><del>{price}</del></p>
                        <p>Deal of the Day:{price}</p>
                        <p>{description}</p>
                        <div className='flex gap-10 items-center'>
                            <div>
                                <MdLoop className='text-4xl rounded-full bg-second p-2 mx-auto my-2'/>
                                <p>30 Days Replacement</p>
                            </div>
                            <div>
                                <AiOutlineSafetyCertificate  className='text-4xl rounded-full bg-second p-2 mx-auto my-2'/>
                                <p>2 Years Warrenty</p>
                            </div>
                            <div>
                                <CiDeliveryTruck  className='text-4xl rounded-full bg-second p-2 mx-auto my-2'/>
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <p>Available: {stock>0 ? 'In Stock' : 'Out of Stock'}</p>
                        <p>Brand: {company}</p>
                        {stock>0 && <ColorPicker colors={colors}/>}
                        <AddToCart setIncrease={setIncrease} setDecrease={setDecrease} quantity={quantity}/>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default SingleProduct;