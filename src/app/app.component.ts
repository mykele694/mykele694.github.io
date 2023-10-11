import { Component } from '@angular/core';
import { AuthUserService } from './auth/auth-user.service';
import { Skills } from './moduls/skills.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coachHire'

  constructor(private authService:AuthUserService){}


  ngOnInit(): void {
    console.log("App On Init");
    
    if(localStorage.getItem('user')){
      const user=JSON.parse(localStorage.getItem('user')!)
      this.authService.createUser(user.email,user.token,user._expirationDates)

      if(this.authService.user?.token==null)
        this.authService.signOut()
    }
    else
     this.authService.signOut()
  }
}
