import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEnum } from '../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../entities/user';
import { Student } from '../../entities/student';
import { Coach } from '../../entities/coach';
import { Poolmanager } from '../../entities/poolmanager';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { StudentService } from '../../services/student.service';

import { Auth } from '../../entities/auth';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  // all user details
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
  choosen: boolean =false;
  Studentsignup: boolean=false;
  Coachsignup: boolean=false;
  Poolmanagersignup: boolean=false;

  constructor(private router: Router,private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService,
    private studentService: StudentService) { }

  ngOnInit() {
    this.image = "default.jpg";
    this.imageAddress = HttpEnum.BASEURL + this.image;
  }

  //selecting user type

  studentsignup(){
    this.Studentsignup = true;
    this.Coachsignup = false;
    this.Poolmanagersignup = false;
    this.choosen = true;
    this.usertype = "S";
  }
  coachsignup(){
    this.Studentsignup = false;
    this.Coachsignup = true;
    this.Poolmanagersignup = false;
    this.choosen = true;
    this.usertype = "C";
  }

  poolmanagersignup(){
    this.Studentsignup = false;
    this.Coachsignup = false;
    this.Poolmanagersignup = true;
    this.choosen = true;
    this.usertype = "P";
  }
  submitForm() {
    var userresult = this.userService.insertUser(this.createUser());
       
      let auth = new Auth(this.username,this.password);
      this.authService.getLoggingUser(auth);
      // console.log(auth);
      
    
    let student = this.createStudent();   
    student.setUserId(this.authService.getUser().userId);
    console.log(student);
    this.studentService.insertStudent(student);

    alert("Registration Successful.");
    this.router.navigate(['/login']);  
  }

  // function for image uploading
  selectFile(event) {
    this.selectedFiles = event.target.files;
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

  createUser() {
    let user = new User();
    user.userName = this.username;
    user.userPassword = this.password;
    user.userType = this.usertype;
    return user;
  }

  createStudent() {
    let student = new Student();

    student.setFirstName(this.fname);
    student.setLastName(this.lname);
    student.setFullName(this.fullname);
    student.setAddress(this.address);
    student.setEmail(this.email);
    student.setCellPhone(this.cellphone);
    student.setFixedPhone(this.fixedphone);
    student.setImgLink(this.image);
    student.setDescription(this.description);
    student.setDob(this.dob);
    student.setGender(this.gender);

    student.setStudentId(this.studentId);
    student.setStudentSchool(this.school);
    student.setParentName(this.parentname);
    student.setStudentGrade(this.grade);
    
    return student;
  }

  createCoach() {
    let coach = new Coach();
    coach.setFirstName(this.fname);
    coach.setLastName(this.lname);
    coach.setFullName(this.fullname);
    coach.setAddress(this.address);
    coach.setEmail(this.email);
    coach.setCellPhone(this.cellphone);
    coach.setFixedPhone(this.fixedphone);
    coach.setImgLink(this.image);
    coach.setDescription(this.description);
    coach.setDob(this.dob);
    coach.setGender(this.gender);

    coach.setNIC(this.NIC);
    coach.setOccupation(this.occupation);
    coach.setExperience(this.experience);
    
    return coach;
  }

  createPoolmanager() {
    let poolmanager = new Poolmanager();
    poolmanager.setFirstName(this.fname);
    poolmanager.setLastName(this.lname);
    poolmanager.setFullName(this.fullname);
    poolmanager.setAddress(this.address);
    poolmanager.setEmail(this.email);
    poolmanager.setCellPhone(this.cellphone);
    poolmanager.setFixedPhone(this.fixedphone);
    poolmanager.setImgLink(this.image);
    poolmanager.setDescription(this.description);
    poolmanager.setDob(this.dob);
    poolmanager.setGender(this.gender);

    poolmanager.setNIC(this.NIC);
    poolmanager.setExperience(this.experience);
    
    return poolmanager;
  }
}
