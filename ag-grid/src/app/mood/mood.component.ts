import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-mood',
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent {

  params !: ICellRendererParams

  agInit(params: ICellRendererParams){
    this.params = params
    console.log("Mood ",params)
  }
}
