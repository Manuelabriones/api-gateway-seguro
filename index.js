require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

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

app.get("/", (req, res) => {
  res.json({
    message: "API Gateway Seguro funcionando"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
}); 