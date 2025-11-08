import { Contato } from "../interfaces/Contato.js"
import { ServiceContato } from "../services/ServiceContato.js";

const form = document.getElementById("form-contato") as HTMLFormElement;
const lista = document.getElementById("lista-contatos");

form.onsubmit = async (e) => {
    e.preventDefault();

    if(localStorage.getItem('userLogado') == null){
       window.location.href = 'login.html' 
       return
    }
    
    const novo: Contato = {
        nome: (document.getElementById("nome") as HTMLFormElement).value,
        email: (document.getElementById("email") as HTMLFormElement).value
    }

    await ServiceContato.adicionar(novo)
    form.reset()
    carregaContatos()
}

async function carregaContatos(){
    lista.innerHTML = ''
    const listaContatos = await ServiceContato.listar()
    listaContatos.forEach(c => {
        const li = document.createElement("li");
        li.textContent = `${c.nome} - ${c.email}`
        const btnDel = document.createElement("button")
        btnDel.innerHTML = "<i class='bi bi-trash'></i>"
        btnDel.className = "btn btn-danger btn-sm ms-2"
        btnDel.setAttribute('style','width:25px;height:20px; padding:0px')
        btnDel.onclick = async () => {
           ServiceContato.excluir(c.id)
           carregaContatos()           
        }
        li.append(btnDel)
        lista.append(li)
    })    
}

carregaContatos()

