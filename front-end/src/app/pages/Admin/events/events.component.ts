import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../../../services/upload-file.service';
import { HttpEnum } from '../../../utils/httpEnum';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../../../services/user.service';
import { AuthenticationService } from '../../../services/authentication.service';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../entities/event';

import { Auth } from '../../../entities/auth';
import { Router } from '@angular/router';
import { promise } from 'protractor';
// import { log, print } from 'util';
import { from } from 'rxjs';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router: Router, private uploadService: UploadFileService,
    private userService: UserService, private authService: AuthenticationService, private eventService: EventService) { }

  events: Event[];
  upcomingEvents: Event[];
  todayEvents: Event[];
  pastEvents: Event[];
  allEvents:any;

  eventId: number;
  eventName: string;
  eventDate: string;
  eventStart_time: string;
  eventEnd_time: string;
  eventCoordinator: string;
  eventContact: number;
  eventDescription: string;

  ngOnInit() {
    this.allEvents = this.eventService.getEventes();// [[all events array],[upcoming events array],[past],[today]]
    
    
    this.events=this.allEvents[0];
    this.upcomingEvents=this.allEvents[1];
    this.pastEvents=this.allEvents[2];
    this.todayEvents=this.allEvents[3];
    console.log("in event.ts");
  }




  //converting date format
  getDateTime(s: string): string {
    let date = new Date(s);
    let day = date.toDateString();
    console.log(day.substring(-1,10));
    console.log(day,day.length,day.indexOf('2'));
    
    return day.substring(-1,10);
  }
}
