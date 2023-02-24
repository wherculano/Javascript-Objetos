const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

// copiando o objeto e nao sua referencia
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) // Gandalf
console.log(objPersonagem2.nome) // Gandalf, o Cinzento

console.log("-=".repeat(20))

// copiando a referencia
const objPersonagem3 = objPersonagem2
objPersonagem3.nome = "Gandalf, o Velho"

console.log(objPersonagem2.nome) // Gandalf, o Velho
console.log(objPersonagem3.nome) // Gandalf, o Velho