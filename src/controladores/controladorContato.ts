import { Contato } from "../interfaces/Contato.js"
import { ServiceContato } from "../services/ServiceContato.js";

const form = document.getElementById("form-contato") as HTMLFormElement;
const lista = document.getElementById("lista-contatos");

form.onsubmit = async (e) => {
    e.preventDefault();
    
  /*  const novo: Contato = {
        nome: (document.getElementById("nome") as HTMLFormElement).value,
        email: (document.getElementById("email") as HTMLFormElement).value
    }

    await ServiceContato.adicionar(novo)
    form.reset*/
    carregaContatos()
}

async function carregaContatos(){
    lista.innerHTML = ''
    const listaContatos = await ServiceContato.listar()
    listaContatos.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nome} - ${c.email}`
        lista.append(li)
    })    
}

