import { Component } from '@angular/core';

@Component({
  selector: 'app-base-class',
  templateUrl: './base-class.component.html',
  styleUrls: ['./base-class.component.css']
})
export class BaseClassComponent {
  constructor(){}

  showMyName(){
    console.log("hello digvesh dadhaniya")
  }
}
