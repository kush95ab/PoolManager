import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  student_count:number=23;
  free_space:number=50-this.student_count;
}
