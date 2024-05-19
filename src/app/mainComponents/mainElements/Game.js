import React, { useState, useEffect } from 'react';
import Board from '../boardElements/board';

function Game({ setScreen }) {
    const [time, setTime] = useState(0);
    const [isGameOver, setIsGameOver] = useState(false);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };


  
    return (
        <div className='flex flex-col text-center' >
            <h1>Tetris</h1>
            <p className='text-white'>{formatTime(time)}</p>
            <div className='mx-auto'>
                <Board/>
                <button onClick={() => setScreen("gameover")}
                    className='bg-white text-gray-500 p-3 px-5 rounded-lg my-2'>
                    Back to Main Menu
                </button>
            </div>
        </div>
    );
}

export default Game;
