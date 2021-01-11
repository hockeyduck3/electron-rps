import React from 'react';
import { min, max, close } from '../../utils/titleFuncs';

import './style.css';

function TitleBar() {
    return (
        <header className='bg-white bg-opacity-5 flex flex-row-reverse shadow'>
            <div onClick={close} id='close' className='cursor-pointer text-white text-opacity-75 text-xl font-bold mt-1 mr-3 mb-2  hover:text-red-600'>X</div>
            <div onClick={max} id='max' className='border-2.5 rounded-sm border-white border-opacity-75 cursor-pointer h-4 w-4 mr-3 mt-2.5 hover:border-green-500'></div>
            <div onClick={min} id='min' className='cursor-pointer text-white text-opacity-75 text-5xl mr-3 leading-centered hover:text-yellow-400'>-</div>
        </header>
    )
}

export default TitleBar;
