import React, { useEffect } from 'react';

import './style.css';
import 'animate.css';

function Game() {
    const playerChoice = window.location.hash.replace('#/game/', '');

    useEffect(() => {
        const comp = document.getElementById('compTitle');
    
        comp.addEventListener('animationend', () => {
            console.log('ready');
        });
    }, []);

    function gameLogic(player) {
        const compArr = ['R', 'P', 'S'];

        const compChoice = compArr[Math.floor(Math.random() * 3)];

        let testGameMessage;

        if (playerChoice === compChoice) {
            testGameMessage = 'You Tied with the Computer!';
        }

        // eslint-disable-next-line
        else if (playerChoice === 'R' && compChoice === 'S' || playerChoice === 'P' && compChoice === 'R' || playerChoice === 'S' && compChoice === 'P') {
            testGameMessage = 'You Win!';
        }

        else {
            testGameMessage = 'You lose...';
        }
    }

    function back() {
        window.location.hash = '/selection';
    }

    return (
        <div id='game'>
            <h1 id='ready' className='animate__animated animate__zoomIn animate__delay-4s text-white text-8xl text-center mt-11'>Ready</h1>

            <div id='gameGrid' className='grid grid-rows-1 grid-flow-row grid-cols-3'>
                <div id='user' className='animate__animated animate__fadeInLeft'>
                    <h1 id='you' className='animate__animated animate__fadeOut animate__delay-3s text-white text-7xl text-center ml-8 mb-5'>You</h1>
                    <img onClick={back} src='../../img/fist-right.png' alt='Right handed fist' className='ml-6 w-11/12' draggable='false' />
                </div>

                <p id='vs' className='animate__animated animate__fadeIn animate__delay-1s self-center text-white text-9xl text-center mt-28'>VS</p>

                <div id='computer' className='animate__animated animate__fadeInRight animate__delay-2s'>
                    <h1 id='compTitle' className='animate__animated animate__fadeOut animate__delay-3s text-white text-7xl text-center mr-10 mb-5'>Computer</h1>
                    <img src='../../img/fist-left.png' alt='Left handed fist' className=' w-11/12' draggable='false' />
                </div>
            </div>
        </div>
    )
}

export default Game;
