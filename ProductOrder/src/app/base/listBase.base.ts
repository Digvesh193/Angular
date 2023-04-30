import { HttpClient } from "@angular/common/http";
import { ColDef, ColumnApi, GetRowIdFunc, GetRowIdParams, GridApi, GridOptions } from "ag-grid-community";
import { DeleteButtonComponent } from "../delete-button/delete-button.component";
import { EditButtonComponent } from "../edit-button/edit-button.component";
import { rowDataType } from "../item-storage.service";

export class ListBaseClass {

    gridOptions !: GridOptions

    constructor(private storageService: any) {
        this.gridOptions ={
            context : {
               componentParent: this
           }
         }
    }
    
    gridApi !: GridApi
    gridColumnApi !: ColumnApi
    defaultColDef:ColDef ={
        width:250,
        filter: true,
        sortable: true,
    }
    
    rowSelection : 'single' | 'multiple' = 'multiple'

    nameAgGridColumn = {field:"name",colId:"name",filter: 'agSetColumnFilter',filterParams:this.storageService.defaultFilterParams}

    editAgGridColumn = {
        headerName: "Edit", field: "edit",
        cellRendererSelector: (params: any): any => {
            return {
                component: EditButtonComponent,
                params: { value: params.data.id }
            }
        }
    }

    deleteAgGridColumn = {
        headerName: "Delete", field: "delete",
        cellRendererSelector: (params: any): any => {
            return {
                component: DeleteButtonComponent,
                params: { value: params.data.id }
            }
        }
    }

    onAddItemBase(data: Array<rowDataType>,newData: any){
        data.push(newData)
        this.gridApi.setRowData(data)
        // console.log("After Add Item Base",this.storageService.ProductData)
    }

    editRowBase(data: Array<rowDataType>,updateData: any){
        const index = this.findIndexOfItem(data,updateData.id)
        data.splice(index,1,updateData)
        this.gridApi.setRowData(data)
    }

    deleteRowBase(id:string,data: Array<rowDataType>){  
        data.splice(this.findIndexOfItem(data,id),1);
        this.gridApi.setRowData(data)
    }

    findIndexOfItem(data: Array<any>,id: string):number{
        const arrayItem =  data.filter((item)=>{
           return id===item.id
         })
     
         if(arrayItem){
           return data.indexOf(arrayItem[0])
         }
         return -1;
    }

    getRowId: GetRowIdFunc = (params: GetRowIdParams)=>{
        return params.data.id
    }

    onGridReady(params: any){
        this.gridApi = params.api
        this.gridColumnApi = params.columnApi
    }

    onInputFilter(data: any):void{
        this.gridApi?.setQuickFilter(data.target.value)
        this.gridApi.onFilterChanged();
    }

    firstLatter(params: any) {
        return params.value.charAt(0).toUpperCase();
    }

    getProductData(item: any,id: string){
        return [{ 
            id:id,
            type:"text",
            label:"Product",
            value:item.name,
            name:"product",
            placeholder:"Enter Product Name"
            }]
    }
    getOrderData(item: any,id: string){
        return [
            {
              id:id,
              type:"text",
              label:"Title",
              value:item.title,
              name:"title",
              placeholder:"Enter title "},
            {
              id:id,
              type:"text",
              label:"Body",
              value:item.body,
              name:"body",
              min:1,
              placeholder:"Enter body"}
          ]
    }
    
}