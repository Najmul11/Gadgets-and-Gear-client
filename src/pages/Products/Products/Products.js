import React, { createContext, useState, useEffect } from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { BsList} from 'react-icons/bs';
import { BiGridAlt} from 'react-icons/bi';
import './Product.css'
import axios from 'axios';
import MultiRangeSlider from "multi-range-slider-react";



export const FilterdContext=createContext()


const filterOptions=['price (highest)', 'price (lowest)']

const Products = () => {
    const [grid, setGrid]=useState(true)
    const [filter, setFilter]=useState('')
    const [minValue, set_minValue] = useState(25);
    const [maxValue, set_maxValue] = useState(75);

    const [allCategories, setAllCategories]=useState({})
    

    useEffect(()=>{
        axios.get('http://localhost:5000/categories')
        .then(res=>setAllCategories(res.data))
    },[])

    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    const handleGrid=()=>{
        setGrid(true)
        localStorage.setItem('grid', 'true')
    }
    const handleList=()=>{
        setGrid(false)
        localStorage.setItem('grid', 'false')
    }
    

    useEffect(()=>{
        const gridview=localStorage.getItem('grid')
        gridview==='true' ? setGrid(true) : setGrid(false)
    },[])
   
    const filterInfo={grid,filter}

    return (
        <div>
            <div className='max-w-[1480px] mx-auto flex gap-5 py-20'>
                <div className='w-1/5 '>
                    <input type="text" className='input input-bordered input-sm rounded' placeholder='SEARCH'/>
                    <div className='py-10'>
                        <h3 className='font-medium text-xl'>Category</h3>
                        <div className='flex flex-col gap-3'>
                            <p  className={'mt-2'}><Link to='/allproducts'>All</Link></p>
                            {
                                allCategories?.category?.map(c=><p><NavLink to={`/allproducts/${c}`}>{c}</NavLink></p> )
                            }
                        </div>
                        <div className='mt-10'>
                            <h3 className='font-medium text-xl'>Company</h3>
                            <form className='mt-3'>
                            <select name="" id="" className='select select-bordered rounded select-sm'>
                                {
                                     allCategories?.company?.map(c=><option value="">{c}</option>)
                                }
                            </select>
                            </form>
                        </div>
                        <div className='mt-10'>
                            <h3 className='font-medium text-xl'>Price</h3>
                            <div className='w-3/5'>
                                <MultiRangeSlider min={0} max={300000} 
                                className={'multi-range-slider bar-left bar-right bar-inner'}
                                step={5} minValue={minValue} maxValue={maxValue} ruler={false} label={false} barLeftColor={'#e1e1e2'} barRightColor={'#e1e1e2'} barInnerColor={'#0080af'}
                                onInput={(e) => { handleInput(e);}}
                                />       
                            </div> 
                            <button
                             className="btn  mt-5 btn-outline rounded-md border-main hover:bg-hover hover:border-main hover:text-main ">
                             Clear filter
                            </button>      
                        </div>
                    </div>
                </div>
                <div className='w-4/5'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5 items-center'>
                            <button onClick={handleGrid} className={`p-1 text-2xl rounded ${grid ? 'bg-black text-white':''}`}><BiGridAlt/></button>
                            <button onClick={handleList} className={`p-1 text-2xl rounded ${grid ? '':'bg-black text-white'}`}><BsList/></button>
                        </div>
                        <p className='font-medium'>12 products</p>
                        <select onChange={(e)=>setFilter(e.target.value)} id="" className='select select-bordered rounded select-sm'>
                            <option value={'default'} selected>Default sorting</option>
                            <option value={'highest'}>price (highest)</option>
                            <option value={'lowest'}>price (lowest)</option>
                        </select>
                    </div>
                    <div>
                        <FilterdContext.Provider value={filterInfo}>
                            <Outlet/>
                        </FilterdContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;