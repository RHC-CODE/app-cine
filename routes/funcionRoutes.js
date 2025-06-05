const express = require("express");
const router = express.Router();
const funcionController = require("../controllers/funcionController");

// Obtener todas las funciones (cartelera)
router.get("/", funcionController.obtenerCartelera);

// Crear una función nueva
router.post("/", funcionController.crearFuncion);

module.exports = router;
