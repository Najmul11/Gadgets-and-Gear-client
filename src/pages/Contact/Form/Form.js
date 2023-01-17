import React from 'react';
import Button from '../../sharedComponents/Button/Button';

const Form = () => {
    const handleSend=()=>{

    }
    return (
        <div className='py-10'>
            <form className='max-w-[1480px] mx-auto' onSubmit={handleSend}>
                <div className='w-2/5 mx-auto'>
                    <div>
                        <input type="text" placeholder="site@xyz.com" className="input input-bordered w-full " name='email'/>
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="input input-bordered w-full my-5 " name='subject'/>
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered w-full " placeholder="Your message" name='message'></textarea>
                    </div>
                    <Button value={'SEND'} margin={'mt-5'}/>
                </div>
                
            </form>
        </div>
    );
};

export default Form;