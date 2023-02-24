const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
}

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
]

const chavesDoObjeto = Object.keys(cliente)
console.log(chavesDoObjeto)

// Se enderecos nao estiver incluso no Array, "dará" (print) erro.
if(!chavesDoObjeto.includes("enderecos")){
    console.error("[Erro]: É necessário ter um endereco cadastrado!")
}

/*
Documentacao sobre objetos:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
*/
