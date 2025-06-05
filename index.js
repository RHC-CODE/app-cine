const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes");
const funcionRoutes = require("./routes/funcionRoutes");
const reservaRoutes = require("./routes/reservaRoutes");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Rutas
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/funciones", funcionRoutes);
app.use("/api/reservas", reservaRoutes);

// Ruta raíz
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
