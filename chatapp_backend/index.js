const express = require("express");
const SocketIO = require("socket.io");
const http = require("http");
const cors = require("cors");


const port = 5000;
const app = express();
const server = http.createServer(app);
const io = SocketIO(server,{cors: {
    origin: "*"
  }});
let users = {};

app.use(cors());


io.on('connection',socket=>{
    console.log(socket.id);

    socket.on("user-joined",name =>{
        users[socket.id]= name  
        socket.broadcast.emit("newuser",`${name} joined the chat`)
    })


    socket.on("send", Smessage =>{
        socket.broadcast.emit("recive", {Smessage,name:users[socket.id]})
    })

    socket.emit("recive","i'm good")

    socket.on('disconnect',message=>{
        socket.broadcast.emit('left', users[socket.id])
        delete users[socket.id]
        console.log("user left",socket.id)
    })
})

console.log(users);



server.listen(port,()=>{
    console.log("Server is running on port:",port);
})

