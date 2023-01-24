import React, {useState} from 'react';

const Images = ({images}) => {
    const [mainImage, setMainImage]=useState(0)
    return (
        <div className='flex flex-col lg:flex-row gap-5 items-center'>
            <div className='flex lg:flex-col gap-5 lg:w-1/3'>
                {
                    images?.map((image, i)=> <figure className='cursor-pointer'>
                        <img src={image.url} alt={image.filename}
                        onClick={()=>setMainImage(i)}
                        />
                    </figure> )
                }
            </div>
            <div className='lg:w-2/3'>
               {
                images && 
                <img src={images[mainImage].url} alt="" />
               }
            </div>
        </div>
    );
};

export default Images;