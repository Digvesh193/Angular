import { getHtmlTagDefinition } from '@angular/compiler';
import { ApplicationModule, Component } from '@angular/core';
import { ColDef, ColumnApi, GetRowIdFunc, GetRowIdParams, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  //////
  gridApi !: GridApi
  gridColumnApi !: ColumnApi
  immutableStore:Array<any> = [];

  rowSelection: 'single' | 'multiple' = 'multiple';

  getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
    console.log("GetRowId api called")
    return params.data.symbol;
  };

  defaultDefs:ColDef ={
    width: 250,
    sortable: true,
    resizable: true,
  }

  columnDefs:ColDef[]=[
    {field:"symbol",headerName:"Symbol"},
    {field:"price",headerName:"Price"},
    {field:"group",headerName:"Group"},
  ]

  rowData: any[] | null = this.immutableStore;
  

  constructor(){}

  addFiveItems(append: boolean){
    const newStore = this.immutableStore
    for(let i=0;i<5;i++){
      const newItem = this.createItem()
      if(append){
        newStore.push(newItem)
      }
      else{
        newStore.splice(0,0,newItem)
      }
    }

    this.gridApi.setRowData(newStore)
    // console.log(newStore)
    // console.log(this.immutableStore)
  }


  removeSelected(){
    const selectedRowNodes = this.gridApi.getSelectedNodes()
    const selectedIds = selectedRowNodes.map((rowNode)=>{
      return rowNode.id
    })

    console.log(selectedIds)

    this.immutableStore=this.immutableStore.filter((dataItem)=>{
      return selectedIds.indexOf(dataItem.symbol)<0
    })

    this.gridApi.setRowData(this.immutableStore)
  }

  updatePrices(){
    const newStore:any[] = []
    this.immutableStore.forEach((item)=>{
      newStore.push({
        symbol:item.symbol,
        group:item.group,
        price : Math.floor(Math.random()*100)
      })
    })

    this.immutableStore = newStore
    this.gridApi.setRowData(this.immutableStore)
    console.log(this.gridApi)
    this.showNode()

  }

  


  reverseItems(){
    this.immutableStore.reverse();
    this.gridApi.setRowData(this.immutableStore)
  }

  onGridReady(params: GridReadyEvent){
    this.gridApi = params.api
    this.gridColumnApi = params.columnApi

    this.immutableStore = [];
    this.immutableStore = this.getInitialData();
    this.gridApi.setRowData(this.immutableStore)
    this.showNode()
  
  }

  showNode(){
    this.gridApi.forEachNode((data)=>{
      console.log(data)
     })
  }



  showPartiCularNode(){
   this.gridApi.forEachNode((data)=>{
    console.log(data)
    })
  }

  getInitialData(){
    const data:any = []
    for(let i=0;i<5;i++){
      data.push(this.createItem())
    }
    return data;
  }

  createItem() {
    const item = {
      group: ['A', 'B', 'C'][Math.floor(Math.random() * 3)],
      symbol: this.createUniqueRandomSymbol(),
      price: Math.floor(Math.random() * 100),
    };
    return item;
  }

  createUniqueRandomSymbol(){
    let symbol: any;
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let isUnique = false;
    while (!isUnique) {
      symbol = '';
      // create symbol
      for (let i = 0; i < 3; i++) {
        symbol += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      // check uniqueness
      isUnique = true;
      this.immutableStore.forEach(function (oldItem:any) {
        if (oldItem.symbol === symbol) {
          isUnique = false;
        }
      });
    }
    return symbol;
    }
}
