import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables';
  constructor(){

  }

  ngOnInit(): void {

  //   console.log("digvesh")

  //   const observables = new Observable((subscriber)=>{
    
  //     subscriber.next("a");
  //     subscriber.next("b");
  //     subscriber.next("c");
  //     subscriber.next("d");
  //     subscriber.next("e");
  //     setTimeout(()=>{
  //       subscriber.next("f")
  //     },5000)
  //     // subscriber.error("error")
  //     // subscriber.complete("complete")
  //     subscriber.complete()
      
  //   })
  

  //   observables.subscribe({
  //     next:(value)=>console.log(value),
  //     error:(error)=>console.log(error),
  //     complete:()=>console.log("complete")
  //   })
  }

}
