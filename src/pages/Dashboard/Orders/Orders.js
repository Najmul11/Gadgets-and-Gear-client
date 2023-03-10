import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../sharedComponents/Loader/Loader';

const Orders = () => {
    const {user}=useContext(AuthContext)
    const {data:orders=[],isLoading}=useQuery({
        queryKey:['orders'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/orders/${user?.email}`)
            const data= await res.json()
            return data
        }
    })


    if (isLoading) {
        return  <Loader classes={'h-[300px]'}/>
    }
    return (
        <div className='py-8'>
            <h3 className="text-3xl font-medium">Your orders</h3>
            <div className="overflow-x-auto py-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order id</th>
                            <th>Date</th>
                            <th>status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           orders.length>0 && orders.map((o,i)=>
                           <tr key={o._id}>
                               <th>{i + 1}</th>
                               <td>{o._id}</td>
                               <td>JAN 25, 2023</td>
                               <td>
                                   <span className={`${o.status==='cancelled' ? 'bg-red' : 'bg-main'} p-2 rounded bg-opacity-25`}>
                                       {o.status}
                                   </span>
                               </td>
                           </tr>
                           )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;