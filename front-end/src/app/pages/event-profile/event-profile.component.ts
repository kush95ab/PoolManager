import { Component, OnInit } from '@angular/core';
import { HttpEnum } from '../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';
import { EventService } from '../../services/event.service';
import { Event } from '../../entities/event';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
import { log } from 'util';

@Component({
  selector: 'app-event-profile',
  templateUrl: './event-profile.component.html',
  styleUrls: ['./event-profile.component.css']
})
export class EventProfileComponent implements OnInit {
  eventId: number;
  eventname: string;
  description: string;
  eventdate: string;
  starttime: string;
  endtime: string;
  cordinator: string;
  contact: number;

  event: Event;
  editEvent:boolean = false;
  newEvent: boolean = true;
  profile: boolean = !this.newEvent;

  constructor(private route: ActivatedRoute, private router: Router, private eventService: EventService) { }

  ngOnInit() {
    if (this.profile) {
      this.event = this.eventService.getCurrentEvent();
      this.setEvent(this.event);
    } else {
      //add new event inits here
      console.log("adding new event");
      
    }

  }

  
  updateEvent(eve: Event) {
    let event = this.createEvent();
    this.eventService.updateEvent(event).then(() => {

      alert("student Successfully updated.");
      this.router.navigate(['/member']);
    }).catch(error => {
      alert("Error occured. " + error);
    })
  }


  insertEvent(eve:any){
    this.eventService.insertEvent(eve);    
  }
  createEvent(): Event {
    
    let event = new Event;
    
    event.eventName = this.eventname;
    event.eventDescription = this.description;
    event.eventStart_time = this.starttime;
    event.eventEnd_time = this.endtime;
    event.eventCoordinator = this.cordinator;
    event.eventContact = this.contact;
    
    return event;
  }

  setEvent(event:Event){

    this.eventId=event.eventId;
    this.eventname=event.eventName ;
    this.description=event.eventDescription;
    this.starttime= event.eventStart_time ;
    this.endtime=event.eventEnd_time;
    this.cordinator=event.eventCoordinator;
    this.contact=event.eventContact;
  }
}
