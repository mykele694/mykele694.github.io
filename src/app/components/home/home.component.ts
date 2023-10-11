import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthUserService } from 'src/app/auth/auth-user.service';
import { Skills } from 'src/app/moduls/skills.module';
import { CoachService } from 'src/app/service/coach.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items:{skill:Skills,flag:boolean}[]=[]
  skills:Skills[]=Object.values(Skills)

  nSkill:any

  people:any=[{}]



  constructor(private authService:AuthUserService, private coachService:CoachService){}
  onCheckboxChange(event:any): void {
    const skills=this.items.filter((item) => item.flag).map((data)=>data.skill);
    this.coachService.getCoachListSkillBased(skills).subscribe((data)=>{
      this.people=this.coachService.loadData(data)
    })
    }

  ngOnInit(): void {
    this.skills.forEach( (value)=> {
      this.items.push({skill:value,flag:false})
    })
    this.coachService.getCoachList().subscribe((data)=>{
      this.people=this.coachService.loadData(data)
    })
  }

  search(){
    const skills=this.items.filter((item) => item.flag).map((data)=>data.skill);
    this.coachService.getCoachListSkillBased(skills).subscribe((data)=>{
      this.people=this.coachService.loadData(data)
    })
  }
  getAuthentication(){
    return this.authService.isAuthenticated()
  }
}
