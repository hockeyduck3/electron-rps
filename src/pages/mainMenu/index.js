import React from 'react';

import 'animate.css';

function MainMenu() {
    return (
        <div className='grid grid-rows-1 grid-flow-row grid-cols-3 mt-32 gap-10'>
            <img src='../../img/rock.png' alt='Rock' className='animate__animated animate__bounceInDown mx-auto w-10/12'/>
            <img src='../../img/paper.png' alt='Paper' className='animate__animated animate__bounceInDown animate__delay-1s mx-auto w-8/12'/>
            <img src='../../img/scissors.png' alt='Scissors' className='animate__animated animate__bounceInDown animate__delay-2s mx-auto w-8/12 align-top'/>
        </div>
    )
}

export default MainMenu;
