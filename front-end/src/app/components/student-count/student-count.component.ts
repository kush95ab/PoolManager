import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { StudentCountService } from 'src/app/services/studentCount.service';
import { StudentCount } from 'src/app/models/studentCount.model';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-student-count',
  templateUrl: './student-count.component.html',
  styleUrls: ['./student-count.component.css']
})
export class StudentCountComponent implements OnInit {

  list: StudentCount[];
  constructor(private service: StudentCountService,
    private firestore: AngularFirestore) { }

  // ngOnInit() {
  // }
  managecount:any;
  public student_count:any;
  public free_space:any;
  public max_count:any; 

  ngOnInit() {
    this.service.getStudentCount().subscribe(list => {
        this.managecount=list.map(item=>{
          return {
            $key:item.key,
            ...item.payload.val()
          };
        });

        console.log(this.managecount);
        
        this.student_count=this.managecount[0]['count'];
        console.log(this.student_count);

        this.free_space=this.managecount[0]['freeSlots'];
        console.log(this.free_space);

        this.max_count=this.managecount[0]['maxCount'];
        console.log(this.max_count);

      });
  }
 
  onEdit(std: StudentCount) {
    // this.service.formData = Object.assign({}, std);
  
  }

  

}
