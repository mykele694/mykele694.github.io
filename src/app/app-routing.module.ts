import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DetailComponent } from './components/home/detail/detail.component';
import { SignoutComponent } from './components/signout/signout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { guardUserGuard } from './auth/guard-user.guard';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,children:[
    {path:'about',component:AboutComponent},
    {path:'home',component:HomeComponent},
    {path:'detail',children:[
      {path:':id',component:DetailComponent}
    ]},
    {path:'contact',children:[
      {path:':id',component:ContactComponent}
    ]},
    {path:'signin',component:SigninComponent},
    {path:'signout',component:SignoutComponent},
    {path:'registration',component:RegistrationComponent},
    {path:'profile',component:ProfileComponent,canActivate:[guardUserGuard]}
  ]},
  {path:'404',component:NotfoundComponent},
  {path:'**',redirectTo:'/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
