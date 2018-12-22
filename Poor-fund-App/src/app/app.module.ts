import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './manage/manage.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
// FOR bootstrap
import { AppBootstrapModule } from './app-bootstrap.module';
// AUTHENTICATION
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { MembersComponent } from './members/members.component';
// FOR FILE UPLOAD
import { HttpClientModule } from '@angular/common/http';
import { UploadFileService } from './consumers/consumers.upload.service';
import { ConsumerService } from './consumers/consumers.consumer-service';
// FOR MATERIAL
import 'hammerjs';
import { NgMaterialModule } from './app.material';
import { ViewCandidatesComponent } from './view-candidates/view-candidates.component';
import { ViewCandidateService } from './view-candidates/view-candidates.service';
import { GrantedListComponent } from './granted-list/granted-list.component';
import { NotGrantedListComponent } from './not-granted-list/not-granted-list.component';
import { GrantingInformationComponent } from './granting-information/granting-information.component';
import { AddMeAsDonorsComponent } from './add-me-as-donors/add-me-as-donors.component';
import { CurrentYearDonorsComponent } from './current-year-donors/current-year-donors.component';
import { LastYearDonorsComponent } from './last-year-donors/last-year-donors.component';
import { TotalDonorsComponent } from './total-donors/total-donors.component';
import { DonorsGrantingInformationComponent } from './donors-granting-information/donors-granting-information.component';
import { GrantedListService } from './granted-list/granted-list.service';
import { NotGrantedListService } from './not-granted-list/not-granted-list.service';
import { ManageGrantedListComponent } from './manage-granted-list/manage-granted-list.component';
import { ManageGrantedService } from './manage-granted-list/manage-granted-list.service';
import { ManageNotGrantedListComponent } from './manage-not-granted-list/manage-not-granted-list.component';
import { ManageNotGrantedListService } from './manage-not-granted-list/manage-not-granted-list.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ConsumersComponent,
    ContactComponent,
    ManageComponent,
    NavComponent,
    LoginComponent,
    SignupComponent,
    EmailComponent,
    MembersComponent,
    ViewCandidatesComponent,
    ManageGrantedListComponent,
    GrantedListComponent,
    NotGrantedListComponent,
    GrantingInformationComponent,
    AddMeAsDonorsComponent,
    CurrentYearDonorsComponent,
    LastYearDonorsComponent,
    TotalDonorsComponent,
    DonorsGrantingInformationComponent,
    ManageGrantedListComponent,
    ManageNotGrantedListComponent
  ],
  imports: [
    BrowserModule,
    // FOR BOOTSTRAP
    AppBootstrapModule,
    // FOR AUTHENTICATION
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    routes,
    // FOR FILE UPLOAD
    HttpClientModule,
    // FOR NG MATERIAL
    NgMaterialModule,
    // FOR FORM MODULE
    ReactiveFormsModule
  ],
  providers: [AuthGuard, AngularFireAuth, UploadFileService, ConsumerService, ViewCandidateService
  , ManageGrantedService, GrantedListService, NotGrantedListService, ManageNotGrantedListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
