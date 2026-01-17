const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/members", async (req, res) => {
  const [members] = await connection.query("SELECT * FROM users");
  res.send({ members });
});

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

startServer();
