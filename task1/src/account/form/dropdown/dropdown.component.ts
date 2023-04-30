import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'account-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Output() selectValue : EventEmitter<any> = new EventEmitter();
  onChange(event:any){
   
    this.selectValue.emit(event.target.value)
  }
}
