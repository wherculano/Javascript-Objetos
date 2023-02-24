const cliente = {
    nome: "Wagner",
    idade: 34,
    cpf: "1122233345",
    email: "wagner@dominio.com",
}

console.log(`O cliente ${cliente.nome} tem ${cliente.idade} anos e os 3 primeiros digitos so CPF são: ${cliente.cpf.substring(0, 3)}`)
