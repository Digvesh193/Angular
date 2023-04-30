import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ColDef, ColGroupDef } from 'ag-grid-community';

@Component({
  selector: 'app-row-data',
  templateUrl: './row-data.component.html',
  styleUrls: ['./row-data.component.css']
})
export class RowDataComponent {
  // columnDefs = [
  //   { field: 'athlete'},
  //   { field: 'medals.gold', headerName: 'Gold'},
  //   { field: 'medals.silver', headerName: 'Silver',editable:false},
  // ]

  // rowData = [
  //   {
  //       athlete: 'Michael Phelps',
  //       medals: {
  //           gold: 8, silver: 10, bronze: 0
  //       }
  //   }
  // ];
  //////////////////////////////////////////

  columnDefs: (ColDef | ColGroupDef)[] = [
    // using default ColDef
    { field: 'athlete',colId:"athlete" },
    { field: 'sport',pinned: "left"}, //,sort:'desc'
    // using number column type
    { field: 'age', type: 'numberColumn',width:200 },
    { field: 'age', type: 'numberColumn' ,width:200,},
    { field: 'year', type: 'numberColumn' },
    // using date and non-editable column types
    { field: 'date', type: ['dateColumn', 'nonEditableColumn'], width: 220 },
    {
      headerName: 'Medals',
      groupId: 'medalsGroup',
      children: [
        // using medal column type
        { headerName: 'Gold', field: 'gold', type: 'medalColumn' },
        { headerName: 'Silver', field: 'silver', type: 'medalColumn' },
        { headerName: 'Bronze', field: 'bronze', type: 'medalColumn' },
        {
          headerName: 'Total',
          field: 'total',
          type: 'medalColumn',
          columnGroupShow: 'closed',
        },
      ],
    },
  ];



  defaultColDef = {
    width: 150,
    // make every column editable
    editable: true,
    // make every column use 'text' filter by default
    filter: 'agTextColumnFilter',
    // enable floating filters by default
    floatingFilter: true,
    // make columns resizable
    resizable: true,
  };

  columnTypes: {
    [key: string]: ColDef;
  } = {
    numberColumn: { width: 400, filter: 'agNumberColumnFilter' },
    medalColumn: { width: 100, columnGroupShow: 'open', filter: false },
    nonEditableColumn: { editable: false },
    dateColumn: {
      // specify we want to use the date filter
      filter: 'agDateColumnFilter',
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          const dateParts = cellValue.split('/');
          const day = Number(dateParts[0]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[2]);
          const cellDate = new Date(year, month, day);
          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    },
  };


  rowData !: any
  gridColumnApi !:any
  gridRowApi !: any

  constructor(private http:HttpClient){
  }



  onGridReady(params: any){
    this.http.get("https://www.ag-grid.com/example-assets/olympic-winners.json").subscribe(res=>{
      this.rowData = res
    })

    let cols = params.columnApi.getColumns();
    cols.forEach((col: any) => {
      const colDef = col["colDef"]
      console.log(col) 
      console.log(colDef)
    });

    this.gridColumnApi = params.columnApi
    this.gridRowApi = params.api


    let columnState = params.columnApi.getColumnState();
    // params.columnApi.applyColumnState({state:savedState})
  }

  saveState() {
    localStorage.setItem("state",JSON.stringify( this.gridColumnApi.getColumnState()))
    console.log('column state saved');
    // this.gridRowApi.setRowData([])
    console.log(this.gridColumnApi)
  }

  restoreState() {
    // if (!localStorage.getItem("state")) {
    //   console.log('no columns state to restore by, you must save state first');
    //   return;
    // }
    // this.gridColumnApi.applyColumnState({
    //   state: JSON.parse(localStorage.getItem("state") || ""),
    //   applyOrder: true,
    // });
    // console.log('column state restored');

    this.gridColumnApi.applyColumnState({
      // state:[
      //  { colId: 'sport',
      //   sort: 'asc'}
      // ]

      state: [
        { colId: 'country' },
        { colId: 'age' },
        { colId: 'sport' },
        { colId: 'athlete' },
    ],
    applyOrder: true
    })
    console.log(this.gridColumnApi.getColumnState())
  }

  resetState() {
    this.gridColumnApi.resetColumnState();
    console.log('column state reset');
  }



}
