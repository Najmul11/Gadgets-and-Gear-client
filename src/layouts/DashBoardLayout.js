import React,{useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useTitle from '../hooks/useTitle';
import Nav from '../pages/sharedComponents/Nav/Nav';

const DashBoardLayout = () => {
    useTitle('Dashboard')
    const {user}=useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Nav/>
            <div className='max-w-[1480px] mx-auto'>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content ">
                        <Outlet/>              
                    </div> 
                    <div className="drawer-side dark:bg-black ">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
                        <ul className="menu p-4 w-80 text-base-content dark:text-gray-400">
                            <div className='py-5'>
                                <div className='flex gap-3 items-center px-3'>
                                    <img src={user?.photoURL} alt="" className='rounded-full w-12' />
                                    <div>
                                        <p className='font-medium'>{user?.displayName}</p>
                                    </div>
                                </div>
                            </div>
                            <li><Link to={'/dashboard/orders'} className="font-semibold text-sm uppercase">Orders</Link></li>
                            <li><Link to={'/dashboard/account_details'} className="font-semibold text-sm uppercase">Account details</Link></li>
                            {
                                isAdmin && 
                                <>
                                    <div className='py-5'>
                                        <div className='flex gap-3 items-center '>
                                            <div>
                                                <p className='font-medium'>Admin panel</p>
                                            </div>
                                        </div>
                                    </div>
                                    <li><Link to={'/dashboard/all_orders'} className="font-semibold text-sm uppercase">All orders</Link></li>
                                    <li><Link to={'/dashboard/add_product'} className="font-semibold text-sm uppercase">Add product</Link></li>
                                    <li><Link to={'/dashboard/all_products'} className="font-semibold text-sm uppercase">All products</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default DashBoardLayout;