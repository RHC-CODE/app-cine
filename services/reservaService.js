const { leerJSON, escribirJSON } = require("../utils/fileManager");

const rutaFunciones = "models/funciones.json";
const rutaReservas = "models/reservas.json";

const reservar = (email, funcionId, butacas) => {
  const funciones = leerJSON(rutaFunciones);
  const funcion = funciones.find(f => f.id === funcionId);
  if (!funcion) return { error: "Función no encontrada" };

  const ocupadas = funcion.ocupadas || [];
  const conflicto = butacas.some(b => ocupadas.includes(b));
  if (conflicto) return { error: "Una o más butacas ya están ocupadas" };

  funcion.ocupadas = [...ocupadas, ...butacas];
  escribirJSON(rutaFunciones, funciones);

  const reservas = leerJSON(rutaReservas);
  reservas.push({ email, funcionId, butacas });
  escribirJSON(rutaReservas, reservas);

  return { mensaje: "Reserva realizada" };
};

const cancelar = (email, funcionId, butacas) => {
  const funciones = leerJSON(rutaFunciones);
  const funcion = funciones.find(f => f.id === funcionId);
  if (!funcion) return { error: "Función no encontrada" };

  funcion.ocupadas = funcion.ocupadas.filter(b => !butacas.includes(b));
  escribirJSON(rutaFunciones, funciones);

  let reservas = leerJSON(rutaReservas);
  reservas = reservas.filter(r => !(r.email === email && r.funcionId === funcionId && r.butacas.toString() === butacas.toString()));
  escribirJSON(rutaReservas, reservas);

  return { mensaje: "Reserva cancelada" };
};

const obtenerPorUsuario = (email) => {
  const reservas = leerJSON(rutaReservas);
  return reservas.filter(r => r.email === email);
};

const obtenerTodas = () => leerJSON(rutaReservas);

module.exports = {
  reservar,
  cancelar,
  obtenerPorUsuario,
  obtenerTodas
};
