import { Injectable } from '@angular/core';
import { Event } from '../entities/event';
import { HttpBackendRequestService } from './http-backend-request.service';
import { HttpEnum } from '../utils/httpEnum';
import { Utils } from '../utils/utils';
import { Router } from '@angular/router';
import { log } from 'util';
import { range } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  eventList: Event[] = new Array();
  upcommingEvents: Event[] = new Array();
  pastEvents: Event[] = new Array();
  todayEvents: Event[] = new Array();
  // currentEvent: Event;

  constructor(private router: Router,
    private httpBackendRequest: HttpBackendRequestService) { }

  // get all the events' details

  getDatesEvents() {
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETEVENTS, null);
  }

  getEventes(): any {
    this.eventList = [];
    this.upcommingEvents = [];
    this.pastEvents = [];
    this.todayEvents = [];
    this.httpBackendRequest.realizarHttpPost(HttpEnum.GETEVENTS, null)
      .subscribe(
        (result) => {
          console.log("event service starting");

          if (result === null) {
            console.log("respond error");
          } else {
            let i = 0;
            while (result[i]) {
              let coa = Utils.convertDatabaseEventToEvent(result[i]);

              let date1 = result[i].eventDate.substring(0, 10);
              let currentDate = new Date();
              let today = currentDate.toISOString().substring(0, 10);

              // filtering events in to time range
              if (date1 > today) {
                this.upcommingEvents.push(coa);
              }
              else if (date1 < today) {
                this.pastEvents.push(coa);
              }
              else {
                this.todayEvents.push(coa);
              }

              this.eventList.push(coa);
              i = i + 1;
            }
          }
        },
        (err) => alert('getting companies error occured.. !')
      );
    // console.log("in get event service all", this.eventList);

    // console.log("in get event service upcoming", this.upcommingEvents);
    // console.log("in get event service past", this.pastEvents);
    // console.log("in get event service toady", this.todayEvents);
    var values = [this.eventList, this.upcommingEvents, this.pastEvents, this.todayEvents];
    return values;
  }



  // insert event details
  insertEvent(event) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.ADDEVENT, event)
        .subscribe(
          (result) => {
            alert("Successfully Event Inserted.");
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

  // update event details
  updateEvent(event) {
    let promise = new Promise((resolve, reject) => {
      this.httpBackendRequest.realizarHttpPost(HttpEnum.UPDATEEVENT, event)
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

  // viewevent helping functions
  //   setCurrentEvent(event: Event) {
  //     this.currentEvent = event;
  //   }
  //   getCurrentEvent() {
  //     return this.currentEvent;
  //   }

  // delete event details
  deleteEvent(event: Event) {
    console.log("delete event called on " + event.eventId);

    this.httpBackendRequest.realizarHttpPost(HttpEnum.DELEVENT, event).subscribe(
      (result) => {
        alert("Event Successfully Deleted.");
      },

      (err) => {
        alert("cannot delete event" + err);
        console.log(err);
      }
    );
  }
}
