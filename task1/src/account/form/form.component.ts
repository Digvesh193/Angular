import { Component, Input } from "@angular/core";

@Component({
    selector:'account-form',
    templateUrl:'./form.component.html',
    styleUrls:['./form.component.css']
})

export class FormComponent{
    enterName : string = "enter name"
    Inputtype : string = 'text'
    value : string = 'student'
    @Input() Account = "Account"

    //value

    inputValue : string = ""
    radioValue : string = ""
    checkboxValue : string = ""
    selectValue : string = ""
    dateValue : string = ""
    dateType : string = ""


    onInput(event:any){
       this.inputValue = event
    }
    onRadio(event:any){
       this.radioValue = event
    }
    oncheckBox(event:any){
       this.checkboxValue = event
    }
    onSelect(event:any){
      console.log(event)
       this.selectValue = event
    }
    onDate(event: any){
      this.dateValue = event
    }
    onDateTypeChange(event: any){
      this.dateType = event
    }
    onSubmit(){
      console.log("hello")
       let  obj ={inputValue:this.inputValue,radioValue:this.radioValue,checkboxValue:this.checkboxValue,selectValue:this.selectValue,dateValue:this.dateValue,dateType:this.dateType}
       console.log(obj)
       localStorage.setItem("form",JSON.stringify(obj))
    }
}

