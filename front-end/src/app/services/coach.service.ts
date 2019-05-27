import { Injectable } from '@angular/core';
import { Coach } from '../entities/coach';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CoachService {
  
  coachList: Coach[] = new Array();
  
  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService) { }

    // get all the coachs' details
  getCoaches() {
    this.coachList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETCOACHES, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let coa = Utils.convertDatabaseCoachToCoach(result[i]);
              this.coachList.push(coa);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting companies error occured.. !')
      );
  }

  // insert coach details
  insertCoach(coach) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDCOACH, coach)
      .subscribe(
        (result) => {
          alert("Successfully Student Inserted.");
          this.router.navigate(['/login']);
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );
  }

  // delete coach details
  deleteCoach(coach: Coach) {
    console.log("delete coach called on " + coach.coachNIC);

    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELCOACH, coach).subscribe(
      (result) => {
        alert("Coach Successfully Deleted.");
      },

      (err) => {
        alert("cannot delete coach" + err);
        console.log(err);
      }
    );
  }
}
