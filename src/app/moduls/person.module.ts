import { Skills } from "./skills.module";

export class Person{
    constructor(
        
        public email:string,
        public password:string,
        public firstName:string,
        public lastName:string,
        public dob:Date,
        public coach:boolean,
        public hourlyRate:number|null,
        public skills:string[]|null
    ){}
}

 