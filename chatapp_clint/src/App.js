import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Start from "./Components/Start"
import ChatRoom from './Components/ChatRoom';

function App(props) {


  return (
    // <NoteState>
      <Router>
        <Routes>
          <Route path='/' element={<Start  />} />
          <Route path='/chat' element={<ChatRoom  socket={props.socket}/>}/>
        </Routes>
      </Router>
    // </NoteState>
  );
}

export default App;


// <div>
// <form  >
// <h1 className='text-center'>Chat App</h1>
// <input onChange={(e)=>{setmassage(e.target.value)}} placeholder='Enter Your massage here' type='text' />
// <button className='h-10 w-10 bg-blue-900' onClick={onClick} type='submit' />
// </form>
// {incomeing.map((element)=>{
//   return (<h1>{element.massage}</h1>)
// })}
   

// </div>