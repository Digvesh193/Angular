import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, delay, distinctUntilChanged, from, map, of, Subject, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.css']
})
export class SwitchMapComponent implements OnInit {

  subject : Subject<any>

  getData(data: any){
    return of(data + ' video uploded').pipe(delay(2000))
  }

  constructor(){
    this.subject = new Subject<any>
  }
  
  ngOnInit(): void {



    this.subject.pipe(
      debounceTime(2000),
      distinctUntilChanged()
    ).subscribe(res=>{
      console.log("Subject => "+res)
    })








    // const source = from(['Tech','Comedy','News'])


    //Ex - 1 | Map

    // source.pipe(
    //   map(data=>this.getData(data))
    // )
    // .subscribe(res=>{
    //   console.log(res)
    // })
    
    //Ex - 2 | Map + SwitchAll
    
    // source.pipe(
    //   map(data=>this.getData(data)),
    //   switchAll()
    // )
    // .subscribe(res=>{
    //   console.log(res)
    // })
    // //Ex - 2 | SwitchMap
    
    // source.pipe(
    //   switchMap(data=>this.getData(data)),
    // )
    // .subscribe(res=>{
    //   console.log(res)
    // })
  }

  onInputChange(data: any){
    this.subject.next(data.target.value)
  }



}
