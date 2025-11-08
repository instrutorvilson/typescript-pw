import { Usuario } from "../interfaces/Usuario.js";
import { ServiceUsuario } from "../services/ServiceUsuario.js";

export async function login(){
    const user:Usuario = {
        userName: (document.getElementById("username") as HTMLInputElement).value,
        password: (document.getElementById("password") as HTMLInputElement).value
    }
     const userLogado = await ServiceUsuario.login(user)
     localStorage.setItem('userLogado',JSON.stringify(userLogado))
  }

const btnLogin = document.getElementById("btnLogin") as HTMLButtonElement
btnLogin.addEventListener('click', ()=> login()) 

export async function addUser(user: Usuario): Promise<Usuario>{
  return user
}