import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, ColGroupDef, GridApi, GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-column-group',
  templateUrl: './column-group.component.html',
  styleUrls: ['./column-group.component.css']
})
export class ColumnGroupComponent {

  // columnDefs = [
  //   { field: 'make' },
  //   { field: 'model' },
  //   { field: 'price' }
  // ]

//   defaultColDef = {
//     // set every column width
//     width: 400,
//     // make every column editable
//     editable: true,
//     // make every column use 'text' filter by default
//     filter: 'agTextColumnFilter',
// };

//   columnDefs = [
//     { 
//       headerName:"Athlete Details",
//       children:[
//         { field: 'athlete' },
//         { field: 'age' },
//         { field: 'country' },
//       ]
//      },
//      {
//       headerName: 'Sports Results',
//       children: [
//           { field: 'sport' },
//           { field: 'total', columnGroupShow: 'closed' },
//           { field: 'gold', columnGroupShow: 'open' },
//           { field: 'silver', columnGroupShow: 'open' },
//           { field: 'bronze', columnGroupShow: 'open' },
//       ]
//   }
    
//   ]

//   rowData = [
//     { make: 'Toyota', model: 'Celica', price: 35000 },
//     { make: 'Ford', model: 'Mondeo', price: 32000 },
//     { make: 'Porsche', model: 'Boxster', price: 72000 }
// ];


  gridApi!: GridApi<any>;
  columnDefs: (ColDef | ColGroupDef)[] = [
    {
      headerName: 'Athlete Details',
      marryChildren:true,
      headerClass: 'color',
      children: [
        {
          
          field: 'athlete',
          width: 180,
          filter: 'agTextColumnFilter',
        },
        
        {  field: 'country', width: 200 },
        {  field: 'date', width: 200 },
      ],
    },
    {
      field: 'age',
      width: 200,
      filter: 'agTextColumnFilter',
      spanHeaderHeight: true // will allow the header cell to span the whole height of the header container instead of using padding.
    },
    {
      headerName: 'Sports Results',
      headerClass: 'color',
      marryChildren:true,
      children: [
        { field: 'sport', width: 140 },
        {
          columnGroupShow: 'closed',
          field: 'total',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'open',
          field: 'gold',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'open',
          field: 'silver',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
        {
          columnGroupShow: 'open',
          field: 'bronze',
          width: 100,
          filter: 'agNumberColumnFilter',
        },
      ],
    },
  ];
  
  defaultColDef: ColDef = {
    // sortable: true,
    // resizable: true,
    // filter: true,
    // width:500
  };

  rowData!:any;

  constructor(private http:HttpClient){

  }

  onGridReady(params: any) {

    this.gridApi = params.api
    this.http.get<any[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => (this.rowData = data));
  }

  onBtNoGroups() {
    const columnDefs: ColDef[] = [
      { field: 'athlete', colId: 'athlete' },
      { field: 'age', colId: 'age' },
      { field: 'country', colId: 'country' },
      { field: 'year', colId: 'year' },
      { field: 'date', colId: 'date' },
      { field: 'total', colId: 'total' },
      { field: 'gold', colId: 'gold' },
      { field: 'silver', colId: 'silver' },
      { field: 'bronze', colId: 'bronze' },
    ];
    this.gridApi.setColumnDefs(columnDefs);
  }

  onMedalsInGroupOnly() {
    const columnDefs: (ColDef | ColGroupDef)[] = [
      { field: 'athlete', colId: 'athlete' },
      { field: 'age', colId: 'age' },
      { field: 'country', colId: 'country' },
      { field: 'year', colId: 'year' },
      { field: 'date', colId: 'date' },
      {
        headerName: 'Medals',
        headerClass: 'medals-group',
        children: [
          { field: 'total', colId: 'total' },
          { field: 'gold', colId: 'gold' },
          { field: 'silver', colId: 'silver' },
          { field: 'bronze', colId: 'bronze' },
        ],
      },
    ];
    this.gridApi.setColumnDefs(columnDefs);
  }

  onParticipantInGroupOnly() {
    const columnDefs: (ColDef | ColGroupDef)[] = [
      {
        headerName: 'Participants',
        headerClass: 'participant-group',
        children: [
          { field: 'athlete', colId: 'athlete' },
          { field: 'age', colId: 'age' },
          { field: 'country', colId: 'country' },
          { field: 'year', colId: 'year' },
          { field: 'date', colId: 'date' },
        ],
      },
      { field: 'total', colId: 'total'},
      { field: 'gold', colId: 'gold'},
      { field: 'silver', colId: 'silver'},
      { field: 'bronze', colId: 'bronze'},
    ];
    this.gridApi.setColumnDefs(columnDefs);
  }

  onParticipantAndMedalsInGroups() {
    const columnDefs: (ColDef | ColGroupDef)[] = [
      {
        headerName: 'Participant',
        headerClass: 'participant-group',
        children: [
          { field: 'athlete', colId: 'athlete' },
          { field: 'age', colId: 'age' },
          { field: 'country', colId: 'country' },
          { field: 'year', colId: 'year' },
          { field: 'date', colId: 'date' },
        ],
      },
      {
        headerName: 'Medals',
        headerClass: 'medals-group',
        children: [
          { field: 'total', colId: 'total' },
          { field: 'gold', colId: 'gold' },
          { field: 'silver', colId: 'silver' },
          { field: 'bronze', colId: 'bronze' },
        ],
      },
    ];
    this.gridApi.setColumnDefs(columnDefs);
  }



}
