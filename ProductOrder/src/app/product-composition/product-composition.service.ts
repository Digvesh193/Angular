import { Injectable, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ColDef } from "ag-grid-community";
import { ListBaseClass } from "../base/listBase.base";
import { ButtonComponent } from "../button/button.component";
import { ItemStorageService } from "../item-storage.service";

@Injectable()
export class ProductCompositionService extends ListBaseClass{

  // constructor(){
  //   console.log("helllo")
  // }
    title: string = "Product"
    @ViewChild("container") popUpContainer !: ButtonComponent
  
    constructor(private itemStorageService : ItemStorageService){
      console.log("product composition srevice calledx")
      super(itemStorageService)
    }
  
    rowData = this.itemStorageService.ProductData
  
    columnDefs: ColDef[]=[
        this.nameAgGridColumn,
        {field:"name",valueFormatter:this.firstLatter,headerName:"FirstLetter",filter: 'agSetColumnFilter'},
        this.editAgGridColumn,
        this.deleteAgGridColumn
    ] 
  
    onAddItem(result: NgForm){
      const data = this.itemStorageService.ProductData
      const newData = {
        id:(parseInt(data[data.length-1].id)+1).toString(),
        name:result.value.product,
      }
      this.onAddItemBase(data,newData)
    }
  
    onUpdate(updateValue: any){
      const data = this.itemStorageService.ProductData
      const newData = {
        id:updateValue.id,
        name:updateValue.result.value.product,
      }
      this.editRowBase(data,newData)
    }
  
    deleteRow(id: string):void{
      this.deleteRowBase(id,this.itemStorageService.ProductData)
    }
    editRow(data: any,id: string):void{
      this.popUpContainer.setValue(this.getProductData(data,id))
    }
}