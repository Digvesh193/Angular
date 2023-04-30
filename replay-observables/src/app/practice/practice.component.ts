import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  observable : Observable<any> = new Observable<any>()
  constructor(){
    this.observable = from([1,2,3])

  }
  ngOnInit(): void {
    this.observable.subscribe((data)=>console.log(data))

    const obserVable = new Observable((subscriber)=>{
      subscriber.next("hello => 1")
      subscriber.next("hello => 2")
      subscriber.next("hello => 3")
      subscriber.next("hello => 4")
      // setTimeout(()=>subscriber.next("hello => 5"),2000)
      subscriber.complete()
    })

    obserVable.subscribe({
      next : (data)=>console.log(data),
      error : (error)=>console.log(error),
      complete : ()=>console.log("compelte")
    })
    
    obserVable.subscribe({
      next : (data)=>console.log(data),
      error : (error)=>console.log(error),
      complete : ()=>console.log("compelte")
    })


    
  }
}
