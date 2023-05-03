import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';
import { Options } from '../interface/form.interface';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class SelectComponent extends BaseComponent implements OnInit {

  options !: Array<Options> | undefined  
  multipleSelection !: boolean

  constructor(public storageService: StorageService){
    super()
  }
  
  ngOnInit(): void {
    const value = this.defaultValue===""?null:this.defaultValue
    console.log("sdhfkjsdfkj",this.fieldMeta.options)
    console.log(">>>>>>",this.fieldName)
    this.multipleSelection = this.fieldMeta.multipleSelection?this.fieldMeta.multipleSelection:false
    console.log("multiple Selection>>>",this.multipleSelection)
    this.formGroups.addControl(this.fieldName,new FormControl(value,[this.fieldMeta.validate.bind(this)]))
    console.log("helliii")
    this.options = this.fieldMeta.options
  }
}
