import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef } from 'ag-grid';
import { Observable } from 'rxjs';
// import { GridOptions } from 'ag-grid';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  rowData :any = this.http.get("https://www.ag-grid.com/example-assets/row-data.json")

  columnDefs=[
    {headerName: 'Make',field:'make'},
    {headerName: 'Model',field:'model'},
    {headerName: 'Price',field:'price'}
  ]

  

//   rowData = [
//     { name: 'Toyota', mobile: 'Celica', state: 35000 },
//     { name: 'Ford', mobile: 'Mondeo', state: 32000 },
//     { name: 'Porsche', mobile: 'Boxster', state: 72000 }
// ];

  constructor(private http : HttpClient){
    // (():void=>{
    //   console.log("hello")
    // })()
    
  }

 

  gridOptions = {
    columnDefs:this.columnDefs,
    // rowData:this.rowData,
    onGridReady:(params: any)=>{
      console.log(params.api.redrawRows())
    },
    onCellClicked: (event: any) => console.log('Cell was clicked'),
  }
    // onCellClicked = (event: any) => console.log('Cell was clicked')


    onGridReady(params: any){
      // console.log(params)
  
      
   
    }




}

interface Car{
  make:string,
  model:string,
  price : number
}
