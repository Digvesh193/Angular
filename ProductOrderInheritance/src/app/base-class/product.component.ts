import { HttpClient } from "@angular/common/http";
import { Component, Inject, Injectable, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
// import { computeStyles } from "@popperjs/core";
import { ColDef } from "ag-grid-community";
import { ButtonComponent } from "../button/button.component";
import { Item } from "./item.component";
import { ListBaseClass } from "./listbase.component";

// @Injectable()
@Component({
    template: ''
  })
export class Product extends ListBaseClass implements Item {
    
    // popUpContainer !: ButtonComponent
    title: string = "Product"
    
    // rowData = [
    //     {id:"1",name:"laptop"},
    //     {id:"2",name:"tv"},
    //     {id:"3",name:"watch"},
    //     {id:"4",name:"phone"},
    //     {id:"5",name:"bag"},
    //     {id:"6",name:"iron"},
    //   ]
    rowData !: any
    
    constructor(private http: HttpClient){
        console.log("product constructor called")
        super()
        this.getApiData()
    }
  
    columnDefs : ColDef[] =[
        {field:"name",headerName:"FirstLetter",filter: 'agSetColumnFilter'},
        this.editAgGridColumn,
        this.deleteAgGridColumn
    ] 

    getColumnDef() {
      const def = [

      ];
      // this.getAgGridColumn()
    }
   
    onAddItem(result: NgForm){
        const data = this.rowData
        const newData = {
          id:(parseInt(data[data.length-1].id)+1).toString(),
          name:result.value.product,
        }
        this.onAddItemBase(data,newData)
    }
    
    deleteRow(id: string): void {
        
        this.deleteRowBase(id,this.rowData)
    }

    editRow(data: any,id: string):void{
        console.log(this.popUpContainer)
        this.popUpContainer.setValue(this.getProductData(data,id))
      }
    
    onUpdate(updateValue: any){
      const data = this.rowData
      const newData = {
        id:updateValue.id,
        name:updateValue.result.value.product,
      }
      this.editRowBase(data,newData)
    }
    getApiData():any{
        this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
          this.gridApi.setRowData(res)
          this.rowData = res
        })
      }
}