const clientes = require("./aula_014_objeto_clientes.json")

function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) =>{
        if (a[propriedade] < b[propriedade]){
            return -1
        } else if (a[propriedade] > b[propriedade]){
            return 1
        } return 0
    })
    return resultado
}

const listaOrdenada = ordenar(clientes, "nome")
console.log(listaOrdenada)