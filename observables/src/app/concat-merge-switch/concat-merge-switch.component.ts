import { Component, OnInit } from '@angular/core';
import { concatAll, delay, from, map, mergeAll, of, switchAll } from 'rxjs';

@Component({
  selector: 'app-concat-merge-switch',
  templateUrl: './concat-merge-switch.component.html',
  styleUrls: ['./concat-merge-switch.component.css']
})
export class ConcatMergeSwitchComponent implements OnInit {
  constructor(){

  }

  getData(data: any){
    return of(data + ' video uploded').pipe(delay(4000));
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News'])


    // Ex -1
    // source.subscribe(res=>{
    //   console.log(res)
    // })

    //Ex -2 | ConcatMap

    source.pipe(
      map(data => this.getData(data)),
      concatAll()
    )
    .subscribe(res=>console.log("concat => ",res))

     //Ex -2 | MergeMap
    source.pipe(
      map(data => this.getData(data)),
      mergeAll()
    )
    .subscribe(res=>console.log("merge => ",res))

     //Ex -2 | switchMap
    source.pipe(
      map(data => this.getData(data)),
      switchAll()
    )
    .subscribe(res=>console.log("switch => ",res))


  }
}
