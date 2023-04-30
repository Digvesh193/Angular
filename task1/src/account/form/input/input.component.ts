import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'account-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() inputLabelTitle : string = ''
  @Input() inputType : string = ''

  @Output() valueOfInput : EventEmitter<any> = new EventEmitter();

  onChangeValue(event:any){
    this.valueOfInput.emit(event.target.value)
  }
  

}
