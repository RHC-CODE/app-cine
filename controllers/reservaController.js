const reservaService = require("../services/reservaService");

const reservar = (req, res) => {
  const { email, funcionId, butacas } = req.body;
  const resultado = reservaService.reservar(email, funcionId, butacas);
  if (resultado.error) return res.status(400).json({ error: resultado.error });
  res.json({ mensaje: "Reserva realizada" });
};

const cancelar = (req, res) => {
  const { email, funcionId, butacas } = req.body;
  const resultado = reservaService.cancelar(email, funcionId, butacas);
  if (resultado.error) return res.status(400).json({ error: resultado.error });
  res.json({ mensaje: "Reserva cancelada" });
};

const reservasPorUsuario = (req, res) => {
  const { email } = req.params;
  const resultado = reservaService.obtenerPorUsuario(email);
  res.json(resultado);
};

const obtenerTodas = (_, res) => {
  const resultado = reservaService.obtenerTodas();
  res.json(resultado);
};

module.exports = {
  reservar,
  cancelar,
  reservasPorUsuario,
  obtenerTodas,
};
