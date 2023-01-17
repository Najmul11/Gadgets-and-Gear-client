import axios from 'axios';
import React, { createContext, useEffect} from 'react';


export const ProductContext=createContext()

const ProductProvider = (props) => {
    const url='http://localhost:5000/products'

    // api call for featured products in home page
    const getProducts=async(url)=>{
        const res=axios.get(`url?featured='true'`)
        const products=await res.data
    }

    useEffect(()=>{
        getProducts(url)
    },[])

    const productInfos={}

    return (
       <ProductContext.Provider value={productInfos}>
            {props.children}
       </ProductContext.Provider>
    );
};



export {ProductProvider};



