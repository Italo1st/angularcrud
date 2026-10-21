import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {

  login: string = '';
  senha : string = '';

  onBotaoClicado (login: string, senha: string):void{
    alert(`login ${this.login} | senha ${this.senha}`);
  }
}
