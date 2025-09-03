//importando o modulo os (operating system)
const os = require('os');

//exibindo as informaçoes do sistema operacional
//exibindo a arquitetura do sistema (x64, arm, etc)
console.log('Arquitetura do sistema:', os.arch());
//exibindo a quatidade de CPUs
console.log('Quantidade de CPUs:', os.cpus().length);
//exibindo a quantidade de memoria em bytes
console.log('Quantidade de memória (bytes):', os.totalmem());
//exibindo a quantidade de memoria livre em bytes
console.log('Quantidade de memória livre (bytes):', os.freemem());
//exibindo o sistema operacional
console.log('Sistema operacional:', os.type());