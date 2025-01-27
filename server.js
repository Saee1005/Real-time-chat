// filepath: /c:/Users/manda/OneDrive/Desktop/real-time-chat/server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('send-message', (message) => {
        io.emit('receive-message', message);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});