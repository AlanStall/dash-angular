import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { GenericValidator } from 'src/app/comum/validador';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent {
  private fb = inject(FormBuilder);
  // private service: UserService;
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
    dateBirth: [null, Validators.required],
    password: [null, Validators.required],
  });

  email = this.addressForm.controls['email'];

  constructor(private service: UserService) {}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'O email é obrigatório';
    }
    return this.email.hasError('email')
      ? 'Você deve preencher um e-mail válido'
      : '';
  }

  onSubmit(): void {
    if (this.addressForm.controls['firstName'].value)
      this.user.firstName = this.addressForm.controls['firstName'].value;
    if (this.addressForm.controls['email'].value)
      this.user.email = this.addressForm.controls['email'].value;
    if (this.addressForm.controls['phone'].value)
      this.user.phone = this.addressForm.controls['phone'].value;
    if (this.addressForm.controls['cpf'].value)
      this.user.cpf = this.addressForm.controls['cpf'].value;
    if (this.addressForm.controls['dateBirth'].value)
      this.user.dateBirth = this.addressForm.controls['dateBirth'].value;
    if (this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;

    this.service.addUsers(this.user).subscribe({
      next: (response) => {
        console.log(response);
        alert('Dado registrado com sucesso!');
      },
      error: (error: any) => {
        console.log(error);
        alert('Ocorreu algum erro!');
      },
    });
    localStorage.setItem('user', JSON.stringify(this.user));
  }
}
