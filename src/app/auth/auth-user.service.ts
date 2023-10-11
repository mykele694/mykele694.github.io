import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../moduls/user.module';
import { Person } from '../moduls/person.module'; 
import { Router } from '@angular/router';
import { SignoutComponent } from '../components/signout/signout.component';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  baseURL='http://localhost:8080/coachHire/rest/auth/'
  signInURL='http://localhost:8080/coachHire/rest/auth/login'
  checkEmailURL='http://localhost:8080/coachHire/rest/auth/checkEmail'

  user:User|undefined|null
  registrationInfo:Person | undefined |null

  private isLogged=false

  constructor(private http:HttpClient,
    private router:Router,
    private dialog:MatDialog) { }

  isAuthenticated():boolean{
    return this.user?.token!=null
  }
  createUser(email:string,token:string,expirationDate:Date){
    this.user = new User(email,token,expirationDate)
    this.isLogged=true
  }
  initUser(email:string,password:string){
    this.registrationInfo=new Person(email,password,"","",new Date,false,null,null)
    return this.http.get(this.baseURL+'checkEmail'+"?email="+email)
  }
  registration(firstName:string,lastName:string,dob:Date,isCoach:boolean,hourlyRate:number|null,skills:any|null){
    this.registrationInfo=new Person(this.registrationInfo?.email!,this.registrationInfo?.password!,firstName,lastName,dob,isCoach,hourlyRate,skills)
    console.log(this.registrationInfo);
    return this.http.post(this.baseURL+'registration',this.registrationInfo)
  }
  dateToLocalDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  signIn(email:string,password:string){
    return this.http.post(this.baseURL+'login',{email:email,password:password,returnSecureToken:true})
  }
  signOut(){
    this.isLogged=false
    this.user=null
    localStorage.removeItem('user')
    this.router.navigate(['/signin'])
  }
  openLogoutDialog(): void {
    this.dialog.open(SignoutComponent, {
      width: '300px', // Adjust the width as needed
    });
  }
}
