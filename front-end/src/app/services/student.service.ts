import { Injectable } from '@angular/core';
import { Student } from '../entities/student';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  currentStudent: Student;
  studentsList: Student[] = new Array();

  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService) { }

  // get all the students' details
  getStudents():Student[] {
    this.studentsList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETSTUDENTS, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let stud = Utils.convertDatabaseStudentToStudent(result[i]);
              this.studentsList.push(stud);
              i = i + 1;
            }
            // console.log(this.studentsList);
          }
        },
        (err) => alert('getting companies error occured.. !')
      );
      return this.studentsList;
  }

  // insert student details
  insertStudent(student) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDSTUDENT, student)
        .subscribe(
          (result) => {
            alert("Successfully Student Inserted.");
            this.router.navigate(['/login']);
            resolve(result);
          },
          (err) => {
            alert('student insert error occured.. Contact Administrations!');
            reject(err);
          }
        );
    });
    return promise;
  }

   // update student details
   updateStudent(student:Student) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATESTUDENT, student)
        .subscribe(
          (result) => {
            alert("Successfully Student Inserted.");
            // this.router.navigate(['/login']);
            resolve(result);
          },
          (err) => {
            alert('student insert error occured.. Contact Administrations!');
            reject(err);
          }
        );
    });
    return promise;
  }

  //helping function for view profile
  setCurrentStd(std:Student){
    this.currentStudent=std;
  }

  getCurrentStudent(){
    return this.currentStudent;
  }

  // delete student details
  deleteStudent(student: Student) {
    console.log("delete student called on " + student.studentId);

    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELSTUDENT, student).subscribe(
      (result) => {
        alert("Student Successfully Deleted.");
      },

      (err) => {
        alert("cannot delete student" + err);
        console.log(err);
      }
    );
  }
}
