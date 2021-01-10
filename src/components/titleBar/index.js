import React from 'react';
import { min, max, close } from '../../utils/titleFuncs';

import './style.css';

function TitleBar() {
    return (
        <header className='bg-white flex flex-row-reverse shadow-lg'>
            <div onClick={close} id='close' className='cursor-pointer text-black text-opacity-75 mr-3 mb-2 text-2xl mt-1 hover:text-red-600'>X</div>
            <div onClick={max} id='max' className='border-2.5 rounded-sm border-black border-opacity-75 cursor-pointer h-5 w-5 mr-3 mt-2.5 hover:border-green-700'></div>
            <div onClick={min} id='min' className='cursor-pointer text-black text-opacity-75 text-5xl mr-3 leading-centered hover:text-yellow-400'>-</div>
        </header>
    )
}

export default TitleBar;
