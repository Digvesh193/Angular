import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ColDef } from "ag-grid-community";
import { ButtonComponent } from "../button/button.component";
import { Item } from "./item.component";
import { ListBaseClass } from "./listbase.component";

@Component({
    template: ''
  })
export class Order extends ListBaseClass implements Item {

    title: string = "Order"

    rowData = [
        {id:"1",title:"laptop",body:"1"},
        {id:"2",title:"tv",body:"2"},
        {id:"3",title:"watch",body:"4"},
        {id:"4",title:"phone",body:"2"},
        {id:"5",title:"bag",body:"7"},
        {id:"6",title:"iron",body:"1"},
      ]
    
      columnDefs: ColDef[]=[
          {field:"title",colId:"title",headerName:"Title",filter:'agMultiColumnFilter',filterParams:this.defaultFilterParams},
          {field:"body",colId:"body",headerName:"Body",filter:'agMultiColumnFilter',filterParams:this.defaultFilterParams},
          this.editAgGridColumn,
          this.deleteAgGridColumn
      ] 

    constructor(private http: HttpClient){
        super()
    }
    
    onAddItem(result: NgForm){
        const data = this.rowData
        const newData = {
          id:(parseInt(data[data.length-1].id)+1).toString(),
          title:result.value.title,
          body:result.value.body,
        }
        this.onAddItemBase(data,newData)
    }
    
    onUpdate(updateValue: any){
        const data = this.rowData
        const newData = {
          id:updateValue.id,
          title:updateValue.result.value.title,
          body:updateValue.result.value.body,
        }
        console.log(newData)
        this.editRowBase(data,newData)
    }
    
    deleteRow(id: string):void{
        this.deleteRowBase(id,this.rowData)
    }
    editRow(data: any,id: string):void{
        this.popUpContainer.setValue(this.getOrderData(data,id))
    }
    getApiData(){
        this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((res:any)=>{
          this.gridApi.setRowData(res)
          this.rowData = res
        })
    }     
}