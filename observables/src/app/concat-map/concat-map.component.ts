import { Component, OnInit } from '@angular/core';
import { concat, concatAll, concatMap, debounceTime, delay, filter, from, map, mergeAll, mergeMap, of, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.css']
})
export class ConcatMapComponent implements OnInit {

  constructor(){
    console.log("ConcatMap Constructor Called")
  }


  getData(data: any){
    return of( data + ' video ').pipe(delay(5000))
  }

  ngOnInit(): void {
    const source = from(['Tech','Comedy','News']).pipe(delay(5000))
    // const source = of(['Tech','Comedy','News'])


    //Ex - 01 | Map

    // source.pipe(
    //   // map(x=>x+" map"),
    //   // tap(x=>console.log(x,"map")),
    //   // map((x):any=>{
    //   //   if(x==="Tech"){
    //   //     return x;
    //   //   }
    //   // })

    //   map(x=>x+" hello"),
    //   tap(x=>console.log(x,"map"))

    // )
    // .subscribe(res=>console.log(res,"Subscribe"))


    // Ex - 02 | Filter

      // source.pipe(
      //   filter((x):any=>{
      //     if(x==="Tech"){
      //       return true
      //     }
      //     // return false
      //   }),
      //   tap(x=>console.log(x,"tap called"))
      // )
      // .subscribe(res=>console.log(res))    


    // Ex - 03 | concatMap

    // source.pipe(
    //   map(x=>this.getData(x)),
    //   concatAll()
    // ).subscribe(res=>console.log(res))


    // Ex - 04 | mergeAll
    // source.pipe(
    //   map(x=>this.getData(x)),
    //   // concatAll()
    //   mergeAll()
    // ).subscribe(res=>console.log(res))


    // Ex - 05 | MergeMap

    // source.pipe(
    //   mergeMap(x=>this.getData(x))
    //   // map(x=>this.getData(x)),
    //   // concatAll()
    //   // mergeAll()
    // ).subscribe(res=>console.log(res))

    // Ex - 05 | ConcatMap

    source.pipe(
      // delay(2000)
      // debounceTime(2)
      // tap(x=>console.log(x)),
      // concatMap(x=>this.getData(x))
      map(x=>this.getData(x)),
      concatAll()
      // mergeAll()

    ).subscribe(res=>{
      console.log(res)
    })

    // from("hello").subscribe(res=>console.log(res))
    // 






















    // source.pipe(
    //   map(res => this.getData(res))
    // )
    // .subscribe(res=>{
    //   console.log(res)
    //     // res.subscribe(res1=>console.log(res1))
    // })

    //Ex - 02 | Map + ConcatAll

    // source.pipe(
    //   mergeMap(res => this.getData(res))
    // )
    // .subscribe(res=>{
    //     console.log(res)
    // })
    //Ex - 04 | Map + MergeMap()

    // source.pipe(
    //   map(res => this.getData(res)),
    //   concatAll()
    // )
    // .subscribe(res=>{
    //   // console.log("Hi Digvesh")
    //     console.log(res)
    // })

    //Ex - 03 | ConcatMap

    // source.pipe(
    //   concatMap(res =>this.getData(res))
    // )
    // .subscribe(res=>{
    //     console.log(res)
    // })


  }
}
