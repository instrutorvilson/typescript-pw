import { Contato } from "../interfaces/Contato.js";

const API_URL = "http://localhost:3000/contatos";

export class ServiceContato {
    static async listar():Promise<Contato[]>{
        const response = await fetch(API_URL)
        return response.json()
    }

    static async adicionar(contato:Contato):Promise<Contato>{ 
       const response = await fetch(API_URL,{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contato)
       })
       return response.json()
    }
}
