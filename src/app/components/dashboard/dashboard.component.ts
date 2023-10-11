import { Component } from '@angular/core';
import { AuthUserService } from 'src/app/auth/auth-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService:AuthUserService){}

  signOut(){
    this.authService.openLogoutDialog()
  }
}
