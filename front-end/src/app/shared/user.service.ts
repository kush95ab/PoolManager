import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../entities/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'
import { promise } from 'protractor';
import { Subject } from 'rxjs';
import { database } from 'firebase';
import { firestore } from 'firebase';
import * as firebase from 'firebase';

import { HttpBackendRequestService } from '../services/http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  items: Observable<any[]>;
  private responseData: any
  public response = new Subject<any>();
  public userState = new Subject<any>();
  private userData: any;
  private authToken: any;
  private role: Promise<string>;



  constructor(
    private http: HttpClient,
    public router: Router,

  ) {
    //Login, Sign Up response listener for flash messages
    this.response.subscribe(value => {
      console.log("came here 1");
      this.responseData = value;
    });

    //Auth state change listener for back end use
    /*
    firebase.auth.auth.onAuthStateChanged((userState) => {
      console.log("auth state changed");
      if(userState){
        var promise = userState.getIdToken();
        promise.then(val =>{
        console.log("verify ID ");
        let headers = new HttpHeaders();
        headers.append("Content-Type","application/json");
        return this.http.post(environment.apiBaseUrl+"verifyID", val, {headers:headers}).pipe(map((response: Response) => response));
          
        });
      
  }
});
*/
  }

  //user login function
  postUser(user: User) {
    // this.ngProgress.start();
    console.log("user login called");
    console.log(user);

    var promise = firebase.auth().signInWithEmailAndPassword(user.userEmail, user.userPassword);
    promise.then(res => {
      console.log(res);
      //check if the user's email is verified. if not, show an error message.
      if (res.operationType == "signIn" && res.user.emailVerified == false && res.user != null) {

        this.responseData = "Email not verified";
        this.response.next(this.responseData);

        this.signOutUser();
        console.log("came to redirect route");
        // this.ngProgress.done();
        return
        //check if the user's email is verified. if not, show an error message.
      } else if (res.operationType == "signIn" && res.user.emailVerified == true && res.user != null) {
        console.log("signing in user");

        this.responseData = res;
        this.response.next(this.responseData);

        firebase.auth().onAuthStateChanged((userState) => {
          console.log("auth state changed");
          if (userState) {

            //Get signed in user ID and send to back end to create a session
            var promise = userState.getIdToken(true);
            promise.then(val => {
              console.log("verify ID called");

              let headers = new HttpHeaders();
              headers.append("Content-Type", "application/json");
              var data = {
                token: val,
                user_role: user
              }
              // this.ngProgress.inc(0.5);
              //route for production
              return this.http.post("authenticate", data, { headers: headers })

              //for dev purposes
              return this.http.post(environment.apiBaseUrl + "Authenticate", data, { headers: headers })

                .subscribe((data: any) => {
                  if (data.success) {
                    this.storeUserData(data.token);
                    this.userData = this.getUserData();
                    //var role = this.getUserFromDB(this.userData.uid);
                    this.role = this.getUserTokenResult();
                    this.role.then((val: any) => {

                      /*
                      var user_ref = database().ref('/users');
                      user_ref.once('value').then(snapshot => {
                      console.log(snapshot);
                      if (snapshot.child(this.userData.uid).exists()) {
                      var role = snapshot.child(this.userData.uid).val().user_role;
                      */
                      //Check for the user Role
                      if (val == "user") { //If general user, load user profile
                        console.log("here the uid");
                        console.log(this.userData.uid);
                        this.router.navigate(['/user-profile', this.userData.displayName]);
                        // this.ngProgress.done();
                      } else if (val == "cr") { //if CR, load CR dashboard
                        console.log("CR profile found");
                        console.log(this.userData.uid);
                        this.router.navigate(['/crdashboard']);
                        // this.ngProgress.done();
                      } else if (val == "treas") { //if Treasurer, load CR dashboard
                        console.log("treasurer profile found");
                        console.log(this.userData.uid);
                        this.router.navigate(['/account']);
                        // this.ngProgress.done();
                      } else if (val == "admin") { //if admin, load admin dashboard
                        console.log("admin profile found");
                        console.log(this.userData.uid);
                        this.router.navigate(['/adminlayout']);
                        // this.ngProgress.done();
                      } else {
                        console.log("incorrect user role found");
                        // this.ngProgress.done();

                      }
                    }).catch(function (error) {
                      //this.role_db = "";
                      console.log(error);
                      // this.ngProgress.done();
                    });

                  }
                  else {
                    console.log(data.error);
                    // this.ngProgress.done();
                  }
                });
            })
          }
        })
      }
    }).catch((err) => {
      console.log("logging error");
      console.log(err);
      this.responseData = err;
      this.response.next(this.responseData);
      // this.ngProgress.done();

    });

    //return this.http.post(environment.apiBaseUrl+"login" , user).pipe(map((response: Response) => response));   
  }


  //Get current user data
  getUserData() {
    //console.log(firebase.auth.auth.currentUser);
    //console.log("get user data function called")
    return firebase.auth().currentUser;
  }

  /*
    getUserFromDB(pass_uid: string) {
      this.role_db = "";
      console.log("get user from db called");
      var user_ref = database().ref('/users');
      user_ref.once('value').then(snapshot => {
        console.log(snapshot);
        if (snapshot.child(pass_uid).exists()) {
          this.role_db = snapshot.child(pass_uid).val().user_role;
          //console.log(obj);
          return this.role_db;
        } else {
          this.role_db = "";
          console.log("user not found");
          return this.role_db;
        }
      }).catch(function (error) {
        this.role_db = "";
        console.log(error);
      });
      return this.role_db;
    }
  */

  async getUserTokenResult() {
    var roleFromToken = "";
    console.log("get user id token result called");
    await firebase.auth().currentUser.getIdTokenResult(true)
      .then((idTokenResult) => {
        // Confirm the user is an Admin.
        console.log(idTokenResult.claims.userRole);
        roleFromToken = idTokenResult.claims.userRole;
      })
      .catch((error) => {
        console.log(error);
      });
    return roleFromToken;
  }

 
  /*
  signupUser(user: User) {
    this.createUserInDatabase(user);
    
        console.log("user signup called");
        console.log(user);
    
        //let headers = new HttpHeaders();
        //headers.append("Content-Type","application/json");
        //headers.append("Content-Type","text/plain");
        //{headers:headers}
    
        var promise = firebase.auth.auth.createUserWithEmailAndPassword(user.email, user.password)
        promise.then(res => {
          console.log(res);
    
          this.responseData = res;
          this.response.next(this.responseData);
    


          
          if (res.operationType == "signIn" && res.user != null) {
            console.log("signing up user");
    
            res.user.sendEmailVerification().then(res => {
    
              this.createUserInDatabase(user);
              this.responseData = "Email not verified";
              this.response.next(this.responseData);
              //this.router.navigateByUrl('/user-profile');
            })
          }
        }).catch(
          (err) => {
            console.log("logging error");
            console.log(err);
            this.responseData = err;
            this.response.next(this.responseData);
    
          });
    
        //return this.http.post(environment.apiBaseUrl+"login" , user).pipe(map((response: Response) => response));   
        }
      */


  //sign out user function
  signOutUser() {
    // this.ngProgress.start();
    firebase.auth().signOut().then(res => {
      this.authToken = null;
      localStorage.clear();
      this.router.navigateByUrl('/home');
      // this.ngProgress.done();
    }).catch(function (error) {
      // An error happened.
    });
  }

  //user signup function
  signupUser(user: User) {
    // this.ngProgress.start();
    // send data to database
    console.log("create user in database called");
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    var data = { user }

    //for production - 
    //return this.http.post("signUp", data, { headers: headers }).subscribe((res: any) => {
    //send post request to backend
    //for dev purposes
    return this.http.post(environment.apiBaseUrl + "signUp", data, { headers: headers }).subscribe((res: any) => {
      console.log(res)

      this.responseData = res;
      this.response.next(this.responseData);

      if (res.operationType == "signIn" && res.user != null) {

        console.log("signing up user");

        var promise = firebase.auth().signInWithEmailAndPassword(user.userEmail, user.userPassword);
        promise.then(res => {
          var currentUser = this.getUserData();
          currentUser.sendEmailVerification();
          this.responseData = "Email not verified";
          this.response.next(this.responseData);
          this.signOutUser();
          this.router.navigate(['/home']);
          // this.ngProgress.done();
        })

      } else if (res.operationType == "error") {
        console.log(res.msg);
        this.responseData = res.msg;
        this.response.next(this.responseData);
        // this.ngProgress.done();
      }
    });


  }
  //user signup function
  signupUserAdmin(user: User) {
    // this.ngProgress.start();
    // send data to database
    console.log("create user in database called");
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    var data = { user }

    //for production - 
    //return this.http.post("signUp", data, { headers: headers }).subscribe((res: any) => {
    //send post request to backend
    //for dev purposes
    return this.http.post(environment.apiBaseUrl + "signUp", data, { headers: headers }).subscribe((res: any) => {
      console.log(res)

      this.responseData = res;
      this.response.next(this.responseData);

      if (res.operationType == "signIn" && res.user != null) {
        var role = data.user.userType
        if (role == "cr") {
          var updates = {};
          updates['communityRep'] = "present";
          database().ref("Mandatory").update(updates);
        } else if (role == "treas") {
          var updates = {};
          updates['treasurer'] = "present";
          database().ref("Mandatory").update(updates);
        }

        console.log("signing up user");

        var promise = firebase.auth().signInWithEmailAndPassword(user.userEmail, user.userPassword);
        promise.then(res => {
          var currentUser = this.getUserData();
          currentUser.sendEmailVerification();
          this.responseData = "Email not verified";
          this.response.next(this.responseData);
          this.signOutUser();
          // this.ngProgress.done();
        })

      }
    });


  }

  resetPassword(email: string) {
    console.log(email);
    firebase.auth().sendPasswordResetEmail(email)
      .then(val => {
        console.log("email sent")
        this.responseData = "Password reset link sent to email";
        this.response.next(this.responseData);
        this.router.navigate(['/login']);
      }).catch(error => {
        console.log(error);
        this.responseData = error;
        this.response.next(this.responseData);
      })
  }


  deleteuserAdmin(id, role) {
    // this.ngProgress.start();
    // send data to database
    console.log("create user in database called");
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    var data = {
      'userid': id
    }

    //for production - 
    //return this.http.post("signUp", data, { headers: headers }).subscribe((res: any) => {
    //send post request to backend
    //for dev purposes
    return this.http.post(environment.apiBaseUrl + "deleteUser", data, { headers: headers }).subscribe((res: any) => {
      console.log(res)

      this.responseData = res;
      this.response.next(this.responseData);
      if (res.success) {
        console.log("user delete backend success");
        var deluserRef = database().ref().child('users/' + id);
        if (deluserRef != undefined) {
          deluserRef.remove().then(res => {
            var mandartoryRef = database().ref().child("Mandatory");
            mandartoryRef.once('value', snapshot => {
              if (role == "cr") {
                if (snapshot.child("communityRep").val() === "present") {
                  console.log("update role");
                  var updates = {};
                  updates["communityRep"] = "absent";
                  database().ref("Mandatory").update(updates);
                }
              } else if (role == "treas") {
                if (snapshot.child("treasurer").val() === "present") {
                  console.log("update role");
                  var updates = {};
                  updates["treasurer"] = "absent";
                  database().ref("Mandatory").update(updates);
                }
              }
            }).catch(error => {
              console.log(error);
            })
          })
        }
      }
    })


  }





  storeUserData(token) {
    localStorage.setItem('id_token', token);
    this.authToken = token;
    console.log(this.authToken);
  }

}


