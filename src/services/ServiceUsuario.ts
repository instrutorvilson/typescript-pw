import { Usuario } from "../interfaces/Usuario";

const API_URL = "http://localhost:3000/users";

export class ServiceUsuario {
   static async login(user: Usuario): Promise<Usuario>{
      const response = await fetch(API_URL)
      const dados = await response.json()
      console.log(dados)
      for (const u of dados) {            
            if(u.userName === user.userName && u.password === user.password){
              return u
            }
       }
      return 
   }
}