import { Component, OnInit, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/auth/auth-user.service';
import { Skills } from 'src/app/moduls/skills.module';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  items:{skill:Skills,flag:boolean}[]=[]
  skills:Skills[]=Object.values(Skills)

  checked=false
  registration=false
  advice=false
  password=""
  passwordValidate=""
  constructor(private authService:AuthUserService){
  }
  
  ngOnInit(): void {
    this.skills.forEach( (value)=> {
      this.items.push({skill:value,flag:false})
    })
  }

  router=inject(Router)

  isAuthenticated(){
    return this.authService.isAuthenticated()
  }

  onSignUp(form:NgForm){
    console.log("registration:"+this.registration);
    
    const email=form.value.email
    const password=form.value.password
    const passwordValidate=form.value.passwordValidate
    console.log(form);
    this.authService.initUser(email,password).subscribe(data=>
      { console.log("data from initUser:"+data);
        if(data==true)
          this.registration=true
        else
          this.advice=true
      })
    console.log("registration:"+this.registration);
  }
  getCheckedItems() {
    return this.items.filter((item) => item.flag);
  }
  
  onRegistration(form:NgForm){
    const firstName=form.value.firstName
    const lastName=form.value.lastName
    const dob=form.value.dob
    console.log(firstName,lastName,dob);
    const skills=null
    const hourlyRate=null
    if(this.checked){
      const skills=this.getCheckedItems().map((data)=>data.skill)
      const hourlyRate=form.value.hourRate
      console.log(hourlyRate,skills);
      this.authService.registration(firstName,lastName,dob,this.checked,hourlyRate,skills).subscribe(data=>{
        console.log(data);
      })
    }
    else{
      const skills=null
      const hourlyRate=null
      this.authService.registration(firstName,lastName,dob,this.checked,hourlyRate,skills).subscribe(data=>{
        console.log(data);
      })
    }
    
    //do something
  }
}
