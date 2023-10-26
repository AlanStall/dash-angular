import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const autorizadoGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('login');
  const router = inject(Router);
  if (token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   Router,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AutorizacaoService } from '../services/autorizacao.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AutorizadoGuard implements CanActivate {
//   constructor(
//     private autorizadoService: AutorizacaoService,
//     private routerService: Router
//   ) {}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     return true;
//   }
// }
