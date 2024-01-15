import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
})
export class RegisterFormComponent {
  email: string = '';
  UserName: string = '';
  Password: string = '';
  ConfirmPassword: string = ''

  showForm() {
    console.log(
      this.UserName +
        ' ' +
        this.email +
        ' ' +
        this.Password +
        ' ' +
        this.ConfirmPassword
    );
  }
}
