import { Component, OnInit, Type } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectField } from './field-class/selectField.class';
import { TextAreaField } from './field-class/textareaField.class';
import { TextField } from './field-class/textField.class';
import { InputTextComponent } from './input-text/input-text.component';
import { Field, FieldClass, inputJSON } from './interface/form.interface';
import { SelectComponent } from './select/select.component';
import { StorageService } from './service/storage.service';
import { TextAreaComponent } from './text-area/text-area.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FormModuleTask';

  fields :Array<Field> = []
  // inputJsonData:Array<inputJSON> = [{ displayName: 'Country', fieldName: 'country', type:'Select', minLength: "", maxLength: "", isRequired: true ,
  //                                     options:[{ label:'India', value:'India' },{ label:'US', value:'US' }] ,
  //                                     defaultValue:"US",multipleSelection:true},
  
  //                                   { displayName: 'City', fieldName: 'state', type:'Select' ,minLength: "", maxLength: "", isRequired: true,
  //                                    options:[{ label:'Ahmedabad', value:'Ahmedabad' },{ label:'Baroda', value:'Baroda' },{ label:'Rajkot', value:'Rajkot' }] 
  //                                    ,multipleSelection:false}]
  // inputJsonData:Array<inputJSON> = [{ displayName: 'Name', fieldName: 'name', type:'Text' ,minLength: "", maxLength: "255", isRequired: true},{ displayName: 'Email', fieldName: 'email', type:'Email' ,minLength: "", maxLength: "", isRequired: true},{ displayName: 'Mobile', fieldName: 'mobile', type:'Phone' ,minLength: " ", maxLength: " ", isRequired: false},{ displayName: 'Country', fieldName: 'country', type:'Select', minLength: "", maxLength: "", isRequired: true ,options:[{ label:'India', value:'India' },{ label:'US', value:'US' }],multipleSelection:true},{ displayName: 'State', fieldName: 'state', type:'Select', minLength: "", maxLength: "", isRequired: false ,options:[{ label:'Gujarat', value:'Gujarat' },{ label:'UP', value:'UP' }] },{ displayName: 'City', fieldName: 'city', type:'select', minLength: "", maxLength: "", isRequired: false, options:[{ label:'Ahmedabad', value:'Ahmedabad' },{ label:'Baroda', value:'Baroda' },{ label:'Rajkot', value:'Rajkot' }] } ]
    inputJsonData : Array<inputJSON> = [{ displayName: 'Name', fieldName: 'name', type:'Text' ,minLength:"4", maxLength:"6", isRequired: true},{ displayName: 'Email', fieldName: 'email', type:'Email' ,minLength:"", maxLength:"", isRequired: true},{ displayName: 'Mobile', fieldName: 'mobile', type:'Phone' ,minLength:"", maxLength:"", isRequired: false},{ displayName: 'Textarea', fieldName: 'Description', type:'TextArea' ,minLength:"", maxLength:"", isRequired: true},{ displayName: 'Country', fieldName: 'country', type:'Select' ,minLength:"", maxLength:"", isRequired: true ,options:[{ label:'India', value:'India' },{ label:'US', value:'US' }] },{ displayName: 'State', fieldName: 'state', type:'Select' ,minLength:"", maxLength:"", isRequired: true ,options:[{ label:'Gujarat', value:'Gujarat' },{ label:'UP', value:'UP' }],defaultValue:"Gujarat" },{ displayName: 'City', fieldName: 'city', type:'Select' ,minLength:"", maxLength:"", isRequired: true ,options:[{ label:'Ahmedabad', value:'Ahmedabad' },{ label:'Baroda', value:'Baroda' },{ label:'Rajkot', value:'Rajkot' }],multipleSelection:false } ]
  userDetailsform = new FormGroup({
   
  })

  constructor(private storageService : StorageService){}

  ngOnInit(): void {
    this.inputJsonData.forEach((data)=>{
      let field:Field = {
        componentToRender:this.getComponent(data.type),
        componentInput : {
          formGroup:this.userDetailsform,
          fieldMeta:this.getFieldMeta(data),
          value: data.defaultValue?data.defaultValue:""
        },
      }
      this.fields.push(field)
    })
    console.log(this.fields)
  
  }

  getComponent(type:string):Type<any>{
    let component:Type<any> = InputTextComponent
    switch (type.toLowerCase()) {
      case "email":
      case "phone":
      case "text":
      case "password":
      case "phone":
        component = InputTextComponent
        break;
      case "select":
        component = SelectComponent
        break;
      case "textarea":
        component = TextAreaComponent
        break;
      default:
        break;
    }
    return component
  }

  getFieldMeta(data: inputJSON):FieldClass{
    let fieldMeta !: FieldClass
    switch(data.type.toLowerCase()){
      case "email": 
      case "phone":
      case "text":
      case "password":
      case "phone":
        fieldMeta = new TextField(data);
        break;
      case "textarea":
        fieldMeta = new TextAreaField(data);
        break;
      case "select":
        fieldMeta = new SelectField(data);
        break;
    }
    return fieldMeta
  }

  onSubmit(){
    this.storageService.isSubmited = true
    if(this.userDetailsform.valid){
      this.storageService.isSubmited = false
    }

  }


}
