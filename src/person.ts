class Person{
    nome: string = ''
    idade: number = 0

    imprimir(): void{
        console.log(`${this.nome} ${this.idade}`)  
    }

    status():string{
        if(this.idade < 18){
            return 'menor de idade'
        }
        return 'maior de idade'
    }
}

var ana = new Person()
ana.nome = 'Ana'
ana.idade = 15
ana.imprimir()
console.log(ana.status())
//console.log(`${ana.nome} ${ana.idade}`)

var jose = new Person()
jose.nome = 'Jose'
jose.idade = 45
jose.imprimir()
console.log(jose.status())
//console.log(`${jose.nome} ${jose.idade}`)