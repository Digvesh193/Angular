import { Component, DoCheck, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { ManualService } from 'src/app/services/manual.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[ManualService] 
})
export class ChildComponent implements OnInit {
  count : number = 0;

  // constructor(private manual : ManualService){}
  constructor(private manual : ManualService){}

  ngOnInit(): void {
    // console.log(this.manualService.k)
  }

  

  // ngDoCheck(): void {
  //   alert("child"+this.manualService.name)
  // }

  onSubmit(){
    console.log(this.manual.name)
    // this.manualService.showMyName("ChildService")
    // this.manualService.k = this.count++
    // console.log(this.manual.getName())
  }
}
