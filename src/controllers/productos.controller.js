const productosService = require("../services/productos.service");

const getProductos = async (req, res) => {
  try {
    const productos = await productosService.obtenerProductos();
    res.json(productos);
  } catch (error) {
    console.error("❌ ERROR GET:", error);
    res.status(500).json({ error: error.message });
  }
};

const postProducto = async (req, res) => {
  try {
    const nuevo = await productosService.crearProducto(req.body);
    res.json(nuevo);
  } catch (error) {
    console.error("❌ ERROR POST:", error);
    res.status(500).json({ error: error.message });
  }
};

const putProducto = async (req, res) => {
  try {
    await productosService.actualizarProducto(req.params.id, req.body);
    res.json({ mensaje: "Producto actualizado" });
  } catch (error) {
    console.error("❌ ERROR PUT:", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    await productosService.eliminarProducto(req.params.id);
    res.json({ mensaje: "Producto eliminado" });
  } catch (error) {
    console.error("❌ ERROR DELETE:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getProductos,
  postProducto,
  putProducto,
  deleteProducto
};