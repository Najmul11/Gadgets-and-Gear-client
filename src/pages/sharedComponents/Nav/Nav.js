import React, { useState, useContext } from 'react';
import {NavLink, Link} from 'react-router-dom'
import brandLogo from '../../../assets/images/brand-logo.png'
import {FiShoppingCart} from "react-icons/fi";
import './Nav.css'
import { AuthContext } from '../../../contexts/AuthProvider';
import FilterSection from './FilterSection/FilterSection';
import { CartContext } from '../../../App';

const Nav = () => {
    const [drop, setDrop]=useState(false)
    const {user, logout}=useContext(AuthContext)
    const {items}=useContext(CartContext)

    const handleSignout=()=>{
        logout()
        .then(()=>{})
        .catch((err)=>{})
    }
    

    const menu=<>
        <li><NavLink className='btn text-black bg-transparent border-0 hover:bg-hover ml-3' to={'/'}>Home</NavLink></li>
        <li><NavLink className='btn text-black bg-transparent border-0 hover:bg-hover ml-3' to={'/allproducts'}>Products</NavLink></li>
        <li><NavLink className='btn text-black bg-transparent border-0 hover:bg-hover ml-3' to={'/contact'}>Contact</NavLink></li>
        <li >
            <NavLink to={'/cart'} className='border-0 relative btn text-black bg-transparent hover:bg-hover ml-3 '>
            <span className="absolute top-[4px] md:right-[0] right-[35%] text-main roundd-lg ">{items.length}</span> 
                <FiShoppingCart className='text-lg'/>
            </NavLink>
        </li>
        {
            !user ? 
            <li><NavLink className='btn text-black bg-transparent border-0 hover:bg-hover ml-3' to={'/login'}>Login</NavLink></li>
            :
            <div className='flex items-center ml-5'>
                <Link to={'/dashboard'} className='bg-main  text-white bg-opacity-75 font-medium p-1 rounded-xl'>{user.displayName}</Link>
                <li>
                    <button onClick={handleSignout}
                    className='btn text-black bg-transparent border-0 hover:bg-hover ml-3' to={'/about'}>
                    Logout
                    </button>
                </li>
            </div>
        }
    </>

    return (
        <nav className=" bg-second min-w-[400px] py-2">
            <div className='navbar max-w-[1480px] mx-auto '>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden" onClick={()=>setDrop(!drop)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        drop && 
                        <>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-second rounded-box w-56">
                            {menu}
                            <FilterSection/>
                        </ul>
                        </>

                    }
                </div>
                <div className="flex-1 ">
                    <Link className="btn text-black bg-transparent border-0 hover:bg-hover normal-case text-xl w-[180px]">
                        <img src={brandLogo} alt="" className='w-[180px]'/>
                    </Link>
                </div>
                <div className='md:hidden flex-none'>
                    <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;