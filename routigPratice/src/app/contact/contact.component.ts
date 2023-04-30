import { Component, OnInit } from '@angular/core';
import { PreloadService } from '../services/preload.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private preload : PreloadService){
    console.log("Contact Constructor Called")
  }
  ngOnInit(): void {
    this.preload.showName()
  }
}
