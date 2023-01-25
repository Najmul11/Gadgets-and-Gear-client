import React from 'react';
import Button from '../../sharedComponents/Button/Button';

const AccountInfo = () => {
    return (
        <div>
            <form action="" className='my-10'>
                <h3 className='text-center text-xl font-medium'>Change user information</h3>
                <div className=''>
                    <div className='flex gap-5 pt-5 justify-center'>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">First name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Last name</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='flex gap-5 justify-center'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">New password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confirm password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                        </div>
                    </div>
                    <div className='text-center'>
                        <Button value={'Save changes'} margin={'mt-5'}/>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default AccountInfo;