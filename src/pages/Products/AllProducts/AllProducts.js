import React, {useContext} from 'react';
import { useProductContext } from '../../../hooks/useProductContext';
import ProductCard from '../../Home/FeaturedProducts/ProductCard';
import ListView from '../ListView/ListView';
import { FilterdContext } from '../Products/Products';

const AllProducts = () => {
    const {products}=useProductContext()
    const {grid, filter, company, search}=useContext(FilterdContext)

    let modifiedProducts=[...products]


    if (search) {
        modifiedProducts=modifiedProducts.filter(p=>p.name.includes(search.toLowerCase()))
    }

    if (filter==='default') {
        modifiedProducts=products
    }
    if (company) {
        modifiedProducts=modifiedProducts.filter(p=>p.company===company)
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
                modifiedProducts.length===0 ? 
                <div>
                    <p className='text-2xl '>No prod found</p>
                </div>
                :
                <>
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
                </>
            }
            
        </div>
    );
};

export default AllProducts;