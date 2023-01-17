import React from 'react';

const Button = ({value,margin}) => {
    return (
        <div className={margin && margin}>
            <button className='bg-main px-3 py-2 btn btn-sm border-0'>{value}</button>
        </div>
    );
}; 

export default Button;