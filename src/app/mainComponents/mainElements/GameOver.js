import React from 'react'

function GameOver({ setScreen }) {
    return (
        <div className='flex flex-col text-center'>
        <h1>GameOver</h1>
        <div className='w-36 h-36 mx-auto'>
                <div className='flex flex-row'>
                    <h2>Points: </h2>
                    <p>12312</p>
                </div>
                <div className='flex flex-row'>
                    <h2>Time: </h2>
                    <p>12:24</p>
                </div>
                <button onClick={() => setScreen("mainmenu")}
                    className='bg-white text-gray-500 p-3 px-5 rounded-lg  my-2'>
                    Back to Main Menu
                </button>
            </div>
        </div>
    )
}

export default GameOver