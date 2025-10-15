var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Olá, você esta na rota inicial');
});

module.exports = router;
