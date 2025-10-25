interface Item{
   produto: Produto,
   quantidade:number  
}

class Produto{
    private descricao:string
    private preco:number

    constructor(descricao:string, preco:number){
        this.descricao = descricao
        this.preco = preco
    }

    getDescricao():string{
        return this.descricao
    }

    getPreco():number{
        return this.preco
    }
}

class Carinho{    
    private listaItens : Item[] = []
    adicionar(item:Item):void{
        this.listaItens.push(item)
    }

    listar():void{
        for(const f of this.listaItens){
            console.log(`${f.produto.getDescricao()} ${f.produto.getPreco()} ${f.quantidade} ${f.produto.getPreco()*f.quantidade}`)
        }
    }}

const laranja = new Produto('laranja',1.50)
const maca = new Produto('maça',2.50)

var carrinho = new Carinho()
carrinho.adicionar({produto:laranja, quantidade:10})
carrinho.adicionar({produto:maca, quantidade: 5})

carrinho.listar()