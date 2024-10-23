const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mysql = require('mysql2');
const cors = require('cors'); // Importar cors
const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
      origin: 'http://localhost:4200', // Permitir solo tu aplicación Angular
      methods: ['GET', 'POST'],
      allowedHeaders: ['Content-Type']
    }
  });
  
  // Middleware para CORS
  app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
  }));

// Configura la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coaster88',
  database: 'spore_back'
});

// Conectar a la base de datos
connection.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos MySQL');
});

// Escuchar cambios en la base de datos
setInterval(() => {
  connection.query('SELECT vehicle_user_id as id, vehicle_lat as lat, vehicle_lng as lng FROM vehicles', (err, results) => {
    if (err) {
      console.error('Error al realizar la consulta:', err);
      return;
    }
    // Emitir los resultados a todos los clientes conectados
    console.log(results)
    io.emit('dataUpdate', results);
  });
}, 3000); // Cambiar a 3 segundos, ajustar según tus necesidades

// Evento de conexión
io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado:', socket.id);

  // Manejar desconexión
  socket.on('disconnect', () => {
    console.log('Cliente desconectado:', socket.id);
  });
});

// Levantar el servidor en el puerto 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
