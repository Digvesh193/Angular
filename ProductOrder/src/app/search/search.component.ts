import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
 
  @Output() inputFilter : EventEmitter<string> = new EventEmitter<string>();
  
  constructor(){
    console.log("Searchcomponent called")
  }

  onInputChange(event: any):void{
    this.inputFilter.emit(event.target.value)
  }
}
