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
        </div>
    )
}

export default Game;
