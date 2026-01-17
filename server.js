const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const PORT = 8001;

async function startServer() {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "azerty237",
      database: "githut",
      port: 3306,
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
      res.json({ message: "ok" });
    });

    app.get("/members", async (req, res) => {
      const [members] = await connection.query("SELECT * FROM users");
      res.send({ members });
    });

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Database connection error:", err);
  }
}

startServer();
