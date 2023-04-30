import { AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit{

  userData : any

  array :Array<any>  = []


  constructor(public storageServie : StorageService){
    
  }
 
  ngOnInit(): void {
    this.storageServie.submitObservable.subscribe(res=>{
      console.log(this.storageServie.value)
        this.userData = structuredClone(this.storageServie.value)
        this.change()
    })
  } 

  change(){
    this.array = []
    for(let value of this.userData.values()){
      this.array.push(value)
    }
  }
  
  
}
