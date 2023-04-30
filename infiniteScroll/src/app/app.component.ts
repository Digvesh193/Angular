import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ColumnApi, GetRowIdFunc, GetRowIdParams, GridApi, GridOptions, GridReadyEvent, IDatasource, IGetRowsParams, RowModelType } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'infiniteScroll';

  constructor(private http: HttpClient){}

  // gridApi !: GridApi
  // gridColumnApi !: ColumnApi
  // rowSelection : 'single' | 'multiple' = 'multiple'

  // public columnDefs: ColDef[] = [
  //   { field: 'athlete', minWidth: 150 },
  //   { field: 'age' },
  //   { field: 'country', minWidth: 150 },
  //   { field: 'year' },
  //   { field: 'date', minWidth: 150 },
  //   { field: 'sport', minWidth: 150 },
  //   { field: 'gold' },
  //   { field: 'silver' },
  //   { field: 'bronze' },
  //   { field: 'total' },
  // ];


  columnDefs:ColDef[]=[
    {field:"id"},
    {field:"name"}
  ]

  defaultColDef: ColDef = {
    flex: 1,
    resizable: true,
    minWidth: 100,
  };

  rowData!: any[];

  rowSelection : 'single' | 'multiple' = 'multiple'

  rowBuffer = 5;
  
  rowModelType:RowModelType = 'infinite'

  cacheBlockSize = 15

  maxBlocksInCache = 1



  onGridReady(params: GridReadyEvent<any>){
      this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe((data:any)=>{
        const dataSource : IDatasource ={
          rowCount:undefined,
          getRows:(params: IGetRowsParams)=>{
            setTimeout(()=>{
              const rowData = data.slice(params.startRow,params.endRow)
              let lastRow = -1;
              if(data.length<params.endRow){
                lastRow = data.length
              }
              params.successCallback(rowData,lastRow)
            },500)
          }
        }

        params.api.setDatasource(dataSource)
      })
  }

}
