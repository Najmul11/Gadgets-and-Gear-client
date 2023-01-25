import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Button from '../../sharedComponents/Button/Button';

const Address = () => {
    const {user}=useContext(AuthContext)

    return (
       
        <div className='flex gap-5'>
            <div className='px-10 py-2 w-1/2 rounded bg-second'>
                <h5 className='text-3xl  font-medium'>Billing Address</h5>
                <div className='italic mt-5'>
                    <p>{user?.displayName}</p>
                    <p>
                        296/A, Gawsul Azam Building, First Colony, Lalkuthi, Mazar Road, Mirpur-1
                    </p>
                    <p>Dhaka</p>
                    <p>1216</p>
                    <Button value={'Edit'} margin={'mt-5'}/>
                </div>
            </div>
            <div className='px-10 py-2 w-1/2 rounded bg-second'>
                <h5 className='text-3xl  font-medium'>Shipping Address</h5>
                <div className='italic mt-5'>
                    <p>{user?.displayName}</p>
                    <p>
                        296/A, Gawsul Azam Building, First Colony, Lalkuthi, Mazar Road, Mirpur-1
                    </p>
                    <p>Dhaka</p>
                    <p>1216</p>
                    <Button value={'Edit'} margin={'mt-5'}/>
                </div>
            </div>
        </div>
    );
};

export default Address;