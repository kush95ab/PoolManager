
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
import { log } from 'util';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  students: Student[];
  coaches: Coach[];
  poolmanagers: Poolmanager[];


  fname: string;
  lname: string;
  fullname: string;
  dob: string;
  gender: string;
  address: string;
  email: string;
  cellphone: number;
  fixedphone: number;
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
  member_poolmanagers: boolean = false;


  deleteAccount: boolean = false;
  confirmed: boolean = false;

  constructor(private router: Router, private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService,
    private studentService: StudentService, private coachService: CoachService,
    private poolmanagerService: PoolmanagerService) { }

  ngOnInit() {
    this.retreveStudents();
    this.retreveCoaches();
    this.retrevePoolManagers();
  }
  //function of selecting image file and uploading to system 

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




  //  functions of retreve members form database

  retreveStudents() {
    this.students = this.studentService.getStudents();
  }
  retreveCoaches() {
    this.coaches = this.coachService.getCoaches();
  }
  retrevePoolManagers() {
    this.poolmanagers = this.poolmanagerService.getPoolmanagers();
    console.log(this.poolmanagers);

  }





  //  functions of delete members from database

  deleteStudent(std: Student) {
    this.deleteAccount = true;
    if (this.confirmed) {
      this.studentService.deleteStudent(std);
      this.deleteAccount = false;
      this.confirmed=false;
    } else {
      this.deleteAccount = false;
      this.confirmed=false;
    }
  }

  deleteCoach(coach: Coach) {
    this.deleteAccount = true;
    if (this.confirmed) {
      this.coachService.deleteCoach(coach);
      this.deleteAccount = false;
      this.confirmed=false;
    } else {
      this.deleteAccount = false;
      this.confirmed=false;
    }
  }

  deletePoolmanager(plmgr: Poolmanager) {
    this.deleteAccount = true;
    if (this.confirmed) {
      this.poolmanagerService.deletePoolmanager(plmgr);
      this.deleteAccount = false;
      this.confirmed=false;
    } else {
      this.deleteAccount = false;
      this.confirmed=false;
    }
  }





  // functions of toggleing members tabs
  openMember(x: string) {
    switch (x) {
      case "member_coaches":
        this.member_coaches = true;
        this.member_students = false;
        this.member_poolmanagers = false;
        break;
      case "member_students":
        this.member_students = true;
        this.member_coaches = false;
        this.member_poolmanagers = false;
        break;
      default:
        this.member_students = false;
        this.member_coaches = false;
        this.member_poolmanagers = true;

        break;
    }
  }


  // functions of sending selected users to relevent user services
  viewStudent(std: Student) {
    this.studentService.setCurrentStd(std);
  }
  viewCoach(coach: Coach) {
    this.coachService.setCurrentCoach(coach);
  }
  viewPoolmanager(poolmanager: Poolmanager) {
    this.poolmanagerService.setCurrentPoolmanager(poolmanager);
  }

}
