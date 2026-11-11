import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produto } from '../../models/produto';
import { ProdutoService } from '../../services/produto.service';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastro-prod',
  styleUrl: './cadastro-prod.css',
  templateUrl: './cadastro-prod.html',
})
export class CadastroProd implements OnInit {
  produtos = signal<Produto[]>([]);

  nome = '';
  categoria = 'grau';
  preco: number | null = null;
  editandoId: number | string | null = null;

  constructor(private service: ProdutoService) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar(): void {
    this.service.listar().subscribe((lista) => {
      this.produtos.set(lista.map((p) => new Produto(p.id, p.nome, p.categoria, p.preco)));
    });
  }

  salvar(): void {
    if (!this.nome.trim() || this.preco === null) {
      alert('Preencha nome e preço.');
      return;
    }
    const dados = { nome: this.nome.trim(), categoria: this.categoria, preco: this.preco };

    if (this.editandoId === null) {
      this.service.cadastrar(dados).subscribe(() => {
        this.limpar();
        this.carregar();
      });
    } else {
      this.service.alterar(this.editandoId, dados).subscribe(() => {
        this.limpar();
        this.carregar();
      });
    }
  }

  editar(produto: Produto): void {
    this.editandoId = produto.id;
    this.nome = produto.nome;
    this.categoria = produto.categoria;
    this.preco = produto.preco;
  }

  excluir(produto: Produto): void {
    if (!confirm('Excluir "' + produto.nome + '"?')) {
      return;
    }
    this.service.excluir(produto.id).subscribe(() => this.carregar());
  }

  limpar(): void {
    this.editandoId = null;
    this.nome = '';
    this.categoria = 'grau';
    this.preco = null;
  }
}