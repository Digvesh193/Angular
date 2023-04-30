import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, Observable, of, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

  myColor : string  =''

  constructor(){

  }
  ngOnInit(): void {

    //example 1

    // const Arr = ['digvesh','kalp','ketul','digvesh']

    // const source = from(Arr)

    // source.subscribe({
    //   next:(data)=>console.log(data),
    //   error:(error)=>console.log(error),
    //   complete:()=>console.log("this is practice","Complete")
    // })

    /////////////////////////////

    // const obj = new Observable(subscriber=>{
    //   subscriber.next("hello")
    // })

    // obj.subscribe({
    //   next:(data)=>console.log("practice ",data),
    //   error:(error)=>console.log(error),
    //   complete:()=>console.log("this is practice","Complete")
    // })

    // const source = interval(1000)
    // const source = of(Arr)

    // let obsSubscription : Subscription;
    
    // obsSubscription = source.pipe(
      // map((res):any => {
      //   if(res>=Arr.length){
      //     obsSubscription.unsubscribe()
      //   }
      //   else{
      //     return Arr[res]
      //   }
      // })
      // tap(res =>{
      //   console.log("tap before",res)
      //   if(res === 4){
      //     obsSubscription.unsubscribe()
      //   }
        
      // }),
      // tap(res =>res)

      // map(res => Arr[res]),
      // tap(res => console.log("tap after",res))

      // map(res => console.log("hello",res))

      // filter(data=>data)

      // map(res =>{
      //   console.log(res)
      // })
    // ).subscribe(res =>{
    //   console.log(res)
    // })



    //example 2


    // const ColorArr = ['red','green','blue','yellow']

    // let obsSubscription2 = Subscription;

    // let source = interval(1000)

    // source.pipe(
    //   tap(res =>{
    //     this.myColor = ColorArr[res]
    //   })
    // )
    // .subscribe(res =>{
    //   console.log(res)    
    // })
  }
}
