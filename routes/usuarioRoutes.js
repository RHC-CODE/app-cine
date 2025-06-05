const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Registrar usuario
router.post("/", usuarioController.registrarUsuario);

// Obtener usuario por email
router.get("/:email", usuarioController.obtenerUsuario);

// Actualizar usuario por email
router.put("/:email", usuarioController.actualizarUsuario);

// Eliminar usuario por email
router.delete("/:email", usuarioController.eliminarUsuario);
// Obtener usuarios
router.get("/", usuarioController.listarUsuarios);

module.exports = router;
