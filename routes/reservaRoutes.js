const express = require("express");
const router = express.Router();
const reservaController = require("../controllers/reservaController");

// Realizar una reserva
router.post("/", reservaController.reservar);

// Cancelar una reserva
router.delete("/cancelar", reservaController.cancelar);

// Obtener reservas por usuario (email)
router.get("/:email", reservaController.reservasPorUsuario);

// Obtener todas las reservas
router.get("/", reservaController.obtenerTodas);

module.exports = router;
