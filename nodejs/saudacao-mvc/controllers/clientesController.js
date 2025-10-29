const loginModel = require("../models/loginModel");

module.exports = {
  clientes: (req, res) => {
    res.sendFile("clientes.html", { root: "./views" });
  },

  login: (req, res) => {
    res.sendFile("login.html", { root: "./views" });
  },

  logado: (req, res) => {
    const { email, senha } = req.body;
    const logadoMensagem = loginModel.checarLogin(email, senha);
    res.send(`<h1>${logadoMensagem}</h1>`);
  },
};
