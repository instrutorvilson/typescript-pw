var preco: number | string
preco = 10.5
preco = '10.5'

function somar(n1:number, n2:number): number | string{
    if(n2 == 0){
        return 'numero inválido'
    }
    return n1 + n2;
}

var retorno = somar(10.5,0.5)
console.log(retorno)
console.log(typeof(retorno))

retorno = somar(10.5,0)
console.log(retorno)
console.log(typeof(retorno))

