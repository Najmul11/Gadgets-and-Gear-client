import React from 'react';
import AccountInfo from './AccountInfo';
import Address from './Address';

const AccountDetails = () => {
    return (
        <div className='py-8'>
            <Address/>
            <AccountInfo/>
        </div>
    );
};

export default AccountDetails;