const modulo = require('./meuModulo'); // Importando o módulo
const calculadora = require('./calculadoraIdade');


const mensagem = modulo.saudacao('Natália'); // Executando a função
const idadeEm2025 = calculadora.idade('Natália', 2008); // Executando a função


console.log(mensagem);
console.log(idadeEm2025);