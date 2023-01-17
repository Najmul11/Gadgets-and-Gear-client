import React from 'react';

const Service = ({Icon, title,height}) => {
    return (
        <div className={`rounded-lg bg-second shadow-xl ${height && height}`}>
            <div className=" flex items-center justify-center h-full">
               <div>
                    <Icon className='text-6xl text-main text-center mx-auto rounded-full bg-white  py-3'/>
                    <h2 className="card-title text-sm mt-1">{title}</h2>
               </div>
            </div>
        </div>
    );
};

export default Service;