const funcionService = require("../services/funcionService");

const obtenerCartelera = (_, res) => {
  const cartelera = funcionService.obtenerTodas();
  res.json(cartelera);
};

const crearFuncion = (req, res) => {
  const nuevaFuncion = req.body;
  const resultado = funcionService.crear(nuevaFuncion);
  if (resultado.error) return res.status(400).json({ error: resultado.error });
  res.status(201).json({ mensaje: "Función agregada" });
};

module.exports = {
  obtenerCartelera,
  crearFuncion,
};
