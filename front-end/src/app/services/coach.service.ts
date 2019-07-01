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
  currentCoach: Coach;

  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService) { }

  // get all the coachs' details
  getCoaches(): Coach[] {
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
    return this.coachList;
  }

  // insert coach details
  insertCoach(coach) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDCOACH, coach)
        .subscribe(
          (result) => {
            alert("Successfully Coach Inserted.");
            this.router.navigate(['/login']);
            resolve(result);
          },
          (err) => {
            alert('Error occured.. Contact Administrations!');
            reject(err);
          }
        );
    });
    return promise;
  }

  // update coach details
  updateCoach(coach) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATECOACH, coach)
        .subscribe(
          (result) => {
            alert("Successfully Student Inserted.");
            // this.router.navigate(['/login']);
            resolve(result);
          },
          (err) => {
            alert('Error occured.. Contact Administrations!');
            reject(err);
          }
        );
    });
    return promise;
  }

  // viewcoach helping functions
  setCurrentCoach(coach: Coach) {
    this.currentCoach = coach;
  }
  getCurrentCoach() {
    return this.currentCoach;
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
