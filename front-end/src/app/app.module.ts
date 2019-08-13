import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*modules*/
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


/*components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { DailyScheduleComponent } from './components/daily-schedule/daily-schedule.component';
import { EventBarComponent } from './components/event-bar/event-bar.component';
import { CalanderComponent } from './components/calander/calander.component';
import { StudentCountComponent } from './components/student-count/student-count.component';
import { WaterLevelComponent } from './components/water-level/water-level.component';
import { PhValComponent } from './components/ph-val/ph-val.component';
import { ChlorineValComponent } from './components/chlorine-val/chlorine-val.component';

/*pages */
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpComponent } from './pages/help/help.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { EventsComponent } from './pages/Admin/events/events.component';
import { MembersComponent } from './pages/Admin/members/members.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CoachProfileComponent } from './pages/coach-profile/coach-profile.component';
import { PoolmanagerProfileComponent } from './pages/poolmanager-profile/poolmanager-profile.component';

/*routes*/
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';

/*services*/
import { DatePipe } from '@angular/common';
import { HttpBackendRequestService } from './services/http-backend-request.service';
import { AuthenticationService } from './services/authentication.service';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
// import { Observable } from 'rxjs/Observable';

export const config = {
  apiKey: "AIzaSyCITSncT0JQSy-eiJyIN9udrEsmna0Scqc",
  authDomain: "project-demo-7dce8.firebaseapp.com",
  databaseURL: "https://project-demo-7dce8.firebaseio.com",
  projectId: "project-demo-7dce8",
  storageBucket: "project-demo-7dce8.appspot.com",
  messagingSenderId: "87194304985",
  appId: "1:87194304985:web:44da20c42386dde5"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    Error404Component,
    HomeComponent,
    HeaderComponent,
    NavBarComponent,
    NavItemComponent,
    FooterComponent,
    AboutUsComponent,
    HelpComponent,
    SignUpComponent,
    AdminPanelComponent,
    DailyScheduleComponent,
    EventBarComponent,
    CalanderComponent,
    StudentCountComponent,
    WaterLevelComponent,
    PhValComponent,
    ChlorineValComponent,
    EventsComponent,
    MembersComponent,
    StudentProfileComponent,
    CoachProfileComponent,
    PoolmanagerProfileComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    FormsModule,
    // Observable
  ],
  providers: [DatePipe,AngularFireAuth, HttpBackendRequestService, AuthenticationService,AngularFireDatabaseModule,AngularFireAuthModule],
  bootstrap: [AppComponent] 
})
export class AppModule { }
