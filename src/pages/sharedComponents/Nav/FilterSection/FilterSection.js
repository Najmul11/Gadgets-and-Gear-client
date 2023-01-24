import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const FilterSection = () => {
    const [allCategories, setAllCategories]=useState({})


    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then(res=>setAllCategories(res.data))
    },[])

 
 

   
    return (
        <div className=' '>
            <div className='py-10'>
                <h3 className='font-medium text-xl'>Category</h3>
                <div className='flex flex-col gap-3'>
                    <p  className={'mt-2'}><Link to='/allproducts'>All</Link></p>
                    {
                        allCategories?.category?.map(c=><p><NavLink to={`/allproducts/${c}`}>{c}</NavLink></p> )
                    }
                </div>
            </div>
    </div>
    );
};

export default FilterSection;