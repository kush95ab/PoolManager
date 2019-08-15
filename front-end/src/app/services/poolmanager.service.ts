import { Injectable } from '@angular/core';
import { Poolmanager } from '../entities/poolmanager';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';
import { realpath } from 'fs';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class PoolmanagerService {

  poolmanagerList: Poolmanager[] = new Array();
  currentPoolmanager: Poolmanager;

  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService) { }

  // get all the poolmanagers' details
  getPoolmanagers(): Poolmanager[] {
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
        () => alert('getting Poolmanagers error occured.. !')
      );
      console.log("getting pool managers at poolmanagerservice");
      
      console.log(this.poolmanagerList);
      
    return this.poolmanagerList;
  }

  // insert poolmanager details
  insertPoolmanager(poolmanager) {
    console.log(poolmanager);
    
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDPOOLMGR, poolmanager)
        .subscribe(
          (result) => {
            alert("Successfully Pool Manager Inserted.");
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


  

  // update poolmanager details
  updatePoolmanager(poolmanager:Poolmanager) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATEPOOLMGR, poolmanager)
        .subscribe(
          (result) => {
            alert("Successfully Poolmanager Inserted.");
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

  // return the selected poolmanager from the list
  getCurrentPoolmanager() {
    return this.currentPoolmanager;
  }

  //keep a record of currently selected poolmanager
  setCurrentPoolmanager(poolmanager: Poolmanager) {
    this.currentPoolmanager = poolmanager;
  }

  // delete poolmanager details
  deletePoolmanager(poolmanager: Poolmanager) {
    console.log("delete poolmanager called on " + poolmanager.poolmanagerFullname);

    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELPOOLMGR, poolmanager).subscribe(
      () => {
        alert("Poolmanager Successfully Deleted.");
      },

      (err) => {
        alert("cannot delete poolmanager");
        console.log(err);
      }
    );
  }
}
