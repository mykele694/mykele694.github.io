import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Skills } from '../moduls/skills.module';

@Injectable({
  providedIn: 'root'
})
export class CoachService implements OnInit{
  baseURL='http://localhost:8080/coachHire/rest/auth/'

  
  items:{skill:Skills,flag:boolean}[]=[]
  skills:Skills[]=Object.values(Skills)

  people:any

  constructor(private http:HttpClient) { }
  ngOnInit(): void {
  }

  getCoachList(){
    return this.http.get(this.baseURL+'listCoach')
  }

  getCoachListSkillBased(skills:string[]){
    let parameter="?"
    skills.forEach((value:any)=>{
      parameter+="skills="+value+"&"
    
    })
    parameter=parameter.slice(0,-1)    
    return this.http.get(this.baseURL+'listCoach'+parameter)
  }

  getCoachInfo(idChoose:number){
    return this.http.get(this.baseURL+'coachInfo?id='+idChoose)
  }

  loadData(people:any){
    this.people=people
    return this.people
  }

}
