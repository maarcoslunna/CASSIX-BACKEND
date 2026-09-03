const mongoose = require('mongoose');

const prendaSchema = new mongoose.Schema({
  nombre: String,
  categoria: String,
  precio: Number,
  tallas: [String],
  stock: Number,
  descripcion: String,
  imagenUrl: String
});

module.exports = mongoose.model('Prenda', prendaSchema);