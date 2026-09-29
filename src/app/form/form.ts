import { Component } from '@angular/core';

interface Usuario {
  id: number;
  nome: string;
  email: string;
}

@Component({
  imports: [],
  selector: 'app-form',
  styleUrls: ['./form.css', '../home/home.css'],
  templateUrl: './form.html',
})

export class Form {
  nome = '';
  email = '';
  mensagem: string = '';
  usuarios: Usuario[] = [];
  proximoId: number = 1;

  cadastrarUsuario(event: Event): void {
    event.preventDefault();
    const nomeLimpo = this.nome.trim();
    const emailLimpo = this.email.trim();

    if(!nomeLimpo || !emailLimpo) {
      this.mensagem = 'Por favor, preencha todos os campos.';

      return;
    }

    const novoUsuario: Usuario = {
      id: this.proximoId,
      nome: nomeLimpo,
      email: emailLimpo,
    };

    this.usuarios.push(novoUsuario);
    this.proximoId++;
    this.mensagem = `Usuário ${nomeLimpo} cadastrado com sucesso.`;
    this.limparFormulario(false);
  }
  limparFormulario(limparMensagem: boolean = true): void {
    this.nome = '';
    this.email = '';
    if (limparMensagem) {
      this.mensagem = '';
    }
  }
  excluirUsuario(id: number): void {
    const usuario = this.usuarios.find(
      item => item.id === id
    );
    this.usuarios = this.usuarios.filter(
      item => item.id !== id
    );
    if (usuario) {
      this.mensagem = `Usuário ${usuario.nome} excluído com sucesso.`;
    }
  }

  obterInicial(nome: string): string {
    return nome
     .trim()
     .charAt(0)
     .toUpperCase();
  }

}
