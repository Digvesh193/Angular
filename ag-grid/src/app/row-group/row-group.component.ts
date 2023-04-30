import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-row-group',
  templateUrl: './row-group.component.html',
  styleUrls: ['./row-group.component.css']
})
export class RowGroupComponent {
  columnDefs: ColDef[] = [
    { field: 'country' },
    { field: 'year' },
    { field: 'athlete' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
  ];
  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
    resizable: true,
  };
  autoGroupColumnDef: ColDef = {
    minWidth: 200,
  };
  rowData!: any[];

  gridRowApi !:any

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<any>) {
    this.gridRowApi = params.api
    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

  showNode(){
    // const node = this.gridRowApi.getRowNode(0)
    // node.setSelected(true);

    // this.gridRowApi.forEachNode((rowNode: any,index: any)=>{
    //   console.log(rowNode.data)
    //   // console.log('node ' + rowNode.data.athlete + ' passes the filter');
    // })

    // this.gridRowApi.forEachLeafNode((rowNode: any,index: any)=>{
    //   console.log(rowNode.data)
    //   // console.log('node ' + rowNode.data.athlete + ' passes the filter');
    // }
  }

  rowDataA=[
    {country:"india"}
  ]
  rowDataB=[
    {country:"usa"}
  ]

  onRowDataA() {
    this.gridRowApi.setRowData(this.rowDataA);
  }

  onRowDataB() {
    this.gridRowApi.setRowData(this.rowDataB);
  }

  

}
