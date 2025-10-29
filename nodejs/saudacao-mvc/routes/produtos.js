const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');

// Rota para listar produtos
router.get("/", produtosController.produtos);
router.get("/camisetas", produtosController.camisetas);


module.exports = router;