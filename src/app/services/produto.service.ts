import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  private url = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.url);
  }

  cadastrar(dados: { nome: string; categoria: string; preco: number }) {
    return this.http.post(this.url, dados);
  }

  alterar(id: number | string, dados: { nome: string; categoria: string; preco: number }) {
    return this.http.put(`${this.url}/${id}`, dados);
  }

  excluir(id: number | string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}