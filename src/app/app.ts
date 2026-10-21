import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Login } from './pages/login/login';

@Component({
  imports: [RouterOutlet, Home, Header, Footer, Login],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('angularcrud');
}
