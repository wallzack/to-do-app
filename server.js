const express = require('express');
const socket = require('socket.io');

const app = express();

const tasks = [];

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port 8000');
});

const io = socket(server);

io.on('connection', (socket) => {
  socket.emit('updateData', tasks);

  socket.on('addTask', (task) => {
    console.log('New task added ' + task);
    tasks.push(task);
    socket.broadcast.emit('addTask', task);
  });

  socket.on('removeTask', (taskIndex) => {
    console.log('Task with index ' + taskIndex + ' removed');
    tasks.splice(taskIndex, 1);
    socket.broadcast.emit('removeTask');
  });
});

app.use((req, res) => {
  res.status(404).send({ message: 'Page not found...' });
});