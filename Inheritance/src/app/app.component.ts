import { Component, OnInit } from '@angular/core';
import { BaseListCalss } from './base/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseListCalss implements OnInit {
  title = 'Inheritance';
  constructor(){
    super()
  }

  ngOnInit(): void {
    console.log(this.name)
  }

}
