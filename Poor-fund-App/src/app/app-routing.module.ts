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
const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'donors', component: DonorsComponent},
  {path: 'consumers', component: ConsumersComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
