import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'account-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  
  @Output() checkboxValue : EventEmitter<any> = new EventEmitter()
  onChange(event : any){
    this.checkboxValue.emit(event.target.value)
  }
}
