import { Component, OnInit } from '@angular/core';
import { from, retry } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  constructor(){

  }

  ngOnInit(): void {
    const promise = new Promise((resolve,reject)=>{
      reject("error in api")
      console.log("errldk")
    })


    const source = from(promise)

    source.pipe(
      retry(6)
    ).subscribe({
      next:(data)=>console.log("next",data),
      error:(error)=>console.log("error =>",error)
    })

  }

}
