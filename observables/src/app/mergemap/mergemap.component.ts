import { Component, OnInit } from '@angular/core';
import { from, interval, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {
  
    getData(data: string){
      return of(data + ' video Uploaded')
    }
    ngOnInit(): void {

      //map + mergeAll = mergeMap

      // let course = interval(1000)
      // course.subscribe(res=>{
      //   of(res).pipe(
      //     map(data=>data*2)
      //   ).subscribe(res1=>{
      //     console.log(res1)
      //   })
      // })

      /////////////map + mergeMap

      // const source = from(['Tech','Comedy','News'])

      // source.pipe(
      //   map(res=>this.getData(res)),
      //   mergeAll()
      // ).subscribe(res=>{
      //   console.log(res)
      //   // res.subscribe(res1=>{
      //   //   console.log(res1)
      //   // })
      // })


      //mergeMap
      // const source = from(['Tech','Comedy','News'])

      // source.pipe(
      //   mergeMap(res=>this.getData(res)),
      // ).subscribe(res=>{
      //   console.log(res)
      //     // res.subscribe(res1=>{
      //     //   console.log(res1)
      //     // })
      // })
      
    }
}
