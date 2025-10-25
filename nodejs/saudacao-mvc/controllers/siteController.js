const saudacaoModel = require('../models/saudacaoModel');
const loginModel = require('../models/loginModel'); 

module.exports = {
  index: (req, res) => {
    res.sendFile('index.html', { root: './views' });
  },

  formulario: (req, res) => {
    res.sendFile('formulario.html', { root: './views' });
  },


   produtos: (req, res) => {
    res.sendFile('produtos.html', { root: './views' });
  },

  camisetas: (req, res) => {
    res.sendFile('camisetas.html', { root: './views' });
  },

  saudacao: (req, res) => {
    const { nome, email, idade } = req.body;
    const mensagem = saudacaoModel.gerarMensagemPersonalizada(nome, email, idade);
    res.send(`<h1>${mensagem}</h1>`);
  }
  ,

  login: (req, res) => {
    res.sendFile('login.html', {root: './views'})
  },
  logado: (req, res) => {
    const { email, senha} = req.body
    const logadoMensagem = loginModel.checarLogin(email, senha)
    res.send(`<h1>${logadoMensagem}</h1>`)
  }

};
