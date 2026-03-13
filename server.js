const express = require("express");
const app = express();
const controller = require("./controller/funcionarioController.js")

app.use("/", controller)

const PORT = 3027;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});