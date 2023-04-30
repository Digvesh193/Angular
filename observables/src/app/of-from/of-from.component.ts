import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {

    /////////////////////////OF operator////////////////////////////////////////
    // const Obs1 = of({a:'digvesh',b:'kalp',c:'tej'},{a:'digvesh',b:'kalp',c:'tej'},{a:'digvesh',b:'kalp',c:'tej'})
    // Obs1.subscribe(res=>{
    //   console.log(res)
    //       // for(let i in res){
    //       //   // console.log(res[i])
    //       // }
    //   // console.log(typeof res)
    // })


  

    //////////////////////////////////////////////////////////////////////////////
    /////////////////////////////From operator///////////////////////////////////

    //from-array  
    // const Obs3 = from(['digvesh','dadhaniya','kalp','aghera',1,true])    
    // Obs3.subscribe(res=>{
    //   console.log(res)
    // })


    // //from-promises
    // const promise = new Promise(resolve =>{
    //   setTimeout(() => {
    //     resolve('promise resolve')
    //   }, 3000);
    // })

    // promise.then(res=>{
    //   console.log(res)
    // })
    // const Obs4 = from(promise)    
    // Obs4.subscribe(res=>{
    //   console.log("from promise =>",res)
    // })
    
    
    // //from-string
    // const Obs5 = from("promise")    
    // Obs5.subscribe(res=>{
    //   console.log("from promise =>",res)
    // })


    //of-promise
    // const promise1 = new Promise(resolve =>{
    //   setTimeout(() => {
    //     resolve('promise resolve1')
    //   }, 3000);
    // })

    // const promise2 = new Promise(resolve =>{
    //   setTimeout(() => {
    //     resolve('promise resolve2')
    //   }, 3000);
    // })

    // const Obs6 = of(promise1,promise2)
    // Obs6.subscribe(res =>{
    //   console.log("of => promises",res)
    // })


    
  
    

  }

}
