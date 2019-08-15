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
    console.log("run ngonit");

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
    // this.deleteAccount = true;
    this.confirmed = confirm("Are you sure you want to close this account permanently?");
    // console.log("after : ", this.confirmed);
    if (this.confirmed) {

      this.studentService.deleteStudent(std);
      this.userService.deleteUser(this.createUserfromstd(std));

      // console.log("before ", this.students);
      for (var i = 0; i < this.students.length; i++) {
        if (this.students[i]["studentId"] = std.studentId) {
          this.students.splice(i, 1);
        }
      }

      // console.log("after ",this.students);
      this.deleteAccount = false;
      this.confirmed = false;
    } else {
      this.deleteAccount = false;
      this.confirmed = false;
    }
    this.ngOnInit();
  }

  deleteCoach(coach: Coach) {
    this.confirmed = confirm("Are you sure you want to close this account permanently?");
   
    // this.deleteAccount = true;
    if (this.confirmed) {
      this.coachService.deleteCoach(coach);
      this.userService.deleteUser(this.createUserfromCoach(coach))
      
      for (var i = 0; i < this.coaches.length; i++) {
        if (this.coaches[i]["coachNIC"] = coach.coachNIC) {
          this.coaches.splice(i, 1);
        }
      }

      this.deleteAccount = false;
      this.confirmed = false;
    } else {
      this.deleteAccount = false;
      this.confirmed = false;
    }
    this.ngOnInit();
  }

  deletePoolmanager(plmgr: Poolmanager) {
    // this.deleteAccount = true;
    this.confirmed = confirm("Are you sure you want to close this account permanently?");

    if (this.confirmed) {
      this.poolmanagerService.deletePoolmanager(plmgr);
      this.userService.deleteUser(this.createUserfromPoolmgr(plmgr));
      
      for (var i = 0; i < this.poolmanagers.length; i++) {
        if (this.poolmanagers[i]["poolmanagerNIC"] = plmgr.poolmanagerNIC) {
          this.poolmanagers.splice(i, 1);
        }
      }
      this.deleteAccount = false;
      this.confirmed = false;
    } else {
      this.deleteAccount = false;
      this.confirmed = false;
    }
    this.ngOnInit();
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

  // for sending user objects to user delete functions
  createUserfromstd(std: Student) {
    var usr = new User;
    usr.userId = std.userId;
    usr.userName = "";
    usr.userPassword = "";
    usr.userType = "S";
    usr.userEmail = std.studentEmail;
    return usr;
  }

  createUserfromCoach(std: Coach) {
    var usr = new User;
    usr.userId = std.userId;
    usr.userName = "";
    usr.userPassword = "";
    usr.userType = "S";
    usr.userEmail = std.coachEmail;
    return usr;
  }
  createUserfromPoolmgr(std: Poolmanager) {
    var usr = new User;
    usr.userId = std.userId;
    usr.userName = "";
    usr.userPassword = "";
    usr.userType = "S";
    usr.userEmail = std.poolmanagerEmail;
    return usr;
  }

}
