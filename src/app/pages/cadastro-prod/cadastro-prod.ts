import { Component } from '@angular/core';
import { PRODUTOS } from '../../data/dados';

@Component({
  selector: 'app-cadastro-prod',
  styleUrl: './cadastro-prod.css',
  templateUrl: './cadastro-prod.html',
})
export class CadastroProd {
  produtos = PRODUTOS;
}