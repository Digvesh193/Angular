import { Component } from '@angular/core';
import { catchError, debounce, debounceTime, of } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  constructor(private common : CommonService){

  }

  ngOnInit(): void {
    this.common.userSubject.pipe(
      debounceTime(1000),
      catchError(()=>{
        return of("chalse")
      })
    ).subscribe({
      next:(value)=>console.log(`panel => ${value}`),
      error:(error)=>console.log(`panel => ${error}`),
      complete:()=>console.log('panel => completed')
    })
  }
  onunSubscribe(){
    this.common.unsubScribe()
  }
}
