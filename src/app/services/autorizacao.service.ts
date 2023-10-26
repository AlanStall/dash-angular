import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutorizacaoService {
  autorizado = false;
  constructor() {}

  autorizar() {
    localStorage.setItem('login', 'sim');
    // localStorage.setItem('token', token);
  }
  deslogar() {
    localStorage.clear();
  }
  obterLoginStatus = () => !!localStorage.getItem('login');
}
