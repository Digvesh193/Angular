import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Observable, of, Subject, take, throwError, zip } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styleUrls: ['./fork-join.component.css']
})
export class ForkJoinComponent implements OnInit {

  nameSource = ['digvesh','kalp','ketul','tej']

  colorSource = ['red','yellow','blue','orange']

  // getColor(){
  //   return of("orange")
  // }

  // getName(){
  //   // return throwError("sdfsdf")
  //   return of("digvesh")
  // }


 

  obs1 = new Subject<any>();
  obs2 = new Subject<any>();

  onChangeObs1(){
    this.obs1.next("orange")
    
  }
  onChangeObs2(){
    this.obs2.next("digvesh")
   
  }

  ngOnInit(): void {

    //Ex -1 zip
    zip(this.obs1,this.obs2.pipe(
      map(res =>res+" hello")
    )).subscribe(res=>console.log('zip =>',res))

    //Ex - 2 forkJoin => run when observable completed
    forkJoin([this.obs1.pipe(
      take(2) 
    ),this.obs2.pipe(
      map(res =>res+" hello"),
      take(2)
    )]).subscribe(res=>console.log('forkjoin =>',res))
  }
}
