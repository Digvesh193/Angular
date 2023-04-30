import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lifecycle';

  userName : string = "digvesh"
  isVisible : boolean = true

  constructor(){
    console.log("app componets constructor called")
  }

  ngOnInit(){
    console.log("app component oninit called")
  }
  
  submitValue(val:any){
    this.userName = val.value
  }

  parentFunction(data:any){
    console.log(data)
  }

  
  //change detection

}
