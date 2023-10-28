import { Component, inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
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
    email: [null, Validators.required],
    phone: [null, Validators.required],
    password: [null, Validators.required],
  });

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
