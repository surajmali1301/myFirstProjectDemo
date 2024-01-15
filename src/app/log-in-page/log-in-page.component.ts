import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-log-in-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in-page.component.html',
  styleUrl: './log-in-page.component.css',
})
export class LogInPageComponent {
  UserName: string = '';
  PassWord: string = '';

  LogIn(){
    console.log(this.UserName+' '+this.PassWord)
  }
}
