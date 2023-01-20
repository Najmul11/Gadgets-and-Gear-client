import React from 'react';
import { Link } from 'react-router-dom';
import { priceFormat } from '../../../utilities/priceFormat';

const ProductCard = ({product}) => {
    const {name,price,_id, image, category}=product
    const formatedPrice=priceFormat(price)
    return (
        <Link to={`/products/${_id}`}>
            <div className="card bg-base-100 shadow-md rounded-md">
                <figure className='relative'>
                    <img src={image} alt="Shoes" />
                    <figcaption className='absolute top-5 right-5 bg-second font-medium rounded-xl px-3 py-[4px]'>{category}</figcaption>
                </figure>
                <div className="flex justify-between p-2">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-title">{formatedPrice}</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;