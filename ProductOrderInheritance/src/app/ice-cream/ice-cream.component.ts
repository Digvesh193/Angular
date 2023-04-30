import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { IceCream } from '../base/icecream.component';

@Component({
  selector: 'app-ice-cream',
  templateUrl: '../base/productOrder.html',
  styleUrls: ['./ice-cream.component.css']
})
export class IceCreamComponent implements OnInit {
  @Input() iceCream !: IceCream;

  fullName !: any

  constructor(){}

  ngOnInit(): void {
    console.log(this.iceCream.getPrice())
    this.fullName = this.iceCream.getType()
    // this.iceCream.
  }


  

}
