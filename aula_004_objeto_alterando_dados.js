const pessoa = {
    nome: "Luma",
    profissao: "Engenheira",
}

console.log(pessoa)
pessoa.nome = "Luma Silveira"

console.log(pessoa.telefone)
pessoa.telefone = "(11)91234-5678"

console.log(pessoa)

// variavel const é imutavel, mas o conteudo (objeto) é mutavel
const novaPessoa = {
    nome: "Raul"
}
pessoa = novaPessoa // erro