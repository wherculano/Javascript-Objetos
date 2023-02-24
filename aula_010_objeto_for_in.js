const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numero: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

for (let chave in cliente) {
    let tipo = typeof cliente[chave]
    if (tipo !== "function" && tipo !== "object") {
        console.log(`O valor da chave "${chave}" é ${cliente[chave]}`)
    } 
    // else if (tipo === "object") {
    //     console.log(`O valor da chave interna "${chave}" e o valor é:`)
    //     console.log(cliente[chave])
    // }  
}
