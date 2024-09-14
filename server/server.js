const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const authRoutes = require('./auth');
const gameLogic = require('./gameLogic');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect('mongodb://localhost:27017/skeletonRoguelite', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/auth', authRoutes);
app.use(express.static('client'));

io.on('connection', (socket) => {
  console.log('A user connected');
  // Handle multiplayer events here
  gameLogic.initPlayer(socket);
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
