import React, { useEffect } from 'react';

import './style.css';
import 'animate.css';

function Game() {
    const playerChoice = window.location.hash.replace('#/game/', '');

    let playing = false;

    useEffect(() => {
        document.getElementById('ready').addEventListener('animationend', () => {
            if (!playing) {
                // eslint-disable-next-line 
                playing = true;
                startCountdown();
            }
        });
    }, []);

    function startCountdown() {
        const compArr = ['R', 'P', 'S'];

        const compChoice = compArr[Math.floor(Math.random() * 3)];

        const ready = document.getElementById('ready');

        const rightFist = document.getElementById('rightFist');
        const leftFist = document.getElementById('leftFist');

        ready.classList.remove('animate__delay-4s');

        
        setTimeout(() => {
            let num = 3;

            ready.innerText = num;

            ready.classList.replace('animate__zoomIn', 'animate__jackInTheBox');
            rightFist.classList.add('animate__animated', 'animate__heartBeat', 'animate__repeat-3');
            leftFist.classList.add('animate__animated', 'animate__heartBeat', 'animate__repeat-3');

            const testNum = setInterval(() => {
                num = num - 1;

                if (num === 0) {
                    ready.innerText = 'GO!';
                    clearInterval(testNum);
                    gameLogic(playerChoice, compChoice);

                    rightFist.classList.remove('animate__repeat-3');
                    leftFist.classList.remove('animate__repeat-3');
                    
                    rightFist.classList.replace('animate__heartBeat', 'animate__bounceIn');
                    leftFist.classList.replace('animate__heartBeat', 'animate__bounceIn');
                }

                else {
                    ready.innerText = num;
                }
            }, 1350);
        }, 1000);
    }

    function gameLogic(userChoice, compChoice) {
        const ready = document.getElementById('ready');

        let userPic;
        let compPic;

        switch (userChoice) {
            case 'R':
                userPic = '../../img/rock.png';
                break;
            
            case 'P':
                userPic = '../../img/paper.png';
                break;

            default:
                userPic = '../../img/scissors.png';
        }

        switch (compChoice) {
            case 'R':
                compPic = '../../img/rock.png';
                break;
            
            case 'P':
                compPic = '../../img/paper.png';
                break;

            default:
                compPic = '../../img/scissors.png';
        }

        document.getElementById('rightFist').src = userPic;
        document.getElementById('leftFist').src = compPic;

        setTimeout(() => {
            ready.classList.replace('animate__jackInTheBox', 'animate__zoomOut');

            setTimeout(() => {
                results(userChoice, compChoice);
            }, 1000);
        }, 600);
    }

    function results(userRes, compRes) {    
        const ready = document.getElementById('ready');

        const user = document.getElementById('you');
        const comp = document.getElementById('compTitle');

        const btns = document.getElementById('endBtns');

        let resMessage;

        if (userRes === compRes) {
            resMessage = 'You Tied. 😕';
        }

        // eslint-disable-next-line
        else if (userRes === 'R' && compRes === 'S' || userRes === 'P' && compRes === 'R' || userRes === 'S' && compRes === 'P') {
            resMessage = 'You Won! 😁';
            user.innerText = '👑';
            comp.innerText = '😢';

            user.classList.remove('animate__delay-3s');
            comp.classList.remove('animate__delay-3s');

            user.classList.replace('animate__fadeOut', 'animate__fadeIn');
            comp.classList.replace('animate__fadeOut', 'animate__fadeIn');
        }

        else {
            resMessage = 'You Lost 😭';
            comp.innerText = '👑';
            user.innerText = '😢';

            user.classList.remove('animate__delay-3s');
            comp.classList.remove('animate__delay-3s');

            user.classList.replace('animate__fadeOut', 'animate__fadeIn');
            comp.classList.replace('animate__fadeOut', 'animate__fadeIn');
        }

        ready.innerText = resMessage;

        ready.classList.replace('animate__zoomOut', 'animate__zoomIn');

        setTimeout(() => {
            btns.classList.replace('hidden', 'flex');
            btns.classList.add('animate__zoomIn');
        }, 1000);
    }

    function back() {
        window.location.hash = '/selection';
    }

    return (
        <div id='game'>
            <h1 id='ready' className='animate__animated animate__zoomIn animate__delay-4s text-white text-8xl text-center mt-11 mb-11'>Ready!</h1>

            <div id='gameGrid' className='grid grid-rows-1 grid-flow-row grid-cols-3'>
                <div id='user' className='animate__animated animate__fadeInLeft'>
                    <h1 id='you' className='animate__animated animate__fadeOut animate__delay-3s text-white text-7xl text-center ml-8 mb-5'>You</h1>
                    <img onClick={back} id='rightFist' src='../../img/fist-right.png' alt='Right handed fist' className='ml-6 w-11/12' draggable='false' />
                </div>

                <p id='vs' className='animate__animated animate__fadeIn animate__delay-1s self-center text-white text-9xl text-center mt-28'>VS</p>

                <div id='computer' className='animate__animated animate__fadeInRight'>
                    <h1 id='compTitle' className='animate__animated animate__fadeOut animate__delay-3s text-white text-7xl text-center mr-10 mb-5'>Computer</h1>
                    <img id='leftFist' src='../../img/fist-left.png' alt='Left handed fist' className=' w-11/12' draggable='false' />
                </div>
            </div>

            <div id='endBtns' className='animate__animated w-full hidden flex-row justify-center mt-7'>
                <p id='againBtn' className=' text-white text-3xl text-center mr-5 pt-1' onClick={back}>Play Again?</p>
                <p id='menuBtn' className=' text-white text-3xl text-center pt-1' onClick={back}>Main Menu</p>
            </div>
        </div>
    )
}

export default Game;
