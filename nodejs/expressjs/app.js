//import o express
import express from "express";

const app = express();
const PORT = 3000;

//Middleware para definir o cabeçalho do resposta como HTML
app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  next();
});

//Roteamento básico 
app.get("/", (req, res) => {
    res.status(200).send("<h1>Olá, mundo!</h1><p>Bem-vindo ao meu servidor Express.</p>");
});

app.get("/sobre", (req, res) => {
    res.status(200).send("<h1>Sobre Nós</h1><p>Esta é a página sobre nós.</p>");
}   );

app.get("/contato", (req, res) => {
    res.status(200).send("<h1>Contato</h1><p>Entre em contato conosco através do email:</h1>");
});

app.get("/fotos", (req, res) => {
    res.status(200).send("<h1>Fotos</h1><p>Aqui estão algumas fotos incríveis!</p>");
}  );

//Rota para lidar com páginas não encontradas (404)
app.use((req, res) => {
    res.status(404).send("<h1>404 - Página Não Encontrada</h1><p>A página que você está procurando não existe.</p>");
}); 

//Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 