import { Component } from '@angular/core';
import { CLIENTES } from '../../data/dados';

@Component({
  selector: 'app-cadastro-clientes',
  styleUrl: './cadastro-clientes.css',
  templateUrl: './cadastro-clientes.html',
})
export class CadastroClientes {
  clientes = CLIENTES;
}