import { redirect } from "@netlify/redirector";

module.exports = redirect([
  { from: "/aboutme", to: "/home", status: 200 },
  { from: "/myskills", to: "/home", status: 200 },
  // Agrega más reglas de redirección según tus rutas necesarias
]);
