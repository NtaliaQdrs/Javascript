const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

const usersRoutes = require('./routes/users');
app.use('/users', usersRoutes);

const inicioRoutes = require('./routes/inicio');
app.use('/inicio', inicioRoutes);

<<<<<<< HEAD
const produtosRoutes = require('./routes/produtos');
app.use('/produtos', produtosRoutes);




=======
>>>>>>> 041c2043d7d077ad5f32d525943aca936f803d0c
// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
