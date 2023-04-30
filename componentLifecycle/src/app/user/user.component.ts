import { AfterContentChecked, AfterContentInit, Component, DoCheck, EnvironmentInjector, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked{

  @Input() myNameIs : string =''
  @Output() sendToapp : EventEmitter<any>;

  constructor(){
    this.sendToapp = new EventEmitter<any>();
    console.log("User => constructor called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("User => changes called")
    console.log(changes)
  }
  ngOnInit(): void {
    console.log("User => OnInit called")
  }
  ngDoCheck(): void {
    console.log("User => Docheck called")
  }
  
  ngAfterContentInit(): void {
   console.log("User => After content init")
  }
  ngAfterContentChecked(): void {
   console.log("User => After content checked")
  }
  ngAfterViewInit(): void {
    console.log("User => After view init")
  }
  ngAfterViewChecked(): void {
    console.log("User => After view checked")
  }
  sayHi(event : any):void{
    console.log(event)
  }

  sendValue(): void{
    this.sendToapp.emit("i am user")
  }
  
}
