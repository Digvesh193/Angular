import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class RowComponent {

  constructor(){

  }

  defaultColDef: ColDef = {
    width: 170,
    sortable: true,
  };

  columnDefs: ColDef[] = [
    { headerName: 'Row ID', valueGetter: 'node.id',field:'id' },
    { field: 'make',unSortIcon: true },
    { field: 'model' },
    { field: 'price', comparator: this.priceSort },
  ];

  rowData: any[] | null = [
    { id: 'c1', make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 'c2', make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 'c8', make: 'Porsche', model: 'Boxster', price: 72000 },
    { id: 'c4', make: 'BMW', model: 'M50', price: 60000 },
    { id: 'c14', make: 'Aston Martin', model: 'DBX', price: 190000 },
  ];

  priceSort(value1: number,value2:number){
    console.log("1=> "+value1,"2=> "+value2)
    return value2- value1
  }
}
