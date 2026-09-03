const express = require('express');
const mongoose = require('mongoose');
const prendasRoutes = require('./routes/prendas');

const app = express();
const PORT = 3000;

app.use(express.json());

// ESTA LÍNEA ES LA QUE CARGA LA WEB VISUAL:
app.use(express.static('public'));

// Conexión a MongoDB Atlas (NoSQL)
mongoose.connect('mongodb+srv://admin1:%40123456@cluster0.tia3wge.mongodb.net/cassix?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('¡Conectado a MongoDB Atlas con éxito!'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Enrutar las peticiones de la tienda
app.use('/api/prendas', prendasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor de CASSIX rodando en http://localhost:${PORT}`);
});