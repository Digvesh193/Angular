import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent {
  params !: ICellRendererParams

  agInit(params: ICellRendererParams){
    this.params = params
    console.log("Gender ",params)
  }
}
