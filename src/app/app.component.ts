import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LogInPageComponent } from './log-in-page/log-in-page.component';
import { HighlightDirective } from './highlight.directive';
import { Pipe, PipeTransform } from '@angular/core';
import { MyMathPipe } from './my-math.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    EmployeeListComponent,
    StudentListComponent,
    EmployeeComponent,
    RegisterFormComponent,
    LogInPageComponent,
    HighlightDirective,
    MyMathPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  info: string = 'Hi, From Parent';
  sInfo: string = 'Hi , From Student Parent';
  title = 'myFirstProject';
  // currentDate: new Date();//Wrong
  currentDate = new Date(); //Correct

  message: String = 'Using Interpolation';
  city: String = 'pune';
  color: string = 'red'; //switch case
  isDisplay: boolean = false;
  isDisable: boolean = false;
  text: string = 'This is Pipeline';
  displayMsg() {
    let res = confirm('Do You Want To Pay?');
    if (res == true) {
      alert('welcome To Angular');
    } else {
      alert('Payment Cancelled');
    }
  }
  childMsg: string = '';
  readMessage(msg: string) {
    this.childMsg = msg;
  }
  studentChildMsg: string = '';
  readChildMessage(sMsg: string) {
    this.studentChildMsg = sMsg;
  }

  applyColor() {
    let color = {
      'background-color': 'blue',
      'font-size': '18px',
      color: 'white',
      width: '020rem',
    };
    return color;
  }

  isMessage: string = '';
  isSuccess: boolean = false;
  isError: boolean = false;
  isWarning: boolean = false;

  success() {
    this.isSuccess = true;
    this.isError = false;
    this.isWarning = false;
    this.isMessage = 'Success Clicked';
  }
  error() {
    this.isError = true;
    this.isSuccess = false;
    this.isWarning = false;
    this.isMessage = 'Error Clicked';
  }
  warning() {
    this.isWarning = true;
    this.isSuccess = false;
    this.isError = false;
    this.isMessage = 'Warning Clicked';
  }
}
