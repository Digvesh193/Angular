import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { ItemStorageService } from '../item-storage.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  @Input() ColDefs !: ColDef<any>[]
  rowData !: any

  constructor(private itemStorageService : ItemStorageService){
    this.rowData = itemStorageService.OrderData
  }
  
  ngOnInit(): void {
    console.log(this.ColDefs)
  }

  
  // constructor(@Inject(MAT_DIALOG_DATA)){}
  // constructor(public dialogRef: MatDialogRef<PopUpComponent>){}
}
