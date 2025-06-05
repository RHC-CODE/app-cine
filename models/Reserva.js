class Reserva {
  constructor(email, funcionId, butacas) {
    this.email = email;
    this.funcionId = funcionId;
    this.butacas = butacas; // array de números o identificadores de butacas
  }
}

module.exports = Reserva;
