import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Address = () => {
    const {user}=useContext(AuthContext)
    const [showBillEdit, setShowBillEdit]=useState(false)
    const [showShippingEdit, setShowShippingEdit]=useState(false)
    const [billname, setName]=useState('')
    const [billaddress, setAddress]=useState('')
    const [shipname, setShipName]=useState('')
    const [shipaddress, setShipAddress]=useState('')
    
    const {data:dbUser={}, refetch}=useQuery({
        queryKey:['orders'],
        queryFn:async()=>{
            const res=await fetch(`http://localhost:5000/users/${user?.email}`)
            const data= await res.json()
            return data
        }
    })
  

    const editBill=(e)=>{
        e.preventDefault()
       const info={billname, billaddress}
       fetch(`http://localhost:5000/users/${user?.email}`, {
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(info)
       })
       .then(res=>res.json())
       .then(data=>{
        if (data.acknowledged) {
            setShowBillEdit(false)
            refetch()
        }
       })
    }
    
    const editShipping=(e)=>{
        e.preventDefault()
        const info={shipname, shipaddress}
        fetch(`http://localhost:5000/user/${user?.email}`, {
         method:'PUT',
         headers:{
             'content-type':'application/json'
         },
         body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
         if (data.acknowledged) {
            setShowShippingEdit(false)
             refetch()
         }
        })
     }



    return (
       
        <div className='flex gap-5'>
            {
                !showBillEdit ?
                <div  className='px-10 py-2 w-1/2 rounded bg-second'>
                    <h5 className='text-3xl  font-medium'>Billing Address</h5>
                    <div className='italic mt-5'>
                        <p>{dbUser?.billingName}</p>
                        <p>
                            {dbUser?.billingAddress}
                        </p>
                        <button onClick={()=>setShowBillEdit(true)} className='btn btn-sm bg-main border-0 mt-5'>Edit</button>
                    </div>
                </div> 
                :
                <div  className='px-10 py-2 w-1/2 rounded bg-second'>
                    <h5 className='text-3xl  font-medium'>Edit Billing Address</h5>
                    <form onSubmit={editBill} className='italic mt-5' >
                        <div>
                            <input onChange={(e)=>setName(e.target.value)} required type="text" className='input input-bordered input-sm w-full' placeholder='Name' name='name' />
                        </div>
                        <div>
                            <input onChange={(e)=>setAddress(e.target.value)} required type="text" className='input input-bordered input-sm w-full mt-3' placeholder='Address' name='address' />
                        </div>
                        <button className='btn btn-sm bg-main border-0 mt-5'>Save changes</button>
                    </form>
                </div> 
            }
            {
                !showShippingEdit ? 
                    <div  className='px-10 py-2 w-1/2 rounded bg-second'>
                        <h5 className='text-3xl  font-medium'>Shipping Address</h5>
                        <div className='italic mt-5'>
                        <p>{dbUser?.shippingName}</p>
                        <p>
                            {dbUser?.shippingAddress}
                        </p>
                            <button onClick={()=>setShowShippingEdit(true)} className='btn btn-sm bg-main border-0 mt-5'>Edit</button>
                        </div>
                    </div> 
                :
                <form onSubmit={editShipping}  className='px-10 py-2 w-1/2 rounded bg-second'>
                    <h5 className='text-3xl  font-medium'>Edit Shipping Address</h5>
                    <div className='italic mt-5'>
                        <div>
                            <input required  onChange={(e)=>setShipName(e.target.value)} type="text" className='input input-bordered input-sm w-full' placeholder='Name' />
                        </div>
                        <div>
                            <input required onChange={(e)=>setShipAddress(e.target.value)}   type="text" className='input input-bordered input-sm w-full mt-3' placeholder='Address' />
                        </div>
                        <button className='btn btn-sm bg-main border-0 mt-5'>Save changes</button>
                    </div>
                </form> 

            }
        </div>
    );
};

export default Address;