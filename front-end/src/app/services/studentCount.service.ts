import { StudentCount } from '../models/StudentCount.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class StudentCountService {
  formData: StudentCount;

  stdcount:AngularFireList<any>;
  constructor(public db:AngularFireDatabase) {
    
   }
  getStudentCount() {
    this.stdcount=this.db.list('studentCount');
    return this.stdcount.snapshotChanges();

  }
}