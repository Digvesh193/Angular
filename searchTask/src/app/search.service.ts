import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchObservable : Subject<any>

  nameArray = ['digvesh dadhaniya','tirth shah','malhar gadhiya','kalp aghera','savan ghoi','kishan dadhaniya','tej dadhaniya']
  listArray: any = [] 


  constructor() {
    this.searchObservable = new Subject<any>()
   }

   addValue(value : string){
    this.listArray = this.nameArray.filter((data):any=>{
      if(data.includes(value)){
        return true;
      }
    })
    
    let x = this.listArray.map((data:any):any=>{
         return data.replaceAll(value,`<span class='highlight'>${value}</span>`)
        })
        
        this.searchObservable.next(x)
      }

   
}
