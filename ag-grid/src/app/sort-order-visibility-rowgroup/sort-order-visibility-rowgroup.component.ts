import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, SideBarDef } from 'ag-grid-community';

@Component({
  selector: 'app-sort-order-visibility-rowgroup',
  templateUrl: './sort-order-visibility-rowgroup.component.html',
  styleUrls: ['./sort-order-visibility-rowgroup.component.css']
})
export class SortOrderVisibilityRowgroupComponent {

  rowData !: any
  gridColApi !: any
  gridApi !: any
  rowGroupPanelShow: 'always' | 'onlyWhenGrouping' | 'never' = 'always';
  pivotPanelShow: 'always' | 'onlyWhenPivoting' | 'never' = 'always';
  
  sideBar= {
    toolPanels: ['columns'],
  };

  defaultColDef:ColDef={
    sortable: true,
    resizable: true,
    width: 150,
    rowGroup: true,
    enablePivot: true,
    enableValue: true,
}

  columnDefs:ColDef[]=[
    { field: 'athlete'},
    { field: 'age' },
    { field: 'country' },
    { field: 'sport' },
    { field: 'year' },
    { field: 'date' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]



  constructor(private http : HttpClient){
  }

  onBtSortAthlete() {
    this.gridColApi.applyColumnState({
      state:[
        {
          colId:"athlete",
          sort:"asc"
        }
      ],
      defaultState:{sort:null}
    })
  }

  onBtSortCountryThenSportClearOthers(){
    this.gridColApi.applyColumnState({
      state:[
          {
            colId:"sport",
            sort:"asc",
            sortIndex:0
          },  
        {
          colId:"country",
          sort:"asc",
          sortIndex:1
        },
      ],
      defaultState: { sort: null }, 
    })
  }

  onBtClearAllSorting(){
    this.gridColApi.applyColumnState({
      defaultState:{sort:null}
    })
  }

  onBtRowGroupCountryThenSport() {
    this.gridColApi.applyColumnState({
      state: [
        { colId: 'country',rowGroupIndex:0},
        { colId: 'sport', rowGroupIndex: 1 },
      ],
      defaultState: { rowGroup: false },
    });
  }

  onBtOrderColsMedalsFirst() {
    this.gridColApi.applyColumnState({
      state:[
        {colId:'gold'},
        {colId:'silver'},
        {colId:'bronze'},
        {colId:'total'},
      ],
      applyOrder:true
    })
  }
  onBtOrderColsMedalsLast(){
    this.gridColApi.applyColumnState({
      state:[
        { colId: 'athlete' }, 
        { colId: 'country' },
        { colId: 'age' },
        { colId: 'sport' },
        { colId: 'year' },
        { colId: 'date' },
        { colId: 'gold' },
        { colId: 'silver' },
        { colId: 'bronze' },
        { colId: 'total' },
      ],
      applyOrder:true
    })
  }

  onBtHideMedals(){
   this.gridColApi.applyColumnState({
    state:[
      {colId:'silver',hide:true},
      {colId:'gold',hide:true},
      {colId:'bronze',hide:true},
      {colId:'total',hide:true},
    ]
   })
  }

  onBtShowMedals(){
    this.gridColApi.applyColumnState({
      state:[
        {colId:'silver',hide:false},
        {colId:'gold',hide:false},
        {colId:'bronze',hide:false},
        {colId:'total',hide:false},
      ]
    })
  }






  onGridReady(params: any){
    this.http.get("https://www.ag-grid.com/example-assets/olympic-winners.json").subscribe((res)=>{
      this.rowData = res
    })
    this.gridApi = params.api
    this.gridColApi = params.columnApi
  }




}
