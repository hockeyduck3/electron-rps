import React, { useEffect } from 'react';

import './style.css';
import 'animate.css';

function MainMenu() {
    useEffect(() => {
        setTimeout(() => {
            const btnGroup = document.getElementById('btnGroup');

            btnGroup.classList.remove('animate__bounceIn', 'animate__delay-3s');
        }, 4000);
    }, []);

    function click() {
        const menu = document.getElementById('menu');

        menu.classList.add('animate__animated', 'animate__zoomOut');

        menu.addEventListener('animationend', () => {
            window.location.hash = '/game';
        });
    }

    return (
        <div id='menu'>
            <div id='titleGroup' className='animate__animated animate__bounceIn animate__delay-3s grid grid-rows-1 grid-flow-row grid-cols-3 mt-14'>
                <h1 id='rock' className=' text-gray-300 text-7xl mt-2'>Rock</h1>
                <h1 id='paper' className='text-white text-7xl text-center mt-2'>Paper</h1>
                <h1 id='scissors' className='text-red-600 text-6xl text-center mt-2'>Scissors</h1>
            </div>

            <div className='grid grid-rows-1 grid-flow-row grid-cols-3 mt-14 gap-10'>
                <img src='../../img/rock.png' alt='Rock' className='animate__animated animate__bounceInDown mx-auto w-10/12'/>
                <img src='../../img/paper.png' alt='Paper' className='animate__animated animate__bounceInDown animate__delay-1s mx-auto w-8/12'/>
                <img src='../../img/scissors.png' alt='Scissors' className='animate__animated animate__bounceInDown animate__delay-2s mx-auto w-8/12 align-top'/>
            </div>

            <div id='btnGroup' className='animate__animated animate__bounceIn animate__delay-3s mx-auto mt-16'>
                <p sid='playBtn' className=' text-white text-6xl text-center mt-2' onClick={click}>Play</p>
            </div>
        </div>
    )
}

export default MainMenu;
