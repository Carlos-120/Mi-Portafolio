const { redirect } = require("@netlify/redirector");

module.exports = redirect([
  { from: "/aboutme", to: "/index.html", status: 200 },
  { from: "/myskills", to: "/index.html", status: 200 },
  // Agrega más reglas de redirección según tus rutas necesarias
]);
