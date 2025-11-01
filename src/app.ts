class Usuario {
    constructor(public nome: string, public email: string) {}
  }
  
  class CadastroApp {
    private usuarios: Usuario[] = [];
    private form: HTMLFormElement;
    private tabela: HTMLTableSectionElement;
  
    constructor() {
      this.form = document.getElementById("formCadastro") as HTMLFormElement;
      this.tabela = document.querySelector("#tabelaUsuarios tbody") as HTMLTableSectionElement;
  
      this.form.addEventListener("submit", (e) => this.adicionarUsuario(e));
    }
  
    private adicionarUsuario(event: Event) {
      event.preventDefault();
  
      const nomeInput = document.getElementById("nome") as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;
  
      const nome = nomeInput.value.trim();
      const email = emailInput.value.trim();
  
      if (!nome || !email) {
        alert("Preencha todos os campos!");
        return;
      }
  
      const usuario = new Usuario(nome, email);
      this.usuarios.push(usuario);
      this.renderTabela();
  
      nomeInput.value = "";
      emailInput.value = "";
    }
  
    private renderTabela() {
      this.tabela.innerHTML = "";
      for (const u of this.usuarios) {
        const linha = `<tr><td>${u.nome}</td><td>${u.email}</td></tr>`;
        this.tabela.innerHTML += linha;
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => new CadastroApp());
  