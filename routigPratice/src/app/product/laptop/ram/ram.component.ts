import { Component } from '@angular/core';
import { PreloadService } from 'src/app/services/preload.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent {
  constructor(private preload : PreloadService){  
    console.log("Ram Constructor called")
  }

  ngOnInit(): void {
    this.preload.showName()
  }
}
