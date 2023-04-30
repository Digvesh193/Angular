import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ovan',
  templateUrl: './ovan.component.html',
  styleUrls: ['./ovan.component.css']
})
export class OvanComponent {
  @Input() name: string = ''
  @Output() closed = new EventEmitter<any>();

  close(){
    this.closed.emit({
      name:this.name
    })

  }
}
