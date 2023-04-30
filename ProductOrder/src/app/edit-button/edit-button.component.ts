import { Component } from '@angular/core';
import { ICellRendererComp } from 'ag-grid-community';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {

  params !: any   
  componentParent: any;

  agInit(params: any){
    // console.log("agInit edit button called")
    this.params = params
    // console.log(this.params)
  }

  

  onEdit(){
    // console.log("Edit button called")
  //  console.log("On Refresh",this.params.data)
   this.params.context.componentParent.editRow(this.params.data,this.params.value)
  }


}
