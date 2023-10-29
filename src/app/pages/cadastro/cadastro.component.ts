import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/comum/validador';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  private fb = inject(FormBuilder);
  user: User = new User();
  addressForm = this.fb.group({
    id: '',
    firstName: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    ],
    email: [
      null,
      Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.email,
      ]),
    ],
    cpf: [
      null,
      Validators.compose([Validators.required, GenericValidator.isValidCpf()]),
    ],
    cnpj: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
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

  onSubmit(): void {
    this.user.id = '1';
    if (this.addressForm.controls['firstName'].value)
      this.user.firstName = this.addressForm.controls['firstName'].value;
    if (this.addressForm.controls['email'].value)
      this.user.email = this.addressForm.controls['email'].value;
    if (this.addressForm.controls['phone'].value)
      this.user.phone = this.addressForm.controls['phone'].value;
    if (this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;

    alert('Você cadastrou!');
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
