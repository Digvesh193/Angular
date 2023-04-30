import { Component } from '@angular/core';
import { CountServiceService } from '../count-service.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component {
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
    this.countService.miCountSubject.subscribe({
      next : (data)=>this.miCount = data,
      error : (error)=>console.log(error),
      complete : ()=>console.log("GT complete")
    })
    this.countService.gtCountSubject.subscribe({
      next : (data)=>this.gtCount = data,
      error : (error)=>console.log(error),
      complete : ()=>console.log("RCB complete")
    })
  }

  onClick(){
    this.countService.rcbSetCount(++this.rcbCount)
  }
}
