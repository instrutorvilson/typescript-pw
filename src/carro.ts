class Carro{
    private marca:string =''
    modelo:string = ''
    placa:string = ''
    cor:string = ''
    kmlitro: number = 0

    setMarca(marca:string):void{
        if(marca == ''){
            console.log('a marca deve ser informado')
            return
        }
        this.marca = marca
    }
    getMarca():string{
        return this.marca
    }

    imprimir():void{
        console.log(`${this.marca} - ${this.modelo} - ${this.placa} - ${this.cor}`)
    }

    abastecimento(abastecido:number):number{
        return abastecido * this.kmlitro
    }
}

var objCarro = new Carro()
//objCarro.marca = 'Ford'
objCarro.setMarca('Ford')
objCarro.modelo = 'Ka'
objCarro.kmlitro = 15
objCarro.placa = 'lzz-1976'
objCarro.cor = 'preto'
//objCarro.imprimir()
console.log(objCarro.abastecimento(35))

console.log(objCarro.getMarca())