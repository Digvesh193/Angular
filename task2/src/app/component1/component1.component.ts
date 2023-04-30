import { Component, OnInit } from '@angular/core';
import { CountServiceService } from '../count-service.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  cskCount : number = 0;
  miCount : number = 0;
  gtCount : number = 0;
  rcbCount : number = 0;

  constructor(private countService : CountServiceService){

  }
  ngOnInit(): void {
    this.countService.miCountSubject.subscribe({
      next : (data)=>this.miCount = data,
      error : (error)=>console.log(error),
      complete : ()=>console.log("MI complete")
    })  
    this.countService.gtCountSubject.subscribe({
      next : (data)=>this.gtCount = data,
      error : (error)=>console.log(error),
      complete : ()=>console.log("GT complete")
    })
    this.countService.rcbCountSubject.subscribe({
      next : (data)=>this.rcbCount = data,
      error : (error)=>console.log(error),
      complete : ()=>console.log("RCB complete")
    })
  }

  onClick(){
    this.countService.cskSetCount(++this.cskCount)
  }
}
