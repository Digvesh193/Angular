import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  outputs:['myValue'],
  inputs:['childValue']
})
export class InputComponent implements OnInit {
 myValue = new EventEmitter<string>();
 childValue = "kem cho"

  ngOnInit(){
    this.myValue.emit("hello good morning digvesh")
    console.log(this.childValue)
  }

}
