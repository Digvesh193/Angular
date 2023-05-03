import { AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Field, inputJSON } from '../interface/form.interface';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormCreatorComponent implements OnInit{

  Name : string = "digvesh"

  @Input() fields!:Array<Field>
  @ViewChild("dynamicFormComponent",{static:true,read:ViewContainerRef}) dynamicFormComponent !: ViewContainerRef
  
  x = true
  constructor(public storageSerive : StorageService){
   
  }

  ngOnInit(): void {
    this.fields.forEach((data:Field)=>{
      const compRef = this.dynamicFormComponent.createComponent(data.componentToRender)
      const compInstance = compRef.instance
      compInstance.formGroups = data.componentInput.formGroup
      compInstance.fieldMeta = data.componentInput.fieldMeta
    })
  }


  addDynamicComponent(data:Field){
    const compRef = this.dynamicFormComponent.createComponent(data.componentToRender)
    const compInstance = compRef.instance
    compInstance.formGroups = data.componentInput.formGroup
    compInstance.fieldMeta = data.componentInput.fieldMeta
  }  
}

