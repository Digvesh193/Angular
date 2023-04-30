import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { ItemStorageService } from '../item-storage.service';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent {
  constructor(private itemStorageService : ItemStorageService){}

  // defaultFilterParams:IProvidedFilterParams = {readOnly:true}
  
  // defaultColDef = this.itemStorageService.defaultColDef
  /////////////////////////////////////////////
  rowData = this.itemStorageService.ProductData
  columnDefs: ColDef[]=[
      {field:"name",colId:"name",filter: 'agSetColumnFilter',filterParams:this.itemStorageService.defaultFilterParams},
      {field:"name",valueFormatter:this.firstLatter,headerName:"FirstLetter",filter: 'agSetColumnFilter'},
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
  firstLatter(params: any){
      return  params.value.charAt(0).toUpperCase();
    }

}
