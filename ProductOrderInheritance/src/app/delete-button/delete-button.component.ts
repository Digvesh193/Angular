import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {

  params !: any

  agInit(params: any){
    this.params = params
  }
  onDelete(){
    this.params.context.componentParent.deleteRow(this.params.value)
  }
}
