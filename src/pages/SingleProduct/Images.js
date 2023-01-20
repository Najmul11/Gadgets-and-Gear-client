import React, {useState} from 'react';

const Images = ({images}) => {
    const [mainImage, setMainImage]=useState(0)
    return (
        <div className='flex gap-5 items-center'>
            <div className='flex flex-col gap-5 w-1/3'>
                {
                    images?.map((image, i)=> <figure className='cursor-pointer'>
                        <img src={image.url} alt={image.filename}
                        onClick={()=>setMainImage(i)}
                        />
                    </figure> )
                }
            </div>
            <div className='w-2/3'>
               {
                images && 
                <img src={images[mainImage].url} alt="" />
               }
            </div>
        </div>
    );
};

export default Images;