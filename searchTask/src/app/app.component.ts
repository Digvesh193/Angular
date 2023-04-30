import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, map } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listArray :any =[]
  title = 'searchTask';
  inputValue : string = ""
  constructor(private serachService : SearchService){

  }
  onInputChange(event: any){
    this.inputValue = event.target.value
    

this.serachService.addValue(this.inputValue)    

    // this.serachService.searchObservable.next(this.listArray)
  }

  ngOnInit(): void {
    this.serachService.searchObservable.pipe(
      debounceTime(2000),
    ).subscribe({
      next: (data)=>this.listArray = data,
      error: (error)=>console.log("error in app.components",error),
      complete: ()=>console.log("compeleted")
    })
  }


}
