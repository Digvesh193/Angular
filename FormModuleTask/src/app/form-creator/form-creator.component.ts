import { Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Field, inputJSON } from '../interface/form.interface';

@Component({
  selector: 'app-form-creator',
  templateUrl: './form-creator.component.html',
  styleUrls: ['./form-creator.component.css']
})
export class FormCreatorComponent implements OnInit{

  @Input() fields!:Array<Field>
  @ViewChild("dynamicFormComponent",{static:true,read:ViewContainerRef}) dynamicFormComponent !: ViewContainerRef
  

  constructor(){
   
  }

  ngOnInit(): void {
    this.fields.forEach((data:Field)=>{
      const compRef = this.dynamicFormComponent.createComponent(data.componentToRender)
      const compInstance = compRef.instance
      compInstance.formGroups = data.componentInput.formGroup
      compInstance.fieldMeta = data.componentInput.fieldMeta
    })
    
    
  }
  onSubmit(){
    
  }
  
}
