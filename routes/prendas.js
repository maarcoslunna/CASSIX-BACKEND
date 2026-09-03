const express = require('express');
const router = express.Router();
const Prenda = require('../models/prenda');

router.get('/', async (req, res) => {
  try {
    const prendas = await Prenda.find();
    res.json(prendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/crear-test', async (req, res) => {
  try {
    const nuevaPrenda = new Prenda({
      nombre: "Camiseta Oversize CasSix",
      categoria: "Camisetas",
      precio: 29.99,
      tallas: ["S", "M", "L", "XL"],
      stock: 50,
      descripcion: "Camiseta de algodón pesado corte oversize",
      imagenUrl: "https://ejemplo.com/camiseta.jpg"
    });
    await nuevaPrenda.save();
    res.json({ mensaje: "¡Prenda de prueba creada con éxito!", prenda: nuevaPrenda });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const prenda = await Prenda.findById(req.params.id);
    if (!prenda) return res.status(404).json({ error: "Prenda no encontrada" });
    res.json(prenda);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar la prenda" });
  }
});

router.post('/', async (req, res) => {
  try {
    const nuevaPrenda = new Prenda(req.body);
    const prendaGuardada = await nuevaPrenda.save();
    res.status(201).json({ mensaje: "¡Prenda creada con éxito!", prenda: prendaGuardada });
  } catch (error) {
    res.status(400).json({ error: "Error al crear la prenda: " + error.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const prendaActualizada = await Prenda.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!prendaActualizada) return res.status(404).json({ error: "Prenda no encontrada" });
    res.json({ mensaje: "¡Prenda actualizada con éxito!", prenda: prendaActualizada });
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la prenda: " + error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const prendaEliminada = await Prenda.findByIdAndDelete(req.params.id);
    if (!prendaEliminada) return res.status(404).json({ error: "Prenda no encontrada" });
    res.json({ mensaje: "¡Prenda eliminada con éxito!", prenda: prendaEliminada });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la prenda" });
  }
});

module.exports = router;