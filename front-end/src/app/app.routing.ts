import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { Error404Component } from './pages/error404/error404.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HelpComponent } from './pages/help/help.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { EventsComponent } from './pages/Admin/events/events.component';
import { CalanderComponent } from './components/calander/calander.component';
import { MembersComponent } from './pages/Admin/members/members.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { CoachProfileComponent } from './pages/coach-profile/coach-profile.component';
import { PoolmanagerProfileComponent } from './pages/poolmanager-profile/poolmanager-profile.component';
import { Profile } from 'selenium-webdriver/firefox';
import { EventProfileComponent } from './pages/event-profile/event-profile.component';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'help', component: HelpComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'event', component: EventsComponent },
  { path: 'calander', component: CalanderComponent },
  { path: 'member', component: MembersComponent },

  { path: 'student', component: StudentProfileComponent },
  { path: 'coach', component: CoachProfileComponent },
  { path: 'poolmanager', component: PoolmanagerProfileComponent },
  { path: 'create-event' , component : EventProfileComponent},
  { path: '**', component: Error404Component }


];

export const partialComponents = [];
