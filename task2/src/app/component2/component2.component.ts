import { Component } from '@angular/core';
import { CountServiceService } from '../count-service.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {

  cskCount : number = 0;
  miCount : number = 0;
  gtCount : number = 0;
  rcbCount : number = 0;

  constructor(private countService : CountServiceService ) {
    
  }

  ngOnInit(): void {
    this.countService.cskCountSubject.subscribe({
      next : (data)=>this.cskCount = data,
      error : (error)=>console.log(error),
      complete : ()=>console.log("CSK complete")
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
    this.countService.miSetCount(++this.miCount)
  }
}
