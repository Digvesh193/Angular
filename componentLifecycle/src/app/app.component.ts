import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked {
  title = 'componentLifecycle';

  myName : string = "hyyyyyyyyyyyyyy dream"
  buttonValue : string = "hello"

  constructor(){
    console.log("App => Constructor called")
  }
  
  ngOnChanges(): void{
    console.log("App => OnChanges called")
  }
  
  ngOnInit(){
    console.log("App => OnInit called")
  }
  
  ngDoCheck(): void {
    console.log("App => Docheck called")
  }
  
  ngAfterContentInit(): void {
    console.log("App => After Content Init")
  }
  
  ngAfterContentChecked(): void {
    console.log("App => After content checked")
  }
  ngAfterViewInit(): void {
    console.log("App => After view init")
  }
  ngAfterViewChecked(): void {
    console.log("App => After view checked")
  }
  onSubmit(){
    console.log("App => change in app ts")
    this.buttonValue = "hi DDD"
  }
  
  getValuefromUser(event : any): void{
    console.log(event)
  }
  
  
}
