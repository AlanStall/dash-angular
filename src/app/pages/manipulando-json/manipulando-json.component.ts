import { Component, OnInit } from '@angular/core';
import studentsData from '../../students.json';
import { Router } from '@angular/router';

interface Student {
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css'],
})
export class ManipulandoJsonComponent implements OnInit {
  students: Student[] = studentsData;
  constructor(private route: Router) {}
  ngOnInit(): void {
    console.log(this.students);
  }

  goToDetail(student: Student) {
    this.route.navigate(['detalhe', student.email]);
  }
}
