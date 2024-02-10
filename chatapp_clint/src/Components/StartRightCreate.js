import React from 'react'

function StartRightCreate() {
  return (
    <div className='h-full w-1/3 bg-[#0E393A] flex flex-col justify-center '>
      <h2 className='font-Roboto font-bold text-xl text-center mb-5 text-white'>Create a Room</h2>
      <form className='w-full h-auto px-20 flex flex-col gap-3 items-center'>
        <input placeholder='Enter Your Name' className='h-14 w-full rounded-md p-3 text-xl font-Roboto outline-none' />
        <input placeholder='Enter Room Name' className='h-14 w-full rounded-md p-3 text-xl font-Roboto outline-none' />
        <button className='bg-orange-500 h-14 w-1/3 rounded-md text-white text-xl font-semibold '>Let's Create</button>
      </form>
      <a href='#' className='font-Roboto font-semibold text-right px-10 mt-6 text-red-500'>Join a room!</a>
  </div>
  )
}

export default StartRightCreate