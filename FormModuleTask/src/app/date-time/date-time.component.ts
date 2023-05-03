import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DateTimeComponent extends BaseComponent implements OnInit {
  constructor(){
    super()
  }

  ngOnInit(): void {
    this.formGroups.addControl(this.fieldName,new FormControl(null))
  }

  // ngDoCheck(): void {
  //   console.log("data-time docheck called")
  // }


}
