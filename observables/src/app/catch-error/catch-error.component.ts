import { Component, OnInit } from '@angular/core';
import { forkJoin, map, Subject, take, zip } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  templateUrl: './catch-error.component.html',
  styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {
  constructor(){}
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
      // zip(this.obs1,this.obs2.pipe(
      //   map(res =>res+" hello")
      // )).subscribe(res=>console.log('zip =>',res))
  
      // Ex - 2 forkJoin => run when observable completed
      forkJoin([this.obs1.pipe(
        take(3)
      ),this.obs2.pipe(
        map(res =>res+" hello"),
        take(2)
      )]).subscribe(res=>console.log('forkjoin =>',res))
    }
  
  
}
