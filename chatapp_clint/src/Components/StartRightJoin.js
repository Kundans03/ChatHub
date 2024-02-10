import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function StartRightJoin(props) {
  
  var navigate = useNavigate();
  const [name, setname] = useState("")
  const [alert, setalert] = useState("")
  const onChange = (e)=>{
    setname(e.target.value)
  } 
const onSubmit = (e)=>{
  e.preventDefault();
if(name.length<3){
    setalert("Name can't be empty")
    setTimeout(() => {
      setalert("")
    }, 4000);
}else{
  localStorage.setItem("name",name)
  navigate("/chat")
}
}


  return (
    <div onSubmit={onSubmit} className='h-full w-1/3 bg-[#0E393A] flex flex-col justify-center '>
      <h2 className='font-Roboto font-bold text-xl text-center mb-1 text-white'>Join a Room</h2>
      <h3 className='text-center font-Roboto text-red-700 my-2'>{alert}</h3>
      <form  className='w-full h-auto px-20 flex flex-col gap-3 items-center'>
        <input onChange={onChange} value={name} placeholder='Enter Your Name' className='h-14 w-full rounded-md p-3 text-xl font-Roboto outline-none' />
        {/* <input placeholder='Enter Room ID' className='h-14 w-full rounded-md p-3 text-xl font-Roboto outline-none' /> */}
        <button type='submit' className='bg-orange-500 h-14 w-1/3 rounded-md text-white text-xl font-semibold hover:bg-red-600 '>Let's Join</button>
      </form>
      {/* <a href='#' className='font-Roboto font-semibold text-right px-10 mt-6 text-red-500'>Create a room!</a> */}
  </div>
  )
}

export default StartRightJoin