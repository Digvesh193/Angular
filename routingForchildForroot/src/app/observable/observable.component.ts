import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  constructor(){}

  arr = ['digvesh','kalp','tej']

  ngOnInit(): void {
    const observable = from(this.arr)

  }


}
