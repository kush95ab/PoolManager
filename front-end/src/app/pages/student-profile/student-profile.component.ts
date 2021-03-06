import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEnum } from '../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../entities/user';
import { Student } from '../../entities/student';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { StudentService } from '../../services/student.service';


import { Auth } from '../../entities/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  // all user details
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

  //unique for students
  studentId: string;
  school: string;
  parentname: string;
  grade: string;
  admissionDate: string;
  sub: any;


  student: Student;

  selectedFiles: FileList;
  currentFileUpload: File;
  imageAddress: string;

  editStudent:boolean=true;

  constructor(private route: ActivatedRoute, private router: Router, private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService,
    private studentService: StudentService) { }

  ngOnInit() {
    this.student = this.studentService.getCurrentStudent();
    console.log(this.student.studentId);
    this.image = "default.jpg";
    this.imageAddress = HttpEnum.BASEURL + this.image;
  }

  UpdateStudent(std:Student) {

    let student = this.createStudent(std);
    console.log("this is ",student);
    this.studentService.updateStudent(student).then(() => {

      alert("student Successfully updated.");
      this.router.navigate(['/member']);
    }).catch(error => {
      alert("Error occured. " + error);
    })
    
    // this.router.navigate(['/member'] );
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

  createStudent(std:Student) {
    let student = new Student();

    student.setFirstName(std.studentFname);
    student.setLastName( std.studentLname);
    student.setFullName( std.studentFullname);
    student.setAddress( std.studentAddress);
    student.setEmail( std.studentEmail);
    student.setCellPhone( std.studentCellPhone);
    student.setFixedPhone( std.studentFixedPhone);
    student.setImgLink( std.studentImgLink);
    student.setDescription( std.studentDescription);
    student.setDob( std.studentDOB);
    student.setGender( std.studentGender);

    student.setStudentId( std.studentId);
    student.setStudentSchool( std.studentSchool);
    student.setParentName( std.studentParentName);
    student.setStudentGrade( std.studentGrade);

    console.log(student, "in create student");
    return student;
  }

  editstudent(){
    this.editStudent=false;
  }

}
