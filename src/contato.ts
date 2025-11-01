class Contato {
   private id:number
   private nome:string
   private email:string
   private fone:string

   constructor(id: number, nome:string, email:string, fone:string){
    this.id = id
    this.nome = nome
    this.email = email
    this.fone = fone
   }
   public setId(id:number){
     this.id = id
   }

   public setNome(nome:string): void{
     this.nome = nome
   }

   public getNome(): string{
    return this.nome
   }

    public setEmail(email:string): void{
        this.email = email
    }

    public getEmail(): string{
      return this.email
    }
    public setFone(fone:string): void{
        this.fone = fone
    }

    public getFone(): string{
    return this.fone
    }
}

function novoContato(contato: Contato){
   var contatos = JSON.parse(localStorage.getItem('contatos')) || []
   contato.setId(contatos.length+1)
   contatos.push(contato)
   localStorage.setItem('contatos',JSON.stringify(contatos)) 
}

function consultarTodos():Contato[]{
  return JSON.parse(localStorage.getItem('contatos')) || []
}