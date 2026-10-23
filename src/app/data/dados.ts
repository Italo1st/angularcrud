import { Produto } from '../models/produto';
import { Cliente } from '../models/cliente';

export const PRODUTOS: Produto[] = [
  new Produto(1, 'Clássico Redondo', 'grau', 289),
  new Produto(2, 'Aviador Dourado', 'sol', 399),
];

export const CLIENTES: Cliente[] = [
  new Cliente(1, 'Marina Souza', 'marina@email.com', '123', '(11) 98888-1111'),
  new Cliente(2, 'Carlos Lima', 'carlos@email.com', '123', '(11) 97777-2222'),
];

export const CARRINHO: Produto[] = [];