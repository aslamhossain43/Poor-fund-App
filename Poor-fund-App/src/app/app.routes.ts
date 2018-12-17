import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonorsComponent } from './donors/donors.component';
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
export const router: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'donors', component: DonorsComponent },
  { path: 'addme', component: ConsumersComponent },
  { path: 'view-candidates', component: ViewCandidatesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'manage', component: ManageComponent, canActivate: [AuthGuard] },
  { path: 'members', component: MembersComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



