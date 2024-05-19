import React from 'react'

function MainMenu({setScreen}) {

  return (
    <div className='flex flex-col text-center'>
    <h1>Mainmenu</h1>
    <div className='w-36 h-36 mx-auto'>
        <div className='flex flex-row'>
            <h2>Points</h2>
            <p>12312</p>
        </div>
        <button onClick={()=>setScreen("game")}
        className='bg-white text-gray-500 p-3 px-5 rounded-lg my-2'>
            Start Game
        </button>
        <button onClick={()=>setScreen("instructions")}
        className='bg-white text-gray-500 p-3 px-5 rounded-lg my-2'>
            Instructions
        </button>
    </div>
</div>  )
}

export default MainMenu