//Importando o módulo http nativo do Node.js
//const http = require('http');
import http from 'http';
//Importando funções matemáticas de um módulo local
const PORT = 3000;

//Cria o servidor 
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //Define o cabeçalho da resposta como HTML
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //Roteamento básico
    if (url === '/') {
        response.statusCode = 200; //OK
        response.end('<h1>Bem-vindo à página inicial!</h1>');

    } else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; //OK
        response.end('<h1>Sobre nós</h1><p>Esta é a página sobre nós.</p>');
        
    } else if (url === '/contato') {
        response.statusCode = 200; //OK
        response.end('<h1>Fale conosco</h1>');

    } else { 
        //Se nenhuma rota for correspondida
        response.statusCode = 404; //Not Found
        response.end('<h1>404 - Página não encontrada</h1>');
    }

});

//Inicia o servidor na porta especificada
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


