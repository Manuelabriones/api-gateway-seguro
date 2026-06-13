const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();

app.disable("x-powered-by");

app.use(helmet());

const allowedOrigins = [
  "http://localhost:3000"
];

app.use(
  cors({
    origin: allowedOrigins
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "API Gateway Seguro funcionando"
  });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en puerto 3000");
});