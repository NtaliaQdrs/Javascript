const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');

// Rota para listar produtos
router.get("/", siteController.produtos);
router.get("/camisetas", siteController.camisetas);

module.exports = router;