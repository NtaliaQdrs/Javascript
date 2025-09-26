//const funcoes_matematicas = require('./funcoes_matematicas'); 
//const calculadora = require('./calculadoraIdade');

import {somar, subtrair, multiplicar, dividir} from './funcoes_matematicas.js';
import * as calculadoraIdade from './calculadoraIdade.js';

console.log('Soma: ' + somar(5, 5, 5));
console.log('Subtração: ' + subtrair(5, 3));
console.log('Multiplicação: ' + multiplicar(5, 3));
console.log('Divisão: ' + dividir(5, 0));

console.log(calculadoraIdade.idade('Ana', 1976, 2050));






