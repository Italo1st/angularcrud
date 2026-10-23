import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Produto } from '../../models/produto';
import { CARRINHO } from '../../data/dados';

@Component({
  imports: [RouterModule],
  selector: 'app-carrinho',
  styleUrl: './carrinho.css',
  templateUrl: './carrinho.html',
})
export class Carrinho {
  itens = CARRINHO;

  getTotalFormatado(): string {
    let total = 0;
    for (const produto of this.itens) {
      total += produto.preco;
    }
    return 'R$ ' + total.toFixed(2).replace('.', ',');
  }

  remover(produto: Produto): void {
    const posicao = this.itens.indexOf(produto);
    this.itens.splice(posicao, 1);
  }

  finalizar(): void {
    if (this.itens.length === 0) {
      alert('Seu carrinho está vazio.');
      return;
    }
    alert('Pedido realizado! Total: ' + this.getTotalFormatado());
    this.itens.splice(0);
  }
}