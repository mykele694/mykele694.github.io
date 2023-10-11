import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient,HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SigninComponent } from './components/signin/signin.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule, matFormFieldAnimations} from '@angular/material/form-field';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { DetailComponent } from './components/home/detail/detail.component';
import { SignoutComponent } from './components/signout/signout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './components/profile/profile.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    DashboardComponent,
    SigninComponent,
    NotfoundComponent,
    RegistrationComponent,
    DetailComponent,
    SignoutComponent,
    ProfileComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatCardModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
