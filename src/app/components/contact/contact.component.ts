import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthUserService } from 'src/app/auth/auth-user.service';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message:string=""
  userMail:string=""
  coachId:any
  coach:any={}
  constructor(private authService:AuthUserService,
    private coachService:CoachService,
    private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.userMail=this.authService.user?.email!
    this.route.paramMap.subscribe((params:ParamMap)=>{
      console.log(params.get('id')||'0');
      
      this.coachId= parseInt(params.get('id')||'0')
      console.log("COACH ID: "+this.coachId);
      
      this.coachService.getCoachInfo(this.coachId).subscribe((value)=>{
        this.coach=value
        console.log(this.coach);
      })
    })
  }
  
  sendMessage(){
    console.log(this.message);

  }
}
