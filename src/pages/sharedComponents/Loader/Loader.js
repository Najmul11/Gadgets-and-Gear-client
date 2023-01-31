import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const Loader = ({classes}) => {
    return (
        <div className={`${classes && classes} flex justify-center items-center`}>
            <ThreeDots 
            height="60" 
            width="60" 
            radius="5"
            color="#0080af" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true} 
            />
        </div>
    );
}; 

export default Loader;