class Funcion {
  constructor(id, pelicula, fechaHora, sala, precio) {
    this.id = id;
    this.pelicula = pelicula;
    this.fechaHora = fechaHora; // formato ISO string o Date
    this.sala = sala;
    this.precio = precio;
    this.ocupadas = []; // butacas ocupadas
  }
}

module.exports = Funcion;
