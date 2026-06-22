require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const app = express();

app.disable("x-powered-by");

app.use(
  helmet({
    frameguard: {
      action: "deny"
    }
  })
);

const allowedOrigins = [
  "http://localhost:3000"
];

app.use(
  cors({
    origin: allowedOrigins
  })
);

// Hello World en terminal
console.log("Hello World");

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    message: "API Gateway Seguro funcionando"
  });
});

// Conexión MongoDB
if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB conectado"))
    .catch((err) => console.log("Error MongoDB:", err.message));
} else {
  console.log("MONGO_URI no configurada");
}

// JWT básico
const token = jwt.sign(
  { user: "admin" },
  process.env.JWT_SECRET || "secretkey",
  { expiresIn: "1h" }
);

console.log("JWT generado:", token);

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});