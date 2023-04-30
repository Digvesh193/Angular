import { Component, Input } from '@angular/core';
import { ColDef, IProvidedFilterParams } from 'ag-grid-community';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { ItemStorageService } from '../item-storage.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  constructor(private itemStorageService : ItemStorageService){}

  // defaultFilterParams:IProvidedFilterParams = {readOnly:true}
  
  defaultColDef = this.itemStorageService.defaultColDef
  /////////////////////////////////////////////
  rowData = this.itemStorageService.OrderData
  columnDefs : ColDef[] =[
    {field:"name",colId:"name",filter: 'agMultiColumnFilter',filterParams:this.itemStorageService.defaultFilterParams},
    {field:"quantity",colId:"quantity",headerName:"quantity",filter:'agMultiColumnFilter',filterParams:this.itemStorageService.defaultFilterParams},
    {headerName:"Edit",field:"edit",  
    cellRendererSelector:(params):any=>{
      return {
        component:EditButtonComponent,
        params:{value:params.data.id}
      }
    }
    },
    {headerName:"Delete",field:"delete",
    cellRendererSelector:(params):any=>{
      return {
        component:DeleteButtonComponent,
        params:{value:params.data.id}
      }
    }
    },
  ]
}
