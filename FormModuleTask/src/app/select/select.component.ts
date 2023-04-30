import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';
import { Options } from '../interface/form.interface';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent extends BaseComponent implements OnInit {

  options !: Array<Options> | undefined  
  multipleSelection !: boolean

  constructor(public storageService: StorageService){
    super()
    // console.log("select options called")
  }
  ngOnInit(): void {
    const value = this.defaultValue===""?null:this.defaultValue
    this.formGroups.addControl(this.fieldName,new FormControl(value,[this.validate.bind(this)]))
    this.options = this.fieldMeta.options
    this.multipleSelection = this.fieldMeta.multipleSelection?this.fieldMeta.multipleSelection:false
  }
}
