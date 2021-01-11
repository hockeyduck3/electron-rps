import React from 'react';

import './style.css';
import 'animate.css';

function Selection() {
    function back() {
        const game = document.getElementById('game');

        game.classList.replace('animate__zoomIn', 'animate__zoomOut');

        game.addEventListener('animationend', () => {
            window.location.hash = '/';
        });
    }

    function select(token) {
        const playerChoice = token;

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

        console.log(`Player: ${playerChoice}, Computer: ${compChoice}. ${testGameMessage}`);
    }

    return (
        <div id='game' className='animate__animated animate__zoomIn'>
            <p id='backBtn' className='animate__animated cursor-pointer text-white text-2xl text-center mt-5 ml-4' onClick={back}>Main Menu</p>
            
            <div id='chooseWeapon' className='animate__animated'>
                <h1 className='text-white text-7xl text-center mt-14'>
                    <span id='choose' className='animate__animated text-gray-100'>Choose</span>
                    <span id='your' className='animate__animated ml-7 mr-7 text-7xl'>Your</span> 
                    <span id='weapon' className='animate__animated text-red-600'>Weapon</span>
                </h1>

                <div className='grid grid-rows-1 grid-flow-row grid-cols-3 mt-20 gap-10'>
                    <img id='rockBtn' src='../../img/rock.png' alt='Rock' className='rockBtn cursor-pointer rounded-lg pt-15 pr-10 mx-auto w-10/12' draggable='false' onClick={(e) => { e.preventDefault(); select('R') }}/>

                    <img id='paperBtn' src='../../img/paper.png' alt='Paper' className='paperBtn cursor-pointer rounded-lg pt-25 pr-15 pb-20 pl-25 mx-auto w-9/12' draggable='false' onClick={(e) => { e.preventDefault(); select('P') }}/>

                    <img id='scissorsBtn' src='../../img/scissors.png' alt='Scissors' className='scissorsBtn cursor-pointer rounded-lg p-10 mx-auto w-9/12 align-top' draggable='false' onClick={(e) => { e.preventDefault(); select('S') }}/>
                </div>
            </div>
        </div>
    )
}

export default Selection;
