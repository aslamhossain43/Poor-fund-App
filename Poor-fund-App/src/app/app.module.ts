import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonorsComponent } from './donors/donors.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './manage/manage.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
// FOR bootstrap
import { AppBootstrapModule } from './app-bootstrap.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DonorsComponent,
    ConsumersComponent,
    ContactComponent,
    ManageComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FOR BOOTSTRAP
     AppBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
