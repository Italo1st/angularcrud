import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { CadastroClientes } from './pages/cadastro-clientes/cadastro-clientes';
import { CadastroProd } from './pages/cadastro-prod/cadastro-prod';
import { Sobre } from './pages/sobre/sobre';
import { Carrinho } from './pages/carrinho/carrinho';
import { TelaEscolhaAdmin } from './pages/tela-escolha-admin/tela-escolha-admin';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        title: 'Home'
    },
    {
        path: 'Login',
        component: Login,
        title: 'Login'
    },
    {
        path: 'CadastroClientes',
        component: CadastroClientes,
        title: 'Cadastro Clientes'
    },
    {
        path: 'CadastroProd',
        component: CadastroProd,
        title: 'Cadastro de produtos'
    },
    {
        path: 'Sobre',
        component: Sobre,
        title: 'Sobre'
    },
    {
        path: 'Carrinho',
        component: Carrinho,
        title: 'Carrinho'
    },
    {
        path: 'TelaEscolhaAdmin',
        component: TelaEscolhaAdmin,
        title: 'Escolha do admin'
    }
];