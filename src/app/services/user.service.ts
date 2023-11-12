import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASE_URL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL + 'users');
  }

  addUsers(user: any): Observable<User> {
    return this.http.post<User>(this.BASE_URL + 'users', user, httpOptions);
  }

  editUsers(user: any): Observable<User> {
    let url: string = this.BASE_URL + 'users/' + user.id;
    return this.http.put<User>(url, user, httpOptions);
  }

  deleteUsers(user: any): Observable<User> {
    let url: string = this.BASE_URL + 'users/' + user.id;
    return this.http.delete<User>(url, httpOptions);
  }
}
// ppppppppppp
// ppppppppppp
// ppppppppppp
// ppppppppppp
// ppppppppppp

// serviço

// private produtosCarrinho: Produto[] = [];
// getProdutos(): Observable<Produto[]> {
//   return this.http.get<Produto[]>(this.BASE_URL + 'produtos');
// }
// adicionarNoCarrinho(produto: Produto): void {
//   this.produtosCarrinho.push(produto);
// }
// removeDoCarrinho(produto: Produto): void {
//   const index = this.produtosCarrinho.indexOf(produto);
//   if (index !== -1) {
//     this.produtosCarrinho.splice(index, 1);
//   }
// }
// calcularValorTotal(): number {
//   return this.produtosCarrinho.reduce((total, item) => total + item.preco, 0);
// }
// carregarProdutosNoCarrinho(): Produto[] {
//   return this.getProdutos().subscribe(produtos => this.produtosCarrinho = produtos);
// }

// ppppppppppp
// ppppppppppp
// ppppppppppp
// ppppppppppp
// ppppppppppp

// html
// <div class="carrinho-container">
//   <h2>Carrinho de Compras</h2>
//   <div *ngFor="let user of users; let i = index" class="produto">
//     <div class="info-produto">
//       <span
//         >{{ user.firstName }} - R${{ user.id }} (Quantidade:
//         {{ user.id }})</span
//       >
//       <button (click)="adicionarNoCarrinho(i)">Adicionar</button>
//       <button (click)="removeDoCarrinho(i)">Remover</button>
//     </div>
//   </div>
//   <button (click)="calcularValorTotal()" class="calcular-total-btn">
//     Calcular Total
//   </button>
//   <div class="total">Total: R$ {{ total }}</div>
// </div>

// css
// .carrinho-container {
//   max-width: 400px;
//   background-color: #90ee90;
//   padding: 10px;
//   border-radius: 5px;
//   margin: 20px;
// }

// .produto {
//   margin-bottom: 10px;
// }

// .info-produto {
//   display: flex;
//   justify-content: space-between;
// }

// .calculartotal-btn {
//   margin-top: 10px;
// }

// .total {
//   font-weight: bold;
//   margin-top: 10px;
// }
