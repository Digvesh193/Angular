import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit, SimpleChange,EventEmitter, Output } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() myValue = "hello"
  user : string = "hello" 
  @Input() password : string = ""
  @Output() parentFunction : EventEmitter<any> = new EventEmitter();
  

  constructor(){
    console.log('login constructor called')
  }
  ngOnInit(){
    this.parentFunction.emit("digvesh this is child")
    console.log('login on init called')
  }
  ngOnChanges(changes:SimpleChange){
    console.log(changes)
  } 
  onChangeValue(event : any){
    this.user = event.target.value
  }
  ngDoCheck(){
    console.log("do check called  ")
  }
  ngAfterContentInit(): void {
    console.log("login afterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("login contentchecked")
  }
  ngAfterViewInit(): void {
    console.log("login after view init")
  }
  ngAfterViewChecked(): void {
    console.log("login afterViewChecked")
  }
  ngOnDestroy(): void {
    console.log("destroy called")
  }
  
}
