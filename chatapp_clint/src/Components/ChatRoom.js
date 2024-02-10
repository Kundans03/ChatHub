import React, {  useEffect,  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import keyboard  from '../sounds/keyboard.mp3';
import inmessage from '../sounds/message.mp3';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function ChatRoom(props) {

  const [alert, setalert] = useState("")
  const [message, setmessage] = useState("")
  const [recive, setrecive] = useState([])
  const navigate = useNavigate();
  const [style] = useState({alignItems:"end"})
  const [sendcolor] = useState({backgroundColor:"white"})
  const name = localStorage.getItem("name");
  console.log(name);
  const [placeholder, setplaceholder] = useState('')


 useEffect(() => {
  if(!name){
    navigate("/");
  }
 }, [])


props.socket.on("connect");
  
useEffect(() => {
props.socket.emit("user-joined",name ,()=>{
  setalert(`$(name) joined the chat`);
});

}, [])


props.socket.on("newuser", joined=>{
  let a = {"message":joined};
    setrecive((preRecive)=>[...preRecive,a]);
  console.log(joined)
});

useEffect(() => {
  props.socket.on("recive",data=>{
    let a = {"message":data.Smessage,"name":data.name};
    setrecive((preRecive)=>[...preRecive,a]);
    console.log(recive.length)
  })
}, [])




props.socket.on('disconnect', () => {
  props.socket.off();
console.log('Client disconnected');
});



const onSubmit = (e)=>{
  e.preventDefault();
  if(message.length<1){
    setplaceholder("message can't be blank");
    setTimeout(() => {
    setplaceholder('')
      
    }, 4000)
  }else{
    props.socket.emit("send",message);
  let a = {"message":message,"name":"You",alignItems:style,sendcolor:sendcolor};
  setrecive((preRecive)=>[...preRecive,a]);
  setmessage("")
  }
}

const onleave = ()=>{
  navigate("/")
  localStorage.removeItem("name")
}

  return (
    <div className='bg-[#EDEAF1]  w-screen h-screen overflow-hidden '>
        <nav className='flex justify-between p-3 font-Roboto font-semibold text-black opacity-70 hover:opacity-100'>
            <h3>ChatHub</h3>
            <a onClick={onleave}>Leave Room</a>
            </nav>
            <h2 className='text-center text-md text-red-600'>{alert}</h2>
        <div className='h-4/5 w-full flex flex-col overflow-auto bg-[#EDEAF1] px-3  md:px-5 md:pt-10 lg:pt-10  lg:px-20'>
            
            { recive.length ===0? <h1 className='text-center text-2xl font-bold font-Roboto'>No Message Yet!</h1>:
              recive.map((element)=>{return  <div style={element.alignItems} key={element.index}  className='flex flex-col max-sm my-2'>
              <p className='text-md ml-3 opacity-75'>{element.name}</p>
      
              <div style={element.sendcolor} className='h-auto w-fit max-w-3xl p-3 px-5 rounded-t-lg rounded-r-xl   bg-[#F1907A]   overflow-auto flex flex-col'>{element.message}</div>
              {/* <p className='text-xs opacity-75'>12:02 pm</p> */}
              </div>})
            }
            
        </div>
        
        <form onSubmit={onSubmit} className='font-Roboto  flex justify-center  items-center md:px-10 lg:px-10 lg:pb-14 md:pb-14 bg-white md:h-40  pb-2 h-24 w-full rounded-md'>
          <textarea id='message' name='message' rows={3} value={message} onChange={(e)=>{setmessage(e.target.value)}} placeholder={placeholder? placeholder : "Enter Your message"} className='py-4 h-full w-full p-3 mr-1 bg-transparent rounded-md outline-none text-xl overflow-y-scroll scrollbar-hide'/>
          <button type='submit'  className='bg-orange-500 h-14 w-40 rounded-md mr-2 text-white text-xl font-semibold hover:bg-red-600'>Send</button>
          </form>

    </div>
  )
}

export default ChatRoom