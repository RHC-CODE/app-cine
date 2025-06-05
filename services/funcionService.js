const { leerJSON, escribirJSON } = require("../utils/fileManager");
const ruta = "models/funciones.json";

const obtenerTodas = () => leerJSON(ruta);

const crear = (funcion) => {
  const funciones = leerJSON(ruta);
  if (funciones.find(f => f.id === funcion.id)) {
    return { error: "Ya existe una función con ese ID" };
  }
  funcion.ocupadas = [];
  funciones.push(funcion);
  escribirJSON(ruta, funciones);
  return { mensaje: "Función agregada" };
};

module.exports = { obtenerTodas, crear };
