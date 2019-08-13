import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../entities/event';
import { Router } from '@angular/router';


@Component({
  selector: 'app-event-bar',
  templateUrl: './event-bar.component.html',
  styleUrls: ['./event-bar.component.css']
})
export class EventBarComponent implements OnInit {

  constructor(private eventService: EventService) { }

  allEvents: any;
  todayEvents: Event[];

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
    this.todayEvents = this.allEvents[3];
    // console.log("today events ", this.todayEvents, " length : ", this.todayEvents.length);

  }

  //converting date format
  getDateTime(s: string): string {
    let date = new Date(s);
    let day = date.toDateString();
    console.log(day.substring(-1, 10));
    console.log(day, day.length, day.indexOf('2'));

    return day.substring(-1, 10);
  }

  //check if there are any evevnts today
  eventChecker():boolean {
    if (this.todayEvents.length == 0) {
      return false;
    } else {
      return true;
    }
  }

  // items =["item1","item2","item4","item3"];

}
