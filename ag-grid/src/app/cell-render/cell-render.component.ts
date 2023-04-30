import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { GenderComponent } from '../gender/gender.component';
import { MoodComponent } from '../mood/mood.component';

@Component({
  selector: 'app-cell-render',
  templateUrl: './cell-render.component.html',
  styleUrls: ['./cell-render.component.css']
})
export class CellRenderComponent {
  
  constructor(){}

  // columnDefs:ColDef[]=[
  //   {field:"number",valueFormatter:this.changeNumberType}
  // ]

  // rowData=[
  //   {number:1},
  //   {number:2},
  //   {number:3},
  //   {number:5},
  //   {number:6},
  //   {number:7},
  //   {number:8},
  //   {number:9},
  //   {number:10},
  //   {number:11},
  //   {number:12},
  // ]

  // changeNumberType(params: any){
  //   return "$"+params.value
  // }

  defaultColDef: ColDef = {
    flex: 1,
    
  };

  columnDefs:ColDef[]=[
    {field:'value'},
    {headerName:'Render Value',field:'value',
      cellRendererSelector:(params):any=>{
        const moodDetails ={
          component:MoodComponent
        }
        const genderDetails = {
          component:GenderComponent,
          params:{value:["Male","Female"]}
        }
        // console.log(params.data)
        if(params.data){
          if(params.data.type === "gender"){
            // console.log("call")
            return genderDetails
          }
          else if(params.data.type === "mood"){
            return moodDetails;
          }
        }
        return undefined;
      },
    },
    {field:'type'}
  ]

  rowData= [
    { value: 14, type: 'age' },
    { value: 'female', type: 'gender' },
    { value: 'Happy', type: 'mood' },
    { value: 21, type: 'age' },
    { value: 'male', type: 'gender' },
    { value: 'Sad', type: 'mood' },
  ];




}
