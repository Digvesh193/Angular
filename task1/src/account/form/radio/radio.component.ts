import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'account-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  @Output() radioValue : EventEmitter<any> = new EventEmitter();
  oncheckBox(item:any){
    this.radioValue.emit(item.target.value)
    console.log(item.target.value)
  }
}
