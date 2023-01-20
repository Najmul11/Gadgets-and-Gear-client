import axios from 'axios';
import React, { createContext, useEffect, useReducer} from 'react';
import ProductReducer from '../reducer/ProductReducer';


export const ProductContext=createContext()

const url='http://localhost:5000/products'

const initialState={
    isLoading:false,
    isError:false,
    featureProducts:[],
    products:[],
    isSingleLoading:false,
    singleProduct:{}

}

const ProductProvider = (props) => {
    const [state, dispatch]=useReducer(ProductReducer, initialState)

    // api call for getting  featured products and all products in home page
    const getProducts=async(url)=>{
        dispatch({type:'SET_LOADING'})
        
        try {
            const res= await axios.get(url)
            const products=await res.data
            dispatch({type:'SET_API_DATA', payload:products})

        } catch (error) {
            dispatch({type:'API_ERROR'})
        }
    }


    useEffect(()=>{
        getProducts(url)
    },[])


    return (
       <ProductContext.Provider value={{...state}}>
            {props.children}
       </ProductContext.Provider>
    );
};



export {ProductProvider};



