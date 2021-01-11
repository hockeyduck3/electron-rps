import React from 'react';

import 'animate.css';

function Game() {
    const playerChoice = window.location.hash.replace('#/game/', '');

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

    return (
        <p>Hello World</p>
    )
}

export default Game;
