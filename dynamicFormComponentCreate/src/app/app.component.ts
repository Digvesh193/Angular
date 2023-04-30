  import { AfterViewInit, Component, ComponentRef, ElementRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
  import { tap } from 'rxjs';
  
  import { CheckboxComponent } from './checkbox/checkbox.component';
  import { InputComponent } from './input/input.component';
  import { RadioComponent } from './radio/radio.component';
  import { StorageService } from './storage.service';
  import { TextareaComponent } from './textarea/textarea.component';
  
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent implements AfterViewInit {
  
    title = 'dynamicFormComponentCreate';
  
    @ViewChild("dynamicComponet",{static:true,read:ViewContainerRef}) container !: ViewContainerRef
    @ViewChild("input") textarea !: ElementRef
  
    components = new Map<string,ComponentRef<any>>();
    index = 0;
    notValideSyntext : boolean = false
  
    type = ["text","email","password","radio","checkbox","textarea","date","number"]
  
    constructor(public storageService : StorageService){}
  
    onAdd(input: any):void{
  
      if(input.value===""){
        this.container.clear()
      }
      // console.log(this.storageService.value)
      if(this.validJSON(input.value)){
        this.index = 0;
        this.storageService.value.clear()
        this.container.clear()
        this.components.clear()
  
        const objs = JSON.parse(input.value)
        for(let obj of objs){
        this.storageService.isSubmit = true;
        const compRef =  this.container.createComponent(this.getType(obj.type))
        const compInstance = compRef.instance
        const unique = obj.type + this.index
        compInstance.label = obj.label
        compInstance.placeholder= obj.placeholder?obj.placeholder:''
        compInstance.type=obj.type
        compInstance.min = obj.min?obj.min:''
        compInstance.max = obj.max?obj.max:''
        compInstance.id = obj.id?obj.id:''
  
        const req = obj.required?obj.required:false
        compInstance.required = req
  
        if(obj.type === "text" || obj.type === "email" || obj.type === "password" || obj.type ==="date" || obj.type==="number"){
          compInstance.allowPasteDate = obj.allowPast?obj.allowPast:false
          compInstance.inputValue.subscribe((res: any)=>{
            this.validation(res)
            this.storageService.value.set(unique,{name:obj.label,value:res,required:req})
            // console.log("date lsdjf",this.storageService.value)
          })
  
          }
        if(obj.type === "radio" && obj.radioArray){
          compInstance.radioArray = obj.radioArray
          compInstance.radioValue.subscribe((res:any)=>{
            this.validation(res)
            this.storageService.value.set(unique,{name:obj.label,value:res,required:req})
          })
        }
        if(obj.type === "checkbox" && obj.checkBoxArray){
          compInstance.checkBoxArray = obj.checkBoxArray
          compInstance.checkBoxValue.pipe(
            // tap(data=>console.log(data))
          ).subscribe((res:any)=>{
            this.validation(res)
            const value = res.reduce((value:string,item:any):string=>{
              if(item["checked"]){
                      value +=item["name"]+" "     
                }
                return value
            },"")
            this.storageService.value.set(unique,{name:obj.label,value,required:req})  
          }) 
        }
        if(obj.type === "textarea"){
          compInstance.textAreaValue.subscribe((res:string)=>{
            this.storageService.value.set(unique,{name:obj.label,value:res,required:req})
          })
        }
        this.components.set(unique,compRef)
        this.index++;
      }
      }
      else{ 
        this.components.clear()
      }    
    }
  
    getType(input: any):Type<any>{
      let type : Type<any> = InputComponent; 
      switch(input){
        case "radio":
          type = RadioComponent
          break;
        case "checkbox":
          type = CheckboxComponent
          break;
        case "textarea":  
          type = TextareaComponent
          break;
        default:
          break;
      }
      return type
    }
    error(){
      alert("Invalide argument")
      return false
    }
    onSubmit(){
      const isValid = this.storageService.validation()
      // console.log("validation ",isValid)
    console.log("submit",isValid)
      this.storageService.submitObservable.next("kem");
      if(isValid){
      }
    }
    validJSON(data: string):boolean{
      try {
        JSON.parse(data)
        this.notValideSyntext = false
        return true;
      } catch (error) {
        this.notValideSyntext=true
        return false
      }
    }
    validation(res: any){
      if(res != ""){
        this.storageService.isSubmit=false
      }
      else{
        this.storageService.isSubmit=true
      }
    }
    ngAfterViewInit(): void {
      // this.textarea.nativeElement.innerHTML='[{"type":"radio","placeholder":"select subject","label":"subject","id":"f","radioArray":["CN","CD","AI","IS"],"required":true}]'
      // this.textarea.nativeElement.innerHTML='[{"type":"checkbox","placeholder":"select subject","label":"subject","id":"f","checkBoxArray":[{"name":"CN","checked":false},{"name":"CD","checked":false}],"required":true}]'
      this.textarea.nativeElement.innerHTML='[{"type":"text","placeholder":"Enter Name","label":"FirstName","id":"name"},{"type":"date","placeholder":"enter date","label":"select date","id":"date","allowPast":"true"},{"type":"checkbox","placeholder":"select subject","label":"subject","id":"f","checkBoxArray":[{"name":"CN","checked":"false"},{"name":"CD","checked":"false"},{"name":"AI","checked":"false"},{"name":"IS","checked":"false"}]},{"type":"radio","placeholder":"select subject","label":"subject","id":"f","radioArray":["CN","CD","AI","IS"]}]'
      // this.textarea.nativeElement.innerHTML='[{"type":"date","placeholder":"enter date","label":"select date","id":"date","allowPast":"true"}]'
      // this.textarea.nativeElement.innerHTML='[{"type":"text","placeholder":"Enter Name","label":"FirstName","id":"name","required":true}]'
    }
  
  
  
  }
  