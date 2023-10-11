import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthUserService } from 'src/app/auth/auth-user.service';
import { Skills } from 'src/app/moduls/skills.module';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  onEdit=false
  showPassword=false
  person:any

  items:{skill:Skills,flag:boolean}[]=[]
  skills:Skills[]=Object.values(Skills)
  checked:any
  dob=new Date()
  constructor(private authService:AuthUserService,private userService:UserService,private router:Router){}

  ngOnInit(): void {
    this.userService.getPersonalInformation().subscribe(value=>{
      this.person=value
      this.dob=new Date(this.person.dob)
      this.items=[]
      this.skills?.forEach( (value)=> {
        this.items.push({skill:value,flag:false})
      })
      this.checked=this.person.coach
      this.items.forEach((item:any)=>{
        if(this.person.skills.includes(item.skill)){
          item.flag=true
        }
      })
    })
  }

  editProfile(){
    this.onEdit=true
  }
  showPass(){
    this.showPassword=!this.showPassword
  }
  showLog(){
    console.log(this.person);
  }
  getCheckedItems() {
    return this.items.filter((item) => item.flag);
  }
  submitChange(form:NgForm){
    const new_person:Object={
      id:this.person.id,
      email:form.value.email,
      password:form.value.password,
      firstName:form.value.firstName,
      lastName:form.value.lastName,
      dob:this.dateToLocalDate(form.value.dob),
      coach:this.checked,
      hourlyRate:form.value.hourlyRate,
      skills:this.getCheckedItems().map((data)=>data.skill),
      bio:form.value.bio
    }    
    return this.userService.applyChange(new_person).subscribe(data=>{
      this.onEdit=false
      this.ngOnInit()
    })
  }
  deleteProfile(){
    this.userService.deleteUser(this.person.id).subscribe(value=>{
      console.log(value)
      this.authService.signOut()
      this.router.navigate(['/signin'])
    })
  }
  dateToLocalDate(date: Date): string {    
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
}
