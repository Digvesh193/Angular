import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent {
  @Input() name: string = ''
  @Output() closed = new EventEmitter<any>();

  close(){
    this.closed.emit({
      name:this.name
    })

  }
}
