const fs = require("fs");

const leerJSON = (ruta) => {
  try {
    const data = fs.readFileSync(ruta, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // Si no existe o hay error, devuelve arreglo vacío para evitar fallos
    return [];
  }
};

const escribirJSON = (ruta, contenido) => {
  try {
    fs.writeFileSync(ruta, JSON.stringify(contenido, null, 2), "utf-8");
  } catch (error) {
    console.error("Error escribiendo archivo:", error);
  }
};

const leerDatos = (archivo) => {
    const data = fs.readFileSync(`./models/${archivo}`, 'utf-8');
    return JSON.parse(data);
};

module.exports = {
  leerJSON,
  escribirJSON,
  leerDatos,
};
