var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Olá, voê esta a rota usuarios');
});

module.exports = router;
