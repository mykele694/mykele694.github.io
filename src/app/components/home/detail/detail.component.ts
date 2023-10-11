import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { filter } from 'rxjs';
import { HomeComponent } from '../home.component';
import { CoachService } from 'src/app/service/coach.service';
import { AuthUserService } from 'src/app/auth/auth-user.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  template:'{{data}}'
})
export class DetailComponent implements OnInit{
  idChoose:number=0
  person:any={}

  constructor(private authService:AuthUserService, private route:ActivatedRoute,private coachService:CoachService){}

  ngOnInit(): void {
   
    this.route.paramMap.subscribe((params:ParamMap)=>{      
      this.idChoose = parseInt(params.get('id')||'0')
      this.coachService.getCoachInfo(this.idChoose).subscribe((value)=>{
        this.person=value
        console.log(this.person);
        
      })
      console.log(this.person);
      
      /*
      this.coachService.people.forEach((value:any)=>{
        if(value.id===this.idChoose){
          console.log("Find");
          this.person=value}
      })
      */
    })
  }

  getAuthentication(){
    return this.authService.isAuthenticated()
  }

}
