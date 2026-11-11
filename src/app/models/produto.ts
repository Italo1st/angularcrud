export class Produto {
  constructor(
    public id: number | string,
    public nome: string,
    public categoria: string,
    public preco: number,
  ) {}

  getCategoriaTexto(): string {
    return this.categoria === 'sol' ? 'Óculos de sol' : 'Óculos de grau';
  }

  getPrecoFormatado(): string {
    return 'R$ ' + this.preco.toFixed(2).replace('.', ',');
  }
}