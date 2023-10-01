const express = require('express');
const app = express();
const port = 8050; // Port yang akan digunakan

const morgan = require('morgan'); // Import morgan untuk logging

// Middleware
app.use(express.json()); // Middleware untuk meng-handle JSON request
app.use(morgan('dev')); // Logging menggunakan morgan

// Data sementara
const users = [];

// Endpoint untuk mendapatkan semua data users
app.get('/users', (req, res) => {
  res.json(users);
});

// Endpoint untuk membuat user baru
app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoint untuk mengedit user berdasarkan ID
app.put('/users/:id', (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  users[id] = updatedUser;
  res.json(updatedUser);
});

// Endpoint untuk menghapus user berdasarkan ID
app.delete('/users/:id', (req, res) => {
  const id = req.params.id;
  const deletedUser = users.splice(id, 1);
  res.json(deletedUser);
});

// Jalankan server menggunakan Nodemon
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
