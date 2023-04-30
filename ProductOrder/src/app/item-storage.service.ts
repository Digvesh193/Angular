import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColDef, IProvidedFilterParams } from 'ag-grid-community';
import { Subject } from 'rxjs';

@Injectable()
export class ItemStorageService {

  // ProductObservable/

  formValue !: NgForm

  popUpOpen : Subject<any> = new Subject<any>();

  constructor() { }

  defaultColDef:ColDef ={

    width:200,
    filter: true,
    sortable: true,
  }

  rowSelection : 'single' | 'multiple' = 'multiple'
  
  defaultFilterParams:IProvidedFilterParams = {readOnly:true}

  ProductData: Array<rowDataType>= [
    {id:"1",name:"laptop"},
    {id:"2",name:"tv"},
    {id:"3",name:"watch"},
    {id:"4",name:"phone"},
    {id:"5",name:"bag"},
    {id:"6",name:"iron"},
  ]

  OrderData :Array<rowDataType> = [
    {id:"1",name:"laptop",quantity:"1"},
    {id:"2",name:"tv",quantity:"2"},
    {id:"3",name:"watch",quantity:"4"},
    {id:"4",name:"phone",quantity:"2"},
    {id:"5",name:"bag",quantity:"7"},
    {id:"6",name:"iron",quantity:"1"},
  ]



  deleteRow(id:string,title: string){
    if(title ==="Product"){
      this.ProductData = this.ProductData.filter((item):any=>{
        return item.id != id
    })
    }
    else if(title === "Order"){
      this.OrderData = this.OrderData.filter((item):any=>{
        return item.id != id
    })
    }
    }

  onSubmitForm(result: NgForm,id:string,title: string):void{
    let data:Array<any> = []
    let name = ""
    let quantity = ""
    if(title==="Product"){
      data = this.ProductData
      name = result.value.product
    }
    else if(title === "Order"){
      data = this.OrderData
      name = result.value.orderName
      quantity = (result.value.quantity).toString()
      // console.log(result.value.quantity)
    }
    this.changeData(data,name,quantity,id)
  }

  changeData(data:Array<rowDataType>,name: string,quantity: string,id: string){
    if(id != ""){
      let formObj = {
        id:id,
        name:name,
        quantity:quantity,
        // edit:"edit",
        // delete:"delete"
      }
      const x = this.findIndexOfItem(data,id)
      data.splice(x,1,formObj)
    }
    else{
      // console.log("id")
      // (parseInt(data[data.length-1].id)+1).toString()
      data.push({
        id:(parseInt(data[data.length-1].id)+1).toString(),
        name:name,
        quantity:quantity,
        // edit:"edit",
        // delete:"delete"
      })
    }
    console.log(data);
    
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
}

export interface rowDataType{
  id:string,
  name:string,
  edit?:string,
  delete?:string,
  quantity?:string
}


