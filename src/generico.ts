/*function identidade(valor:string):string{
    return valor
}

var retorno = identidade('ola')
console.log(retorno)*/

function identidade<T>(valor: T): T{
    console.log(typeof(valor))    
    return valor;
}

var retorno = identidade<string>("ola pessoal")
console.log(retorno)

var ret = identidade<number>(500)
console.log(ret)

var retbool = identidade<boolean>(true)
console.log(retbool)

var retarr = identidade<number[]>([10,20,30])
console.log(retarr)