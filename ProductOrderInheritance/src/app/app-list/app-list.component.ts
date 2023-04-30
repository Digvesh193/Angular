import { computeMsgId, ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ColDef, ColGroupDef, ColumnApi, GetRowIdFunc, GetRowIdParams, GridApi } from 'ag-grid-community';
import { Item } from '../base-class/item.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  @Input() modelClass !: Item

  title !: string
  defaultColDef !:any
  gridOptions !: any
  rowSelection !: any
  rowData !: any
  columnDefs !: ColDef[]
  gridApi !: GridApi
  gridColumnApi !: ColumnApi
  
  @ViewChild(ButtonComponent) popUpContainer !: ButtonComponent
  
  constructor(){}

  getRowId: GetRowIdFunc = (params: GetRowIdParams)=>{
    return params.data.id
  }
  
  ngOnInit(): void {
    this.title = this.modelClass.title
    this.rowData = this.modelClass.rowData
    this.columnDefs = this.modelClass.columnDefs
    this.defaultColDef = this.modelClass.defaultColDef
    this.gridOptions = this.modelClass.gridOptions
    this.rowSelection = this.modelClass.rowSelection
  }

  onInputFilter(event: any){
      this.modelClass.onInputFilter(event.target.value)
  }
  onGridReady(params: any){
    this.modelClass.getApiData()
    this.modelClass.setButtonComponentRef(this.popUpContainer)
    this.modelClass.onGridReady(params)
  }
  onAddItem(event: any){
    this.modelClass.onAddItem(event)
  }
  onUpdate(event: any){
    this.modelClass.onUpdate(event)
  }

}
