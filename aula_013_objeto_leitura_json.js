const dados = require("./aula_013_objeto_json.json")

console.log(dados)
console.log(`O tipo da variável dados é: ${typeof dados}`)

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)


const clienteEmJSON = JSON.parse(clienteEmString)
console.log(clienteEmJSON)