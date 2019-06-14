import { Injectable } from '@angular/core';
import { Poolmanager } from '../entities/poolmanager';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PoolmanagerService {

  poolmanagerList: Poolmanager[] = new Array();
  
  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService) { }

    // get all the coachs' details
  getPoolmanagers() {
    this.poolmanagerList = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETPOOLMGRS, null)
      .subscribe(
        (result) => {
          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let plmgr = Utils.convertDatabasePoolmanagerToPoolmanager(result[i]);
              this.poolmanagerList.push(plmgr);
              i = i + 1;
            }
          }
        },
        () => alert('getting companies error occured.. !')
      );
  }

  // insert poolmanager details
  insertPoolmanager(poolmanager) {
    let promise = new Promise((resolve,reject) =>{
      this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDPOOLMGR, poolmanager)
      .subscribe(
        (result) => {
          alert("Successfully Student Inserted.");
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

  // delete poolmanager details
  deletePoolmanager(poolmanager: Poolmanager) {
    console.log("delete poolmanager called on " + poolmanager.poolmanagerNIC);

    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELPOOLMGR, poolmanager).subscribe(
      () => {
        alert("Poolmanager Successfully Deleted.");
      },

      (err) => {
        alert("cannot delete poolmanager" + err);
        console.log(err);
      }
    );
  }
}
