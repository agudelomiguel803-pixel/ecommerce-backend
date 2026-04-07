const db = require("../config/db");

// GET
const obtenerProductos = async () => {
  const [productos] = await db.query("SELECT * FROM productos");
  return productos;
};

// POST
const crearProducto = async (data) => {
  const { nombre, precio, imagen, descripcion, categoria } = data;

  const [result] = await db.query(
    "INSERT INTO productos (nombre, precio, imagen, descripcion, categoria) VALUES (?, ?, ?, ?, ?)",
    [nombre, precio, imagen, descripcion, categoria]
  );

  return { id: result.insertId, ...data };
};

// PUT
const actualizarProducto = async (id, data) => {
  const { nombre, precio, imagen, descripcion, categoria } = data;

  await db.query(
    "UPDATE productos SET nombre=?, precio=?, imagen=?, descripcion=?, categoria=? WHERE id=?",
    [nombre, precio, imagen, descripcion, categoria, id]
  );
};

// DELETE
const eliminarProducto = async (id) => {
  await db.query("DELETE FROM productos WHERE id=?", [id]);
};

module.exports = {
  obtenerProductos,
  crearProducto,
  actualizarProducto,
  eliminarProducto
};