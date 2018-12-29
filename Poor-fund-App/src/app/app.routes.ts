import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ConsumersComponent } from './consumers/consumers.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './manage/manage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.service';
import { MembersComponent } from './members/members.component';
import { ModuleWithProviders } from '@angular/core';
import { EmailComponent } from './email/email.component';
import { ViewCandidatesComponent } from './view-candidates/view-candidates.component';
import { GrantedListComponent } from './granted-list/granted-list.component';
import { NotGrantedListComponent } from './not-granted-list/not-granted-list.component';
import { GrantingInformationComponent } from './granting-information/granting-information.component';
import { AddMeAsDonorsComponent } from './add-me-as-donors/add-me-as-donors.component';
import { CurrentYearDonorsComponent } from './current-year-donors/current-year-donors.component';
import { LastYearDonorsComponent } from './last-year-donors/last-year-donors.component';
import { TotalDonorsComponent } from './total-donors/total-donors.component';
import { DonorsGrantingInformationComponent } from './donors-granting-information/donors-granting-information.component';
import { ManageGrantedListComponent } from './manage-granted-list/manage-granted-list.component';
import { ManageNotGrantedListComponent } from './manage-not-granted-list/manage-not-granted-list.component';
import { CurrentYearGranredListComponent } from './current-year-granred-list/current-year-granred-list.component';
import { LastYearGrantedListComponent } from './last-year-granted-list/last-year-granted-list.component';
import { CurrentYearNotGrantedListComponent } from './current-year-not-granted-list/current-year-not-granted-list.component';
import { LastYearNotGrantedListComponent } from './last-year-not-granted-list/last-year-not-granted-list.component';
import { ManageCandidatesComponent } from './manage-candidates/manage-candidates.component';
import { ManageDonorsComponent } from './manage-donors/manage-donors.component';
export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donorsGrantingInformation', component: DonorsGrantingInformationComponent },
  { path: 'addMeAsDonors', component: AddMeAsDonorsComponent },
  { path: 'currentYearDonors', component: CurrentYearDonorsComponent },
  { path: 'lastYearDonors', component: LastYearDonorsComponent },
  { path: 'lastYearDonors', component: LastYearDonorsComponent },
  { path: 'totalDonors', component: TotalDonorsComponent },

  { path: 'grantingInformation', component: GrantingInformationComponent },
  { path: 'addme', component: ConsumersComponent },
  { path: 'currentYearGrantedList', component: CurrentYearGranredListComponent },
  { path: 'lastYearGrantedList', component: LastYearGrantedListComponent },
  { path: 'grantedList', component: GrantedListComponent },
  { path: 'currentYearNotGrantedList', component: CurrentYearNotGrantedListComponent },
  { path: 'lastYearNotGrantedList', component: LastYearNotGrantedListComponent },
  { path: 'notGrantedList', component: NotGrantedListComponent },
  { path: 'view-candidates', component: ViewCandidatesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: 'manage-grant', component: ManageGrantedListComponent},
  { path: 'manage-notGrant', component: ManageNotGrantedListComponent},
  { path: 'manage-candidates', component: ManageCandidatesComponent},
  { path: 'manage-donors', component: ManageDonorsComponent},
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



