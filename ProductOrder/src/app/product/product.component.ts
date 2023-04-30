import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ColDef, ColumnApi, GetRowIdFunc, GetRowIdParams, GridApi, IProvidedFilterParams, IRowNode } from 'ag-grid-community';
import { form, ProductBase } from '../base/product.base';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { EditButtonComponent } from '../edit-button/edit-button.component';
import { ItemStorageService } from '../item-storage.service';
import { SearchComponent } from '../search/search.component';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() title: string  = ""
  @Input() columnDefs !: ColDef<any>[]
  @Input() rowData !: any

  // formValue !: Array<form> | boolean

  gridOptions !: any
  gridApi !: GridApi
  gridColumnApi !: ColumnApi
  searchValue :any = "a"
  isSearch: boolean = false
  defaultColDef = this.itemStorageService.defaultColDef

  constructor(private itemStorageService : ItemStorageService ,private observableService : ObservableService ){
    // super()
    this.gridOptions ={
       context : {
          componentParent: this
      }
    }
  }

  getRowId: GetRowIdFunc = (params: GetRowIdParams)=>{
    return params.data.id
  } 

  rowSelection = this.itemStorageService.rowSelection
  ////////////////////////////////////////////////////////
  onInputFilter(data: string):void{

    this.gridApi?.setQuickFilter(data)
    // let productFilterComponent = this.gridApi.getFilterInstance("name")!;
    // let qtyFilterComponent = this.gridApi.getFilterInstance("quantity")!;
    // if(data === ""){
    //   console.log("empty")
    //   this.commonFilter(data)
    // }
    // else{
    //   if(this.title === "Order"){
    //     if(this.checkDataType(data)){
    //      qtyFilterComponent.setModel({
    //        type: 'contains',
    //        filter:data
    //      })
    //     }
    //     else{
    //     //  console.log("String is this")
    //      this.commonFilter(data)
    //     }
    //    }
    //   else if(this.title === "Product"){
    //     this.commonFilter(data)
    //    } 
    // }
    this.gridApi.onFilterChanged();
  }


  commonFilter(data: string){
    let productFilterComponent = this.gridApi.getFilterInstance("name")!;
    productFilterComponent?.setModel({
      type: 'contains',
      filter:data
    })
  }
  ////////////////////////////////////////////////

  checkDataType(data: string):boolean{
    try { 
      // console.log(data)
      if(parseInt(data)){
        return true
      }
    } catch (error) {
      return false
    }
    return false
  }

  ////////////////////////////////////////////////////////

  firstLatter(params: any){
    return  params.value.charAt(0).toUpperCase();
  }

  ////////////////////////////////////////////////////////

  deleteRow(id: string):void{
    console.log("delete row id is",id)
    this.itemStorageService.deleteRow(id,this.title)
    if(this.title==="Product"){
      this.gridApi.setRowData(this.itemStorageService.ProductData)
      console.log("After delete product",this.itemStorageService.ProductData)
    }
    else if(this.title === "Order"){
      this.gridApi.setRowData(this.itemStorageService.OrderData)
    }
  }

  ////////////////////////////////////////////////////////
  editRow(data: any,id: string):void{
    if(this.title === "Order"){
      const itemIndex = this.itemStorageService.findIndexOfItem(this.itemStorageService.OrderData,id)
      const item = this.itemStorageService.OrderData[itemIndex]
      // console.log("edit is called")
      this.observableService.orderPopUp.next(this.OrderDataForEdit(item,id))
    }
    else if(this.title === "Product"){
      const itemIndex = this.itemStorageService.findIndexOfItem(this.itemStorageService.ProductData,id)
      const item = this.itemStorageService.ProductData[itemIndex]
      this.observableService.productPopUp.next(this.ProductDataForEdit(item,id))
    }

  }

  ///////////////////////////////////////
  OrderDataForEdit(item: any,id: string){
    return [
      {
        id:id,
        type:"text",
        label:"Order",
        value:item.name,
        name:"orderName",
        placeholder:"Enter Order Name"},
      {
        id:id,
        type:"number",
        label:"Quantity",
        value:item.quantity,
        name:"quantity",
        min:1,
        placeholder:"Enter Quantity"}
    ]
  }

  ProductDataForEdit(item:any,id:string){
    return [{ 
      id:id,
      type:"text",
      label:"Product",
      value:item.name,
      name:"product",
      placeholder:"Enter Product Name"
      }]
  }

  ////////////////////////////////////////////////////////
  onAddItem():void{
    // console.log("Add Item",this.itemStorageService.ProductData)
  if(this.title === "Order"){
    this.gridApi.setRowData(this.itemStorageService.OrderData)
  }

  else if(this.title === "Product"){
    this.gridApi.setRowData(this.itemStorageService.ProductData)
  }
  }

  ////////////////////////////////////////////////////////
  onGreadReady(params: any){
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi
    // params.api.getToolPanelInstance('filters')!.expandFilters();
  }

  ////////////////////////////////////////////////////////
  showId(){
    this.gridApi.forEachNode((data)=>{
      console.log(data)
    })
  }


 ////////////////////////////////////////////////////////




//  columnDefs : ColDef[] =[
//   {field:"name",colId:"name",filter: 'agSetColumnFilter',filterParams:this.itemStorageService.defaultFilterParams},
//   {field:"name",valueFormatter:this.firstLatter,headerName:"FirstLetter",filter: 'agSetColumnFilter'},
//   {headerName:"Edit",field:"edit",  
//   cellRendererSelector:(params):any=>{
//     return {
//       component:EditButtonComponent,
//       params:{value:params.data.id}
//     }
//   }
//   },
//   {headerName:"Delete",field:"delete",
//   cellRendererSelector:(params):any=>{
//     return {
//       component:DeleteButtonComponent,
//       params:{value:params.data.id}
//     }
//   }
//   },
// ]
  
}
