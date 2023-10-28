import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  addressForm = this.fb.group({
    email: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email,
      ]),
    ],
    password: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
    ],
  });
  email = this.addressForm.controls['email'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'O email é obrigatório';
    }
    return this.email.hasError('email')
      ? 'Você deve preencher um e-mail válido'
      : '';
  }

  constructor(
    // private fb: FormBuilder,
    private autorizacaoService: AutorizacaoService
  ) {}

  loginClick() {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else this.autorizacaoService.autorizar();
  }

  onSubmit(): void {
    this.loginClick();
    alert('Thanks!');
  }
}
