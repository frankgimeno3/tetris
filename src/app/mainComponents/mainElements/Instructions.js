import React from 'react'

function Instructions({setScreen}) {
  return (
    <div className='flex flex-col text-center '>
    <h1>Instructions</h1>
    <div className='w-36 h-36 mx-auto'>
        <div className='flex flex-col'>
            <p>Click arrow down to send the piece down</p>
            <p>Press space to flip the piece</p>
            <p>Fill a full row to delete a line</p>
            <p>You will earn points for every row deleted</p>
            <p>If pieces arrive to the top, you lost!</p>
        </div>
        <button onClick={()=>setScreen("mainmenu")}
                className='bg-white text-gray-500 p-3 px-5 rounded-lg my-2'>
            Back to Main Menu
        </button>
    </div>
</div>  )
}

export default Instructions