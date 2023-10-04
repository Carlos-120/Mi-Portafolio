// No es necesario declarar __filename de nuevo, ya está disponible en Node.js

const express = require("express");
const { fileURLToPath } = require("url");
const path = require("path");

// Usar directamente __filename y __dirname

const app = express();
const port = process.env.PORT || 3000;

// Resto de tu código...

// Configurar el middleware para servir archivos estáticos desde la carpeta 'build'
app.use(express.static(path.join(__dirname, "build")));

// Configurar una ruta de manejo para todas las demás solicitudes
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
