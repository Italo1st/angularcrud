import { Component, OnInit, signal } from '@angular/core';
import { Produto } from '../../models/produto';
import { CARRINHO } from '../../data/dados';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home implements OnInit {
  produtos = signal<Produto[]>([]);

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((lista) => {
      this.produtos.set(lista.map((p) => new Produto(p.id, p.nome, p.categoria, p.preco)));
    });
  }

  comprar(produto: Produto): void {
    if (CARRINHO.some((p) => p.id === produto.id)) {
      alert('Este produto já está no carrinho.');
      return;
    }
    CARRINHO.push(produto);
  }
}