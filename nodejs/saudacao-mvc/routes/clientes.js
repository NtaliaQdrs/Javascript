const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

// Rota para listar clientes
router.get("/", clientesController.clientes);
router.get("/clientes", clientesController.clientes);

module.exports = router;