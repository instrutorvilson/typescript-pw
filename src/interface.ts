interface ICarro{
    marca?:string, /**campo opcional */
    modelo:string,
    placa:string
}
 
let fusca : ICarro = {
    marca:'wolks',
    modelo: 'fuque',
    placa: 'lzz-1234'
}
console.log(fusca)

let kombi : ICarro = {
    modelo: 'mexicana',
    placa: 'lzz-1234'
}
console.log(kombi)

interface IRespostaApi<T>{
    sucesso:boolean,
    dados: T
}

const apiProdutos: IRespostaApi<string> = {sucesso:true, dados: 'tudo salvo'}

const apiCarros: IRespostaApi<ICarro> = { sucesso: true, dados: fusca}