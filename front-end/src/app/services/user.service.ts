import { Injectable } from '@angular/core';
import { Utils } from '../utils/utils';
import { User } from '../entities/user';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Student } from '../entities/student';
import { Coach } from '../entities/coach';
import { Poolmanager } from '../entities/poolmanager';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // Current user variable
  currentUser: any;


  constructor(private httpBackendRequest: HttpBackendRequestService) {
  }


  ngOnInit() {
    // Set current user to null
    this.currentUser = null;
  }

  // Get current user
  getCurrentUser(): any {
    return this.currentUser;
  }

  // Set current user to Object model
  setCurrentUser(loggedUser: User, user: Object) {
    switch (loggedUser.userType) {
      case 'S':
        this.setUserForStudent(user);
        break;
      case 'C':
        this.setUserForCoach(user);
        break;
      case 'P':
        this.setUserForPoolmanager(user);
        break;
    }
  }

  // Set user details for a student
  private setUserForStudent(curStudent: Object) {
    this.currentUser = Utils.convertDatabaseStudentToStudent(curStudent);
  }

  // Set user details for a coach
  private setUserForCoach(curCoach: Object) {
    this.currentUser = Utils.convertDatabaseCoachToCoach(curCoach);
  }

  // Set user details for a poolmanager
  private setUserForPoolmanager(curPoolmanager: Object) {
    this.currentUser = Utils.convertDatabasePoolmanagerToPoolmanager(curPoolmanager);
  }

  // Insert user to database
  insertUser(user: Object) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDUSER, user)
      .subscribe(
        (result) => {
          alert('result deliverd to user service!')
          return 1;
        },
        (err) => alert('Error occured..1 Contact Administrations!')
      );

  }

  // Update current user details
  updateCurrentUserDetails(loggedUser: User, user: any) {
    switch (loggedUser.userType) {
      case 'S':
        this.updateStudentDetails(user);
        break;
      case 'C':
        this.updateCoachDetails(user);
        break;
      case 'P':
        this.updatePoolmanagerDetails(user);
        break;
    }
  }

  // Update student details
  private updateStudentDetails(student: Student) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATESTUDENT, student)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured..2 Contact Administrations!')
      );
  }

  // Update coach details
  private updateCoachDetails(coach: Coach) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATECOACH, coach)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured..3 Contact Administrations!')
      );
  }

  // Update poolmanager details
  private updatePoolmanagerDetails(poolmanager: Poolmanager) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATESTUDENT, poolmanager)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured..4 Contact Administrations!')
      );
  }

  // Delete user from database
  deleteUser(user: User) {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELETEUSER, user)
      .subscribe(
        (result) => {
          alert(result);
        },
        (err) => alert('Error occured..5 Contact Administrations!')
      );
  }

}
