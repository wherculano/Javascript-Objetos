const clientes = require("./aula_014_objeto_clientes.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
}

const encontrado = encontrar(clientes, "nome", "Tildi")
console.log(encontrado)

console.log("#".repeat(25))

const encontrado2 = encontrar(clientes, "telefone", "53985732673")
console.log(encontrado2)

/*
Documentacao para arrays:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
