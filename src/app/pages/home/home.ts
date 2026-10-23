import { Component } from '@angular/core';
import { Produto } from '../../models/produto';
import { PRODUTOS, CARRINHO } from '../../data/dados';

@Component({
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  produtos = PRODUTOS;

  comprar(produto: Produto): void {
    if (CARRINHO.includes(produto)) {
      alert('Este produto já está no carrinho.');
      return;
    }
    CARRINHO.push(produto);
  }
}