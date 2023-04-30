import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, forkJoin, map, of } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-com2',
  templateUrl: './com2.component.html',
  styleUrls: ['./com2.component.css']
})
export class Com2Component implements OnInit {

  constructor(private common : CommonService){

  }

  ngOnInit(): void {
    forkJoin(
      [this.common.getTeacher().pipe(
          map((data)=>data.toString())
      ),this.common.getStudent().pipe(
        map((data)=>data.toString())
        // catchError((error)=>of('chalse bhai'))
      ),this.common.getClasses().pipe(
        catchError((error)=>of("chlase"))
      )]
    // this.common.userSubject.pipe(
    //   debounceTime(1000),
    //   catchError(()=>{
    //     return of("chalse")
    //   })
    ).subscribe({
      next:(value)=>console.log(value),
      error:(error)=>console.log(`com2 => ${error}`),
      complete:()=>console.log('com2 => completed')
    })
  }
  
}
