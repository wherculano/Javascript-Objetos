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

const ligarParaCliente = (telefoneResidencial, telefoneComercial) => {
    console.log(`Ligando para: ${telefoneComercial}`)
    console.log(`Ligando para: ${telefoneResidencial}`)
}

ligarParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}
console.log(encomenda)