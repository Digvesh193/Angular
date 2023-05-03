import { ChangeDetectionStrategy, Component, DoCheck, OnInit, Type, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponentComponent } from './add-component/add-component.component';
import { ComponentMeta } from './componentMetaData/componentMeta.class';
import { SelectField } from './field-class/selectField.class';
import { TextAreaField } from './field-class/textareaField.class';
import { TextField } from './field-class/textField.class';
import { FormCreatorComponent } from './form-creator/form-creator.component';
import { InputTextComponent } from './input-text/input-text.component';
import { Field, FieldClass, inputJSON } from './interface/form.interface';
import { OptionsComponent } from './options/options.component';
import { SelectComponent } from './select/select.component';
import { StorageService } from './service/storage.service';
import { TextAreaComponent } from './text-area/text-area.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  title = 'FormModuleTask';

  @ViewChild(FormCreatorComponent) formcommp !: FormCreatorComponent

  fields :Array<Field> = []

  inputJsonData : Array<inputJSON> = [{ displayName: 'Name', fieldName: 'name', type:'text' ,minLength:"4", maxLength:"6", isRequired: false},{ displayName: 'Email', fieldName: 'email', type:'Email' ,minLength:"", maxLength:"", isRequired: true},{ displayName: 'Mobile', fieldName: 'mobile', type:'Phone' ,minLength:"", maxLength:"", isRequired: true},{ displayName: 'Textarea', fieldName: 'Description', type:'TextArea' ,minLength:"4", maxLength:"", isRequired: true,defaultValue:""},{ displayName: 'Country', fieldName: 'country', type:'Select' ,minLength:"", maxLength:"", isRequired: true ,options:[{ label:'India', value:'India' },{ label:'US', value:'US' }]},{ displayName: 'State', fieldName: 'state', type:'Select' ,minLength:"", maxLength:"", isRequired: true ,options:[{ label:'Gujarat', value:'Gujarat' },{ label:'UP', value:'UP' }],defaultValue:"Gujarat" }]
  userDetailsform:FormGroup = new FormGroup({})

  constructor(private storageService : StorageService,private modalService:NgbModal){}

  ngOnInit(): void {
    // this.addControl()
    this.fields=this.addInputData(this.inputJsonData,this.userDetailsform)
  }

  

  addInputData(inputJSONData:Array<inputJSON>,userDetailsformData:FormGroup):Array<Field>{
    const fieldsData:Array<Field> = []
    inputJSONData.forEach((data)=>{
      let field:Field = {
        componentToRender:this.getComponent(data.type),
        componentInput : {
          formGroup:userDetailsformData,
          fieldMeta:this.getFieldMeta(data),
          value: data.defaultValue?data.defaultValue:""
        },
      }
      fieldsData.push(field)
    })
   return fieldsData
  }

  getComponent(type:string):Type<any>{
    let component:Type<any> = InputTextComponent
    switch (type.toLowerCase()) {
      case "email":
      case "number":
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
      case "option": 
        component = OptionsComponent
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
      case "number":
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
      case "option":
        fieldMeta = new TextField(data)
    }
    return fieldMeta
  }

  onSubmit(){
    console.log("final result",this.userDetailsform)
    this.storageService.isSubmited = true
    if(this.userDetailsform.valid){
      this.storageService.isSubmited = false
      console.log("final result",this.userDetailsform.value)
    }
  }

  isSelect:boolean=false

  onAddText(content:any,componentType: string){
    switch(componentType){
      case "text": 
      this.isSelect = false
        this.open(content,ComponentMeta.textMetaData)
        break;
      case "textarea": 
      this.isSelect = false
        this.open(content,ComponentMeta.textMetaData)
        break;
      case "select": 
        this.isSelect = true
        this.open(content,ComponentMeta.selectMetaData)
        break;
    }
  }


  metaField:Array<Field> = []
  
  addComponentForm = new FormGroup({
    'selectForm':new FormArray([])
  })
  currentComponentForm !: any

  count = 0;
  selectMeta = [{value:"label0",label:"value0"}]

  open(content:any,componentMetaData:Array<inputJSON>){
    this.metaField =[]
    this.metaField = this.addInputData(componentMetaData,this.addComponentForm)    
    this.modalService.open(content).result.then(
      (result)=>{
        const resultx : any = this.addComponentForm.value
        let obj:inputJSON = {
          displayName:<string>resultx['displayName'],
          fieldName:<string>resultx['fieldName'],
          type:<string>resultx['type'],
          minLength:<string>resultx['minLength'],
          maxLength:<string>resultx['maxLength'],
          isRequired:resultx["required"]=="true"?true:false,
          options :resultx["selectForm"],
          multipleSelection:resultx["multipleSelection"]=="true"?true:false,
          defaultValue:resultx["defaultValue"]
        }
        this.inputJsonData.push(obj)
        this.fields = this.addInputData(this.inputJsonData,this.userDetailsform)
        this.formcommp.addDynamicComponent({
          componentToRender:this.getComponent(obj.type),
          componentInput : {
            formGroup:this.userDetailsform,
            fieldMeta:this.getFieldMeta(obj),
            value: obj.defaultValue?obj.defaultValue:""
          },
        })
        this.reset()
        this.addComponentForm.reset()
      }
    )
  }
  reset(){
    (<FormArray>(this.addComponentForm.get('selectForm'))).clear();
  }
  

 
 


}
