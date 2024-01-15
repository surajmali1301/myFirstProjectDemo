import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  @Input() msg: string = 'info'; //Write Inside of class
  @Output() passValue = new EventEmitter<string>();

  employeeList: IEmployee[] = [
    { empId: 101, empName: 'Suraj', city: 'Pune' },
    { empId: 102, empName: 'Anuj', city: 'Mumbai' },
  ];

  sendMessage() {
    this.passValue.emit('Hi, From child');
  }
}

export interface IEmployee {
  empId: number;
  empName: String;
  city: String;
}
