import React from 'react';
import { useProductContext } from '../../../hooks/useProductContext';
import Loader from '../../sharedComponents/Loader/Loader';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
    
    const {isLoading, featureProducts}=useProductContext()
    return (
        <div className='py-48'>
            <div className=''>
                {
                    isLoading ?  <Loader/> : <div className='max-w-[1480px] mx-auto mb-10'>
                        <p className='uppercase font-medium text-main'>Have a glance</p>
                        <h2 className='text-4xl font-semibold'>Our Feature Products</h2>
                    </div>

                } 
            </div>
            <div className='grid md:grid-cols-3 gap-10 max-w-[1480px] mx-auto'>
                {
                  featureProducts.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;