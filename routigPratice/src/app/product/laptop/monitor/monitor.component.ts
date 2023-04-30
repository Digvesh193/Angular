import { Component, OnInit } from '@angular/core';
import { PreloadService } from 'src/app/services/preload.service';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  constructor(private preload : PreloadService){  
  }

  ngOnInit(): void {
    this.preload.showName()
  }


}
