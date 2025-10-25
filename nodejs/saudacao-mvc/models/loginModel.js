module.exports = {
    checarLogin: (email, senha) => {
        let mensagemLogin

        if (email == "nataliacaetano1993@gmail.com" && senha == "senha123") {
            mensagemLogin = "Você inseriu os dados corretos e está logado"
        } else {
            mensagemLogin = "Você inseriu email ou senha incorretos"
        }
        return `${mensagemLogin}`
    }
}