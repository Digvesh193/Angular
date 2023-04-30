import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent {
  @Input() name: string = ''
  @Output() closed = new EventEmitter<any>();

  close(){
    this.closed.emit({
      name:this.name
    })

  }
}
