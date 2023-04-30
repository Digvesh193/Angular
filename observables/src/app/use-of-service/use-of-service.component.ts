import { Component, DoCheck, OnInit } from '@angular/core';
import { ManualService } from '../services/manual.service';

@Component({
  selector: 'app-use-of-service',
  templateUrl: './use-of-service.component.html',
  styleUrls: ['./use-of-service.component.css'],
  providers:[ManualService]
})
export class UseOfServiceComponent implements OnInit {
  constructor(public manualService : ManualService){
  
  }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.manualService.name="abcdefghijkl"
    // this.manualService.showMyName("digvesh")
    // console.log("Patent ",this.manualService.name)
  }
  
  // ngDoCheck(): void {
  //   alert("parent   "+this.manualService.name)
  //   console.log("useOfService comp",this.manualService.k)
  //   // console.log("useOfService comp",this.manualService.)
  // }
}
