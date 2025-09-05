const http = require('http'); // Importando o módulo http

//criando um servidor que responder com "Hello World!" para todas as requisições
http.createServer((req, res) => {
    //definindo o cabeçalho da resposta com status 200 (OK) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});
    //enviando a resposta "Hello World!"
    res.end('Ola Mundo');
    //adicionando um log no console para cada requisição recebida
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');

