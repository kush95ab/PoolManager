import { Injectable } from '@angular/core';
import { User } from '../entities/user';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';

import { HttpEnum } from '../utils/httpEnum';
import { HttpBackendRequestService } from './http-backend-request.service';
import { Auth } from '../entities/auth';
import { UserService } from './user.service';
import { log } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userAuth: User;
  private loggeduserId:number;

  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService,
    private userService: UserService) { }

  ngOnInit() {
    this.userAuth = null;
  }

  getUser(): User {
    return this.userAuth;
  }

  getCurrentuser():number{
    console.log("getting logged user id");
    
    this.loggeduserId=parseInt(localStorage.getItem("loggeduserId"));
    console.log(this.loggeduserId);
    return this.loggeduserId;
  }

  setUser(userAuth: Object) {
    this.userAuth = Utils.convertDatabaseUserToUser(userAuth);
    localStorage.setItem("loggeduserId",this.userAuth.userId.toString());
    console.log("current user is set to", this.userAuth.userId.toString());
    
  }

  getLoggingUser(authData: Auth) {
    let promise = new Promise((resolve, reject) => {

      this.httpBackendRequest.realizarHttpPost(HttpEnum.AUTH, authData)
        .subscribe(
          (result) => {
            if (result === null) {
              alert('Login credentials are not correct.');
              reject();
            } else {
              resolve();
              alert(result)
              this.setUser(result);
              console.log("Login credentials ok");
            }
          },
          (err) => {
            alert('Error occured.. Contact Administrations!');
          }
        );
    })
    return promise;
  }

  loginUser(authData: Auth) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.AUTH, authData)
      .subscribe(
        (result) => {
          if (result === null) {
            alert('Login credentials are not correct.');
          } else {
            this.setUser(result);
            this.setLoggedUserObject();
            console.log("Login credentials ok")
            this.router.navigate(['/home']);
          }
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );
  }

  setLoggedUserObject(){

    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETUSER, this.userAuth)
      .subscribe(
        (result) => {
          if (result === null) {
            // alert('error.');
          } else {
            this.userService.setCurrentUser(this.userAuth, result);
          }
        },
        (err) => alert('Error occured.. Contact Administrations!')
      );
  }

  isUserLogged(): Boolean {
    if (!this.userAuth) {
      // alert('User should be logged.');
      this.router.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }

  // getLoggedUserType(): string {
  //   return this.userAuth.userType;
  // }

  logoutUser() {
    this.userAuth = null;
    this.userService.currentUser = null;
    this.router.navigate(['/login']);
  }
 
}
