import React, {useState} from 'react';
import {BsCheck} from "react-icons/bs";


const ColorPicker = ({colors}) => {
    const [selectedColor, setSelectedColor]=useState(colors[0])
    const checkColor='#000000'
    
    return (
        <p className='flex gap-3 items-center'>Color: 
        {
            colors?.map((color,i)=>
            <button onClick={()=>setSelectedColor(color)} key={i}
            style={{background:color}}
            className={`rounded-full w-5 h-5 ${selectedColor === color? 'bg-opacity-100': 'opacity-75'}`}>
                {
                    selectedColor=== color ? <BsCheck style={color ===checkColor ? {color:'white'}:{color:'black'}} className='text-xl'/> :''
                }
            </button> )
        }
    </p>
    );
};

export default ColorPicker;