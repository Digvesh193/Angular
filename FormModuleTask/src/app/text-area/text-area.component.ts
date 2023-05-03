import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TextAreaComponent extends BaseComponent implements OnInit{
  constructor(public storageService: StorageService){
    console.log("text area called")
    super()
  }
  ngOnInit(): void {
    this.formGroups.addControl(this.fieldName,new FormControl(this.defaultValue,[this.fieldMeta.validate.bind(this)]))
    // console.log("form control",this)
    // console.log("field name is",this.fieldMeta.fieldName)
  }

  // ngDoCheck(): void {
  //   console.log("Text area Docheck called")
  // }

}
