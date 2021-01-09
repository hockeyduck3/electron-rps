import React from 'react';

import './style.css';

function TitleBar() {
    return (
        <nav className='flex flex-row-reverse mt-1 shadow'>
            <div id='close' className='cursor-pointer text-white mr-3 mb-2 text-2xl opacity-60 hover:opacity-75'>X</div>
            <div id='max' className='border-3 border-opacity-60 rounded-sm border-white cursor-pointer h-5 w-5 mr-3 mt-1.5 hover:border-opacity-75'></div>
            <div id='min' className='cursor-pointer text-white text-5xl mr-3 opacity-60 leading-centered hover:opacity-75'>-</div>
        </nav>
    )
}

export default TitleBar;
