const db = require("../config/db");

const login = async (username, password) => {
  const [rows] = await db.query(
    "SELECT * FROM usuarios WHERE username = ? AND password = ?",
    [username, password]
  );

  return rows;
};

module.exports = { login };