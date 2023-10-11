import { Injectable } from '@angular/core';
import { AuthUserService } from '../auth/auth-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseURL='http://localhost:8080/coachHire/'
  constructor(private authService:AuthUserService,private http:HttpClient) { }

  getPersonalInformation(){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.user?.token}`
    });
    return this.http.get(this.baseURL+'personalArea?email='+this.authService.user?.email,{headers})
  }

  applyChange(profile:any){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.user?.token}`
    });
    return this.http.put(this.baseURL+'applyChange',profile,{headers})
  }

  deleteUser(id:number){
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authService.user?.token}`
    });
    return this.http.get(this.baseURL+'deleteUser?id='+id,{headers})
  }
}
