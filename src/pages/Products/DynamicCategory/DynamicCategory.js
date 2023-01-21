import axios from 'axios';
import React,{useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../Home/FeaturedProducts/ProductCard';
import ListView from '../ListView/ListView';
import { FilterdContext } from '../Products/Products';

const DynamicCategory = () => {
    const [products, setProducts]=useState([])
    const {category}=useParams()
    const {grid, filter}=useContext(FilterdContext)
    
    useEffect(()=>{
        axios.get(`http://localhost:5000/categories/${category}`)
        .then(res=>{
            setProducts(res.data)
        })
    },[category])

    let modifiedProducts=[...products]

    if (filter==='default') {
        modifiedProducts=products
    }
    if (filter==='highest') {
        modifiedProducts.sort((p1,p2)=>p2.price-p1.price);
    }
    if (filter==='lowest') {
        modifiedProducts.sort((p1,p2)=>p1.price-p2.price);
    }

    return (
        <div className='py-10'>
            {
                grid ?
                <div className='grid grid-cols-3 gap-10'>
                    {
                        modifiedProducts.map(p=><ProductCard key={p._id} product={p}></ProductCard>)
                    }
                </div>
                :
                <div className='flex flex-col gap-16'>
                    {
                       modifiedProducts.map(p=><ListView key={p._id} product={p}></ListView>)
                    }
                </div>
            }
        </div>
    );
};

export default DynamicCategory;