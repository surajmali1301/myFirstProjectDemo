import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  @Input() msg: string = '';
  @Output() pass = new EventEmitter<string>();
  studentL: StudentList[] = [
    { sName: 'Suraj', city: 'pune', marks: 70 },
    { sName: 'Anuj', city: 'Mumbai', marks: 80 },
    { sName: 'Kailas', city: 'Nanded', marks: 70 },
  ];
  sendStudentMessage() {
    this.pass.emit('Hi From Child');
  }
}
export interface StudentList {
  sName: string;
  city: string;
  marks: number;
}
