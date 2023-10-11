import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthUserService } from 'src/app/auth/auth-user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private authService:AuthUserService,private router:Router){
  }

  onSubmit(form:NgForm){
    const email=form.value.email
    const password=form.value.password
    console.log(form);
    this.authService.signIn(email,password).subscribe((data:any)=>{
      console.log(data)      
      this.authService.createUser(data.email,data.token,data.validationTime)
      localStorage.setItem('user',JSON.stringify(this.authService.user))
      this.router.navigate(['/home'])})
    }
  goToRegistration(){
    this.router.navigate(['/registration'])
  }
  isAuthenticated(){
    return this.authService.isAuthenticated()
  }
}
