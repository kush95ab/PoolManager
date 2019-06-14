
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
import { HttpEnum } from '../../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../../entities/user';
import { Student } from '../../../entities/student';
import { Coach } from '../../../entities/coach';
import { Poolmanager } from '../../../entities/poolmanager';
import { UserService } from '../../../services/user.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { StudentService } from '../../../services/student.service';
import { CoachService } from '../../../services/coach.service';
import { PoolmanagerService } from '../../../services/poolmanager.service';

import { Auth } from '../../../entities/auth';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  students: Student[];
  coaches: Coach[];


  fname: string;
  lname: string;
  fullname: string;
  dob: string;
  gender: string;
  address: string;
  email: string;
  cellphone: string;
  fixedphone: string;
  description: string;
  image: string;

  usertype: string;
  username: string;
  password: string;
  confirm: string;

  //unique for students
  studentId: string;
  school: string;
  parentname: string;
  grade: string;
  admissionDate: string;

  //unique for coach and poolmanager
  NIC: string;
  occupation: string;
  experience: string;

  selectedFiles: FileList;
  currentFileUpload: File;
  imageAddress: string;

  //booleans
  choosen: boolean = false;
  Studentsignup: boolean = false;
  Coachsignup: boolean = false;
  Poolmanagersignup: boolean = false;

  member_students: boolean = true;
  member_coaches: boolean = false;

  constructor(private router: Router, private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService,
    private studentService: StudentService, private coachService: CoachService,
    private poolmanagerService: PoolmanagerService) { }

  ngOnInit() {
    this.retreveStudents();
    this.retreveCoaches();
  }


  uploadFile() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event instanceof HttpResponse) {
        this.image = this.currentFileUpload.name;
        this.imageAddress = HttpEnum.BASEURL + this.image;
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  retreveStudents() {
    this.students = this.studentService.getStudents();
  }
  retreveCoaches() {
    this.coaches = this.coachService.getCoaches();
  }

  openMemeber(x: string) {
    switch (x) {
      case "member_coaches":
        this.member_coaches = true;
        this.member_students = false;
        break;
      case "member_students":
        this.member_students = true;
        this.member_coaches = false;
        break;
      default:
        this.member_students = true;
        this.member_coaches = false;
        break;
    }
  }

  viewStudent(std:Student){
    this.studentService.setCurrentStd(std);
  }
  viewCoach(coach:Coach){
    this.coachService.setCurrentCoach(coach);
  }
}
