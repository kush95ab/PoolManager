import { Component, OnInit } from '@angular/core';
import { MonthPickerComponent } from 'ngx-bootstrap';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {

  constructor() { }

  today: Date;
  currentMonth: number;
  currentYear: number;

  selectMonth: number;
  selectYear: number;
  monthAndYear: any;

  months:string[];

  ngOnInit() {
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
    var selectYear = document.getElementById("year").getAttribute("value");
    var selectMonth = document.getElementById("month").getAttribute("value");
    console.log(selectYear);
    console.log(selectMonth);
    
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var monthAndYear = document.getElementById("monthAndYear");
    this.showCalendar(currentMonth, currentYear);

  }


  next() {
    this.currentYear = (this.currentMonth === 11) ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = (this.currentMonth + 1) % 12;

    this.showCalendar(this.currentMonth, this.currentYear);
  }

  previous() {
    this.currentYear = (this.currentMonth === 0) ? this.currentYear - 1 : this.currentYear;
    this.currentMonth = (this.currentMonth === 0) ? 11 : this.currentMonth - 1;
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  jump() {
    console.log(this.selectYear);
    console.log(this.selectMonth);
    this.currentYear = (this.selectYear);
    this.currentMonth = (this.selectMonth);//parseInt
    this.showCalendar(this.currentMonth, this.currentYear);
  }

  showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    // this.monthAndYear.innerHTML = +56*months[month] + " " + year;///////////////////////////////////////////////*********** */
    this.selectYear = year.toString();
    this.selectMonth = month.toString();

    console.log(this.selectYear);
    console.log(this.selectMonth);

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
      // creates a table row
      let row = document.createElement("tr");

      //creating individual cells, filing them up with data.
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (date > daysInMonth) {
          break;
        }

        else {
          let cell = document.createElement("td");
          let cellText = document.createTextNode(date.toString());
          if (date === this.today.getDate() && year === this.today.getFullYear() && month === this.today.getMonth()) {
            cell.classList.add("bg-info");
          } // color today's date
          cell.appendChild(cellText);
          row.appendChild(cell);
          date++;
        }


      }

      tbl.appendChild(row); // appending each row into calendar body.
    }

  }





}
