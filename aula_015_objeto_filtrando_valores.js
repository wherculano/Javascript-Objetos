const clientes = require("./aula_014_objeto_clientes.json")

function filtrarAptoSemcomplemento(listaClientes){
    return listaClientes.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
        )
    })
}

const aptoSemComplemento = filtrarAptoSemcomplemento(clientes)
console.log(aptoSemComplemento)