import React from 'react';

const Order = ({order, refetch}) => {
    const {email, items, _id}=order

    const complete=(condition)=>{
        updateStatus(condition)
    }
    const cancel=(condition)=>{
        updateStatus(condition)
    }
    const updateStatus=(condition)=>{
        fetch(`http://localhost:5000/orders/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(condition)
        })
        .then(res=>res.json())
        .then(data=>{
            refetch()
        })
    }
    return (
        <div className='bg-second mb-5 py-2 px-5 rounded-lg'>
            <p>Customer email: {email}</p>
            <div className='grid grid-cols-4 gap-3 '>
                {
                    items.map(item=>
                        <div className='mt-3'>
                            <div>
                                <img src={item.image} alt="" className='w-32 '/>
                            </div>
                            <div className='mt-3'>
                                <p>{item.productName}</p>
                                <p>{item.quantity}</p>
                                <p className='flex gap-5'>Color: <p style={{background:item.color}} className='w-5 h-5 rounded-full'></p></p>
                            </div>
                        </div>
                        )
                }
            </div>
            <button onClick={()=>complete({condition:'complete'})} className='btn btn-sm bg-main border-0 mt-5'>Complete</button>
            <button onClick={()=>cancel({condition:'cancel'})} className='btn btn-sm bg-red border-0 ml-5'>Cancel</button>
        </div>
    );
};

export default Order;