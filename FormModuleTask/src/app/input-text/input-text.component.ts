import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '../BaseComponent/baseComponent.directive';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent extends BaseComponent implements OnInit {


    errorMessage !: string
      constructor(public storageService : StorageService){
        super()
      }
      ngOnInit(): void { 
        console.log("metadaa",this.fieldMeta)
        
        this.formGroups.addControl(this.fieldName,new FormControl(this.defaultValue,[this.validate.bind(this)]))
        console.log("helllosdfsdfffffsdf")
      }   
}
