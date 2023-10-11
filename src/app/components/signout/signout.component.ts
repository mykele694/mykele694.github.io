import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { inject } from '@angular/core';
import { AuthUserService } from 'src/app/auth/auth-user.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent {

  constructor(private authService:AuthUserService){}

  router = inject(Router)

  signOut(){
    this.authService.signOut()
  }
  
}
