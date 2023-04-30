import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColDef } from 'ag-grid-community';
import { ListBaseClass } from '../base/listBase.base';
import { ButtonComponent } from '../button/button.component';
import { ItemStorageService } from '../item-storage.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-product-test',
  templateUrl: '../base/productOrder.html',
  styleUrls: ['./product-test.component.css']

})
export class ProductTestComponent extends ListBaseClass {

  title: string = "Product"
  @ViewChild("container") popUpContainer !: ButtonComponent

  constructor(private itemStorageService : ItemStorageService,private http: HttpClient){
    super(itemStorageService)
    this.getApiData()
  }

  rowData !: any

  columnDefs: ColDef[]=[
      this.nameAgGridColumn,
      {field:"name",valueFormatter:this.firstLatter,headerName:"FirstLetter",filter: 'agSetColumnFilter'},
      this.editAgGridColumn,
      this.deleteAgGridColumn
  ] 

  onAddItem(result: NgForm){
    const data = this.rowData
    const newData = {
      id:(parseInt(data[data.length-1].id)+1).toString(),
      name:result.value.product,
    }
    this.onAddItemBase(data,newData)
  }

  onUpdate(updateValue: any){
    const data = this.rowData
    const newData = {
      id:updateValue.id,
      name:updateValue.result.value.product,
    }
    this.editRowBase(data,newData)
  }

  deleteRow(id: string):void{
    this.deleteRowBase(id,this.rowData)
  }
  editRow(data: any,id: string):void{
    this.popUpContainer.setValue(this.getProductData(data,id))
  }


  getApiData(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(res=>{
      this.rowData = res
    })
  }
}
 
 

