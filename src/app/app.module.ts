import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { HeaderComponent } from './header/header.component';
import { LeftBoxComponent } from './left-box/left-box.component';
import { MiddleBoxComponent } from './middle-box/middle-box.component';
import { RightBoxComponent } from './right-box/right-box.component';

import { TwitterService } from './twitter.service'

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LeftMenuComponent,
    HeaderComponent,
    LeftBoxComponent,
    MiddleBoxComponent,
    RightBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService, TwitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
