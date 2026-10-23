import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  itensMenu = [
    {label: 'Home', link: ''},
    {label: 'Cadastro', link: '/Login'},
    {label: 'Sobre', link: '/Sobre'},
    {label: 'Carrinho', link: '/Carrinho'}
  ]
}