import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'account-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements DoCheck {

  storage : any  ={}

  constructor(){
  }
  ngDoCheck(): void {
    this.storage = JSON.parse(localStorage.getItem("form") || "")
    console.log(this.storage)
  }

}
