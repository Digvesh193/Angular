import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isValide = false

  currentStyles: Record<string, string> = {};

  currentValue : string = ""
  color = 'digvesh dadhaniya heloo';
  condition = false
  date = new Date()

  nameArr = [
    'digvesh',
    'tej',
    'dhoni',
    'kholi',
  ]

  a : number = 1000000

  onSubmit(){

    this.currentStyles = {
      'font-style':  this.isValide      ? 'italic' : 'normal',
      'font-weight': !this.isValide ? 'bold'   : 'normal',
      'font-size':   this.isValide    ? '24px'   : '120px'
    };
  }

  products=[
    {productName:'laptop',productId:'1',productPrice:'32000',available:"available"},
    {productName:'Mobile',productId:'2',productPrice:'20000',available:"not available"},
    {productName:'TV',productId:'3',productPrice:'20000',available:"available"},
    {productName:'Washing Machine',productId:'4',productPrice:'50000',available:"available"}
  ]
  onChange(event : any){

    this.currentValue = event.target.value
  }
}
