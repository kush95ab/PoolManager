import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent implements OnInit {

  
  student_count:number;
  free_space:number;

  constructor() { }

  ngOnInit() {
    this.student_count=23;
    this.free_space=50-this.student_count;
    
  }

}
