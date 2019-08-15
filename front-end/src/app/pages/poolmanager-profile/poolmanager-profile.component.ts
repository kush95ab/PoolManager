import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../services/upload-file.service';
import { HttpEnum } from '../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { User } from '../../entities/user';
import { Poolmanager } from '../../entities/poolmanager';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';
import { PoolmanagerService } from '../../services/poolmanager.service';


import { Auth } from '../../entities/auth';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-poolmanager-profile',
  templateUrl: './poolmanager-profile.component.html',
  styleUrls: ['./poolmanager-profile.component.css']
})
export class PoolmanagerProfileComponent implements OnInit {
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

  poolmanager:Poolmanager;
  //unique for coach and poolmanager
  NIC: string;
  occupation: string;
  experience: string;
  selectedFiles: FileList;
  currentFileUpload: File;
  imageAddress: string;

  editPoolmanager:boolean=true;

  constructor(private router: Router, private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService,
    private poolmanagerService: PoolmanagerService) { }

  ngOnInit() {
    this.poolmanager= this.poolmanagerService.getCurrentPoolmanager();
    console.log(this.poolmanager.poolmanagerNIC);
    this.image = "default.jpg";
    this.imageAddress = HttpEnum.BASEURL + this.image;
  }
  UpdatePoolmanager() {

    let poolmanager = this.createPoolmanager();
    console.log(poolmanager);
    this.poolmanagerService.updatePoolmanager(poolmanager).then(() => {

      alert("Registration Successful.");
      this.router.navigate(['/member']);
    }).catch(error => {
      alert("Error occured. " + error);
    })
    
    // this.router.navigate(['/member']);
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

  editpoolmanager(){
    this.editPoolmanager=false;
  }


}
