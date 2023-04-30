import { Component, ViewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent {
  params !: any
  componentParent: any;

  agInit(params: any){
    this.params = params
  }

  onEdit(){
   this.params.context.componentParent.editRow(this.params.data,this.params.value)
  }
}
