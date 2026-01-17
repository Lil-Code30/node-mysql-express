const getConnection = require("../config/db");

// GET ALL
exports.getMembers = async (req, res) => {
  try {
    const connection = await getConnection();
    const [members] = await connection.query("SELECT * FROM users");

    res.json({ members });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// CREATE (POST)
exports.createMember = async (req, res) => {
  try {
    const { name, email } = req.body;
    const connection = await getConnection();

    await connection.query("INSERT INTO users (name, email) VALUES (?, ?)", [
      name,
      email,
    ]);

    res.status(201).json({ message: "User Added !" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// UPDATE (PUT)
exports.updateMember = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, email } = req.body;

    const connection = await getConnection();

    await connection.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id],
    );

    res.json({ message: "User updated !" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// DELETE
exports.deleteMember = async (req, res) => {
  try {
    const id = req.params.id;
    const connection = await getConnection();

    await connection.query("DELETE FROM users WHERE id = ?", [id]);

    res.json({ message: "User supprimé !" });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};
