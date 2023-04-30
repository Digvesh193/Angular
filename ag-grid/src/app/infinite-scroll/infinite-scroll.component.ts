import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { CellClickedEvent } from 'ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.css']
})
export class InfiniteScrollComponent {

  rowData$!: Observable<any[]>;

 defaultColDef = {
    // set every column width
    width: 400,
    // make every column editable
    editable: true,
    // make every column use 'text' filter by default
    filter: 'agTextColumnFilter',
};

  columnDefs = [
    { field: 'make', checkboxSelection:true },
    { field: 'model' },
    { field: 'price' }
  ]

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
];
//   rowData1 = [
//     { make: 'Toyota1', model: 'Celica', price: 35000 },
//     { make: 'Ford1', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche1', model: 'Boxster', price: 72000 }
// ];

gridOpetions !:any

@ViewChild(AgGridAngular) agGrid!: AgGridAngular;


  // myDataSource !: Observable<any>
  constructor(private http : HttpClient){
    // this.http.get("https://www.ag-grid.com/example-assets/row-data.json").subscribe({
    //   next:(data)=>{
    //     // console.log(data)
    //     this.myDataSource = data
    //   },
    //   error:(error)=>{
    //     console.log(error)
    //   },
    //   complete:()=>{
    //     console.log("complete")
    //   }
    // })
    // console.log(this.myDataSource)

    // this.myDataSource=this.http.get("https://www.ag-grid.com/example-assets/row-data.json")
    // console.log(this.myDataSource)
  }

  // onGridReady(params: any):void{

  //  this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json').subscribe(res=>{
  //   // console.log(res)
  // })
  // params.api.setDatasource(this.rowData1)
  // console.log(params.api)
     


  //   // this.rowData$ = this.http
  //   //  .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  //   //  console.log("gridready")

   
  // }

  // onCellClicked( e: any): void {
  //   console.log('cellClicked', e);
  // }
 
  // // Example using Grid's API
  // clearSelection(): void {
  //   // alert("hell")
  //   this.agGrid.api.deselectAll();
  // }

  

  
}
