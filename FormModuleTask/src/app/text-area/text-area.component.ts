import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css']
})
export class TextAreaComponent extends BaseComponent implements OnInit{
  constructor(public storageService: StorageService){
    super()
  }
  ngOnInit(): void {
    this.formGroups.addControl(this.fieldName,new FormControl(this.defaultValue,[this.validate.bind(this)]))
  }

}
