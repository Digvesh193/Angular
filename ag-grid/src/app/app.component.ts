import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CellRenderComponent } from './cell-render/cell-render.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-grid';

  gridApi: any
  columnApi: any
  gridOptions: any
  bottomRow:any
  topRow: any

  columnDefs = [
		{headerName: 'Name', field: 'name',cellRendererFramework:CellRenderComponent},
		{headerName: 'Mobile', field: 'mobile'},
		{headerName: 'State', field: 'state'}
	];

	rowData = [
		{ name: 'Toyota', mobile: 'Celica', state: 35000 },
		{ name: 'Ford', mobile: 'Mondeo', state: 32000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
		{ name: 'Porsche', mobile: 'Boxster', state: 72000 },
	];

  constructor(private http : HttpClient){
    this.gridOptions = {
      context: {
        componentParent:this
      }
    }
  }

  freeze(){
    
    // this.columnApi.setColumnPinned("mobile","left")

    this.topRow = []
    for(let i=0;i<1;i++){
      this.topRow.push(this.rowData[i])
    }
  }

  OnGridReady(event: any){
    console.log(event)
    this.gridApi = event.api
    this.columnApi = event.columnApi
    // console.log(this.gridApi)
    // console.log(this.columnApi)
    // this.gridApi.setRowData([])
    // this.gridApi.updateRow()
  } 

  updateRow():void{
    let rowNode = this.gridApi.getRowNode(0)
    rowNode.setData({
      "name":"Aman",
      "mobile":1234134,
      "state":"jammu"
    })

  }
  updateCell():void{
    // alert("hello")
    let rowNode = this.gridApi.getRowNode(0)
    rowNode.setDataValue("mobile",9978038027)
  }
  updateAllRow():void{
    this.http.get("../assets/data.json").subscribe(res=>{
      console.log(res)
      // let x = res
      // this.gridApi.setRowData([res])
      this.gridApi.setRowData({add:res})
      
    })
  }
  clear():void{
    this.gridApi.setRowData([])
  }
}
