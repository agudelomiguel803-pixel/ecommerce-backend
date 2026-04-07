
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());


app.use("/api/auth", require("./routes/auth"));
app.use("/api/productos", require("./routes/productos"));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});