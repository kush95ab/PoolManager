import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { log } from 'util';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
    console.log("nav bar working");
    // console.log("this is current user", this.currentuser());
    if (this.authService.isUserLogged) {
      console.log("user logged in  nav");
      this.signedin = true;
      this.cUser = this.authService.getCurrentuser();
      console.log("this is current c user ", this.cUser);
    } else {
      this.signedin = false;
    }
  }
  cUser: number;
  signedin: boolean = false;

  ngOnInit() {
this.cUser;
console.log("init");

  }

  logout() {
    this.authService.logoutUser();
  }

  currentuser() {
    if (this.authService.isUserLogged()) {
      var currentu = this.authService.setLoggedUserObject();
      console.log(this.authService.setLoggedUserObject());

      return currentu;

    }
  }
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

}
