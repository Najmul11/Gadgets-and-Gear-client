import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loader from '../../sharedComponents/Loader/Loader';
import Order from './Order';

const AllOrders = () => {
    const {data:orders=[],isLoading, refetch}=useQuery({
        queryKey:['orders'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/orders`)
            const data= await res.json()
            return data
        }
    })
    if (isLoading) {
        return <Loader/>
    }
    return (
        <div className='py-8'>
            {
                orders.length >0 && orders?.map(o=><Order key={o._id} order={o} refetch={refetch}></Order>)
            }
        </div>
    );
};

export default AllOrders;