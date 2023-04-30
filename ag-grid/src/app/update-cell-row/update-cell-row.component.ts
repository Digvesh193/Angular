import { Component } from '@angular/core';
import { GridApi, ColDef, GetRowIdFunc, GetRowIdParams, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-update-cell-row',
  templateUrl: './update-cell-row.component.html',
  styleUrls: ['./update-cell-row.component.css']
})
export class UpdateCellRowComponent {
   gridApi!: GridApi;

  rowData: any[] | null = [
    { id: 'aa', make: 'Toyota', model: 'Celica', price: 35000 },
    { id: 'bb', make: 'Ford', model: 'Mondeo', price: 32000 },
    { id: 'cc', make: 'Porsche', model: 'Boxster', price: 72000 },
    { id: 'dd', make: 'BMW', model: '5 Series', price: 59000 },
    { id: 'ee', make: 'Dodge', model: 'Challanger', price: 35000 },
    { id: 'ff', make: 'Mazda', model: 'MX5', price: 28000 },
    { id: 'gg', make: 'Horse', model: 'Outside', price: 99000 },
  ];
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price', filter: 'agNumberColumnFilter' },
  ];
  defaultColDef: ColDef = {
    flex: 1,
    editable: true,
    sortable: true,
    filter: true,
  };
  getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    return params.data.id;
  };

  updateSort() {
    this.gridApi.refreshClientSideRowModel('sort');
  }

  updateFilter() {
    this.gridApi.refreshClientSideRowModel('filter');
  }

  setPriceOnToyota() {
    let rowNode = this.gridApi.getRowNode('aa')!;
    let newPrice = Math.floor(Math.random() * 100000);
    rowNode.setDataValue('price', newPrice);
  }

  setDataOnFord() {
    let rowNode = this.gridApi.getRowNode('bb')!;
    let newPrice = Math.floor(Math.random() * 100000);
    let newModel = 'T-' + Math.floor(Math.random() * 1000);
    let newData = {
      id: 'bb',
      make: 'Ford',
      model: newModel,
      price: newPrice,
    };
    rowNode.setData(newData);
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}
