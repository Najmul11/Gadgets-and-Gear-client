import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import Button from '../../sharedComponents/Button/Button';

const Form = () => {
    const handleSend=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='pb-10'>
            <form className='max-w-[1480px] mx-auto px-2' onSubmit={handleSend} >
                <div className='lg:w-2/5 mx-auto'>
                    <h3 className='text-xl font-medium mb-3 text-main'>Do leave us a mail if you have any query</h3>
                    <div>
                        <input type="text" placeholder="site@xyz.com" className="input input-bordered w-full " name='email'/>
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="input input-bordered w-full my-5 " name='subject'/>
                    </div>
                    <div>
                        <textarea className="textarea textarea-bordered w-full " placeholder="Your message" name='message'></textarea>
                    </div>
                    <div className='flex items-center py-5 justify-between'>
                        <Button value={'SEND'} />
                        <span>or</span>
                        <a
                            href="whatsapp://send?text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND" title="Share on whatsapp"
                            className='flex gap-2 bg-main text-white btn btn-sm border-0'>
                            <BsWhatsapp className='text-2xl'/>Whatsapp
                        </a>
                    </div>
                        
                </div>
                
            </form>
        </div>
    );
};

export default Form;