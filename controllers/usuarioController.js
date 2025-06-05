const usuarioService = require("../services/usuarioService");

const registrarUsuario = (req, res) => {
  const { nombre, email } = req.body;
  const resultado = usuarioService.registrar(nombre, email);
  if (resultado.error) return res.status(400).json({ error: resultado.error });
  res.status(201).json({ mensaje: "Usuario registrado" });
};

const obtenerUsuario = (req, res) => {
  const { email } = req.params;
  const usuario = usuarioService.obtenerPorEmail(email);
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(usuario);
};

const actualizarUsuario = (req, res) => {
  const { email } = req.params;
  const nuevosDatos = req.body;
  const actualizado = usuarioService.actualizar(email, nuevosDatos);
  if (actualizado.error) return res.status(404).json({ error: actualizado.error });
  res.json({ mensaje: "Usuario actualizado" });
};

const eliminarUsuario = (req, res) => {
  const { email } = req.params;
  const resultado = usuarioService.eliminar(email);
  if (resultado.error) return res.status(404).json({ error: resultado.error });
  res.json({ mensaje: "Usuario eliminado" });
};
const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.obtenerTodosUsuarios();
        res.status(200).json(usuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
  registrarUsuario,
  obtenerUsuario,
  actualizarUsuario,
  eliminarUsuario,
  listarUsuarios,
};
