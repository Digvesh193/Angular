import { NgForm } from "@angular/forms";
import { GetRowIdParams } from "ag-grid-community";

export interface Item{
    rowData : any;
    columnDefs: any;
    defaultColDef:any
    rowSelection: any;
    gridOptions: any;
    title: string

    onGridReady(params: any):any;
    onAddItem(result: NgForm): void;
    onUpdate(updateValue: any): void;
    deleteRow(id: string): void;
    editRow(data: any,id: string,popUpContainer: any): void;
    getApiData(): void;
    onInputFilter(data: string):void
    setButtonComponentRef(buttonRef: any):void;
}