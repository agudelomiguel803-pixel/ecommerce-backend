const authService = require("../services/auth.service");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const rows = await authService.login(username, password);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Credenciales incorrectas" });
    }

    const usuario = rows[0];
    res.json({ username: usuario.username, role: usuario.role });

  } catch (error) {
    res.status(500).json({ error: "Error del servidor" });
  }
};

module.exports = { login };