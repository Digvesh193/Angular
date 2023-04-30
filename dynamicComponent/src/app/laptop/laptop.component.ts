import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent {
  @Input() name: string = ''
  @Output() closed = new EventEmitter<any>();

  close(){
    this.closed.emit({
      name:this.name
    })

  }
}
