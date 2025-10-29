const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota para listar clientes
router.get('/', clientesController.clientes);
router.get('/clientes', clientesController.clientes);
router.get('/login', clientesController.login)//caminhos por links
router.post('/logado', clientesController.logado) //submissão de formulário

module.exports = router;