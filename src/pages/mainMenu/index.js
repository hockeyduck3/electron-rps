import React, { useEffect } from 'react';

import './style.css';
import 'animate.css';

function MainMenu() {
    useEffect(() => {
        let loaded = sessionStorage.getItem('loaded');

        if (loaded === null) {
            sessionStorage.setItem('loaded', true);

            setTimeout(() => {
                const btnGroup = document.getElementById('btnGroup');
    
                btnGroup.classList.remove('animate__bounceIn', 'animate__delay-3s');
            }, 4000);
        } 
        
        else {
            const rock =  document.getElementById('rock');
            const paper =  document.getElementById('paper');
            const scissors =  document.getElementById('scissors');

            const rockImg =  document.getElementById('rockImg');
            const paperImg =  document.getElementById('paperImg');
            const scissorsImg =  document.getElementById('scissorsImg');

            const btnGroup =  document.getElementById('btnGroup');
            
            const menu = document.getElementById('menu');

            rock.classList.remove('animate__animated', 'animate__bounceIn', 'animate__delay-3s');
            paper.classList.remove('animate__animated', 'animate__bounceIn', 'animate__delay-3s');
            scissors.classList.remove('animate__animated', 'animate__bounceIn', 'animate__delay-3s');

            rockImg.classList.remove('animate__animated', 'animate__bounceInDown');
            paperImg.classList.remove('animate__animated', 'animate__bounceInDown', 'animate__delay-1s');
            scissorsImg.classList.remove('animate__animated', 'animate__bounceInDown', 'animate__delay-2s');

            btnGroup.classList.remove('animate__animated', 'animate__bounceIn', 'animate__delay-3s');

            menu.classList.add('animate__animated', 'animate__zoomIn');
        }
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
            <div className='grid grid-rows-1 grid-flow-row grid-cols-3 mt-14 gap-10'>
                <div>
                    <h1 id='rock' className='animate__animated animate__bounceIn animate__delay-3s text-gray-300 text-6xl text-center mt-2 mb-12'>Rock</h1>
                    <img id='rockImg' src='../../img/rock.png' alt='Rock' className='animate__animated animate__bounceInDown mx-auto w-10/12' draggable='false'/>
                </div>

                <div>
                    <h1 id='paper' className='animate__animated animate__bounceIn animate__delay-3s text-white text-6xl text-center mt-2 mb-14'>Paper</h1>
                    <img id='paperImg' src='../../img/paper.png' alt='Paper' className='animate__animated animate__bounceInDown animate__delay-1s mx-auto w-8/12' draggable='false'/>
                </div>

                <div>
                    <h1 id='scissors' className='animate__animated animate__bounceIn animate__delay-3s text-red-600 text-5xl text-center mt-2 mb-16'>Scissors</h1>
                    <img id='scissorsImg' src='../../img/scissors.png' alt='Scissors' className='animate__animated animate__bounceInDown animate__delay-2s mx-auto w-8/12 align-top' draggable='false'/>
                </div>
            </div>

            <div id='btnGroup' className='animate__animated animate__bounceIn animate__delay-3s mx-auto mt-16'>
                <p sid='playBtn' className=' text-white text-6xl text-center mt-2' onClick={click}>Play</p>
            </div>
        </div>
    )
}

export default MainMenu;
