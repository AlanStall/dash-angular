import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent implements OnInit {
  // produtos: Produto = produtos;
  constructor(private route: Router) {}
  ngOnInit(): void {
    // console.log(this.produtos);
  }

  goToDetail(student: Produto) {
    this.route.navigate(['detalhe', student.id]);
  }
}
