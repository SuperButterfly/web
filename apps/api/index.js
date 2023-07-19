// const express = require('express');
// const SocketIO = require("./src/node/socket.io.js")

const app = require('./app.js')
const axios = require("axios");
const {
  startWebSocketServer
} = require('../../node_modules/y-websocket/bin/server.js')
const { db, User, Workspace, Template } = require('./database.js')

const connectMongodb = require('./database2.js')

const port = 4000
//  const port = 3010

db.sync({
  /*
    PARA "DROPEAR" RAPIDO LA DB
    se comenta el force false, se descomenta el force true y se guarda
    NO OLVIDAR deshacer y guardar
  */
  force: false
  // force: true
})
  .then(() => {
    console.log('Connection to postgresql has been established successfully.')
  })
  .catch((error) => {
    console.error('Unable to connect to postgresql database:', error)
  })

connectMongodb()
  .then((result) => {
    if (result === 'ok') {
      console.log('Connection to mongodb has been established successfully.')
    } else console.error('Unable to connect to mongodb database:', result)
  })
  .catch((error) => {
    console.error('Unable to connect to mongodb database:', error)
  })

const server = app.listen(port, () => {
  console.log(`Server is up on ${port}`)
  // startWebSocketServer();
})

// websocket
// const io = SocketIO(server)
// io.on("connection", (socket) => {
//   console.log("New user connected");

//   socket.emit("newMessage", generateMessage("Admin", "Welcome to the chat app"));

//   socket.broadcast.emit(
//     "newMessage",
//     generateMessage("Admin", "New user joined")
//   );

//   socket.on("createMessage", (message, callback) => {
//     console.log("createMessage", message);
//     io.emit("newMessage", generateMessage(message.from, message.text));
//     callback("This is from the server.");
//   });

//   socket.on("disconnect", () => {
//     console.log("User was disconnected");
//   });
// });


// Autenticación con tu clave de API
const startonApi = axios.create({
  baseURL: "https://api.starton.com",
  headers: {
    "x-api-key": "Tsk_live_da2af5c6-26e2-44fa-97d7-730361b75b80",
  },
});