const express = require('express');
const socket = require('socket.io');

const app = express();

let tasks = [];

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port 8000');
});

const io = socket(server);

io.on('connection', (socket) => {
  console.log('A new client added ' + socket.id);
  socket.emit('updateData', tasks);

  socket.on('addTask', (task) => {
    console.log('New task added', task);
    tasks.push(task);
    socket.broadcast.emit('addTask', task);
  });

  socket.on('removeTask', (id) => {
    console.log('Task with id ' + id + ' removed');
    tasks = tasks.filter(function (el) {
      if (el.id !== id) {
        return el;
      }
    });
    socket.broadcast.emit('removeTask', id);
  });
});

app.use((req, res) => {
  res.status(404).send({ message: 'Page not found...' });
});