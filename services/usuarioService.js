const { leerJSON, escribirJSON } = require("../utils/fileManager");
const ruta = "models/usuarios.json";

const registrar = (nombre, email) => {
  const usuarios = leerJSON(ruta);
  if (usuarios.find(u => u.email === email)) {
    return { error: "El usuario ya existe" };
  }
  usuarios.push({ nombre, email });
  escribirJSON(ruta, usuarios);
  return { mensaje: "Registrado" };
};

const obtenerPorEmail = (email) => {
  const usuarios = leerJSON(ruta);
  return usuarios.find(u => u.email === email);
};

const actualizar = (email, nuevosDatos) => {
  const usuarios = leerJSON(ruta);
  const index = usuarios.findIndex(u => u.email === email);
  if (index === -1) return { error: "Usuario no encontrado" };
  usuarios[index] = { ...usuarios[index], ...nuevosDatos };
  escribirJSON(ruta, usuarios);
  return { mensaje: "Actualizado" };
};

const eliminar = (email) => {
  const usuarios = leerJSON(ruta);
  const nuevos = usuarios.filter(u => u.email !== email);
  if (nuevos.length === usuarios.length) return { error: "Usuario no encontrado" };
  escribirJSON(ruta, nuevos);
  return { mensaje: "Eliminado" };
};
const { leerDatos } = require('../utils/fileManager');

const obtenerTodosUsuarios = async () => {
    return await leerDatos('usuarios.json');
};


module.exports = { registrar, obtenerPorEmail, actualizar, eliminar, obtenerTodosUsuarios };
