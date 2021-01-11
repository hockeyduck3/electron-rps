import React from 'react';

import './style.css';
import 'animate.css';

function Game() {
    function back() {
        const game = document.getElementById('game');

        game.classList.replace('animate__zoomIn', 'animate__zoomOut');

        game.addEventListener('animationend', () => {
            window.location.hash = '/';
        });
    }

    return (
        <div id='game' className='animate__animated animate__zoomIn'>
            <p id='backBtn' className='cursor-pointer text-white text-2xl text-center mt-5 ml-4' onClick={back}>Main Menu</p>
            
            <div id='chooseWeapon'>
                <h1 className='text-white text-7xl text-center mt-11'>
                    <span id='choose' className='text-gray-100'>Choose</span>
                    <span id='your' className='ml-7 mr-7 text-7xl'>Your</span> 
                    <span id='weapon' className='text-red-600'>Weapon</span>
                </h1>

                <div className='grid grid-rows-1 grid-flow-row grid-cols-3 mt-20 gap-10'>
                    <img src='../../img/rock.png' alt='Rock' className='rockBtn cursor-pointer rounded-lg pt-15 pr-10 mx-auto w-10/12' draggable='false'/>

                    <img src='../../img/paper.png' alt='Paper' className='paperBtn cursor-pointer rounded-lg pt-25 pr-15 pb-20 pl-25 mx-auto w-9/12' draggable='false'/>

                    <img src='../../img/scissors.png' alt='Scissors' className='scissorsBtn cursor-pointer rounded-lg p-10 mx-auto w-9/12 align-top' draggable='false'/>
                </div>
            </div>
        </div>
    )
}

export default Game;
