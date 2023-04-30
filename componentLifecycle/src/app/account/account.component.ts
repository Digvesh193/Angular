import { AfterContentChecked, AfterContentInit, Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit {
  
  name : string = ''

  @Output() value : EventEmitter<string>;
  constructor(){
    // this.name = "hello"
    this.value = new EventEmitter<string>();
    // console.log(this.name)
    console.log("Account => Contructor called")
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Account => OnChanges called")
  }
  
  
  ngOnInit(): void {
    // this.name = "hello"
    // console.log(this.name)
    console.log("Account => OnInit called")
  }
  
  ngDoCheck(): void {
    console.log("Account => Docheck called")
  }
  ngAfterContentInit(): void {
    console.log("Account => after content init")
  }
  ngAfterContentChecked(): void {
    console.log("Account => after content checked")
  }
  ngAfterViewInit(): void {
    console.log("Account => After view init")
  }
  ngAfterViewChecked(): void {
    console.log("Account => After view checked")
  }
  onSubmit(){
    this.value.emit("hello digvesh dadhaniya harsukhbhai karshanbhai")
  }
  
}
