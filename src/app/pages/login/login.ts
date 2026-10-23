import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CLIENTES } from '../../data/dados';

@Component({
  imports: [FormsModule, RouterModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  login: string = '';
  senha: string = '';

  constructor(private router: Router) {}

  onBotaoClicado(): void {
    const login = this.login.trim();
    const senha = this.senha.trim();

    if (login === 'admin' && senha === '123') {
      this.router.navigate(['/TelaEscolhaAdmin']);
      return;
    }

    for (const cliente of CLIENTES) {
      if (cliente.email === login && cliente.senha === senha) {
        this.router.navigate(['/']);
        return;
      }
    }

    alert('Login ou senha inválidos');
  }
}