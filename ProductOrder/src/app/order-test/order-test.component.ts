import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { ListBaseClass } from '../base/listBase.base';
import { ButtonComponent } from '../button/button.component';
import { ItemStorageService } from '../item-storage.service';

@Component({
  selector: 'app-order-test',
  templateUrl: '../base/productOrder.html',
  styleUrls: ['./order-test.component.css']
})
export class OrderTestComponent extends ListBaseClass {
  title: string = "Order"
  @ViewChild("container") popUpContainer !: ButtonComponent

  constructor(private itemStorageService : ItemStorageService,private http: HttpClient){
    super(itemStorageService)
    this.getApiData();
  }

  rowData !: any

  columnDefs: ColDef[]=[
      // this.nameAgGridColumn,
      {field:"title",colId:"title",headerName:"Title",filter:'agMultiColumnFilter',filterParams:this.itemStorageService.defaultFilterParams},
      {field:"body",colId:"body",headerName:"Body",filter:'agMultiColumnFilter',filterParams:this.itemStorageService.defaultFilterParams},
      this.editAgGridColumn,
      this.deleteAgGridColumn
  ] 

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
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(res=>{
      this.rowData = res
    })
  }
}
