import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent {
  @Input() name: string = ''
  @Output() closed = new EventEmitter<any>();

  close(){
    this.closed.emit({
      name:this.name
    })

  }
}
