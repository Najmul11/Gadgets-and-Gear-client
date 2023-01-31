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
import useTitle from '../../hooks/useTitle';



const SingleProduct = () => {
    useTitle('Product Details')
    const [singleProduct, setSingleProduct]=useState({})
    const [loading, setLoading]=useState(false)
    
    const {id}=useParams()
    const {name, company, price, colors, description, stock, reviews, image, stars}=singleProduct
    const [color, setColor]=useState('')




    const api='http://localhost:5000/products'
    useEffect(()=>{
        setLoading(true)
            axios.get(`${api}/${id}`)
           .then(res=> {
            setSingleProduct(res.data)
            setLoading(false)
           })
    },[id])



    if (loading) {
        return <Loader classes={'h-screen'}/>
    }


    return (
        <div className='lg:pt-32 h-screen pt-10' >
           <div className='max-w-[1480px] mx-auto grid lg:grid-cols-2 gap-12'>
               <div className='px-1'>
                    <Images images={image}/>
               </div>
               <div className='px-1'>
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
                        {stock>0 && <ColorPicker colors={colors} setColor={setColor}/>}
                        <AddToCart product={singleProduct} color={color} image={image}/>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default SingleProduct;