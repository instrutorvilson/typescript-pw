var contatos: string[] = []

contatos.push("Ana")
contatos.push("Maria")

var dados: (string | number)[] = []
dados.push('Casa 1')
dados.push(1500)
dados.push(5.65)

let tuplaDados: [string, number]
tuplaDados = ['casa 1', 250]


let opcaoPagamento : [string, string, string, string]
opcaoPagamento = ['dinheiro', 'crédito', 'débito', 'pix']

function validaPagamento(index:number):void{
    if(opcaoPagamento[index] == 'dinheiro'){
        console.log('desconto de 10%')
        return
    }
    if(opcaoPagamento[index] == 'pix'){
        console.log('desconto de 8%')
        return
    }
    if(opcaoPagamento[index] == 'crédito'){
        console.log('acréscimo de 5%')
        return
    }
    console.log('sem desconto')
}

validaPagamento(0)
validaPagamento(1)
validaPagamento(2)
validaPagamento(3)