import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'account-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  date : string = ""
  @Output() moveDate : EventEmitter<any>
  @Output() dateType : EventEmitter<any>

  constructor(){  
    this.moveDate = new EventEmitter<any>();
    this.dateType = new EventEmitter<any>();
  }
  onChangeDate(event: any){
    this.date = event.target.value;
    this.moveDate.emit(this.date)
  }
  onRadioSelect(event: any){
    this.dateType.emit(event.target.value) 
    
  }
}
