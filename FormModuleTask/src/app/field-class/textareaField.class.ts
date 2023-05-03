import { ValidationErrors } from "@angular/forms";
import { FieldClass, inputJSON, Options } from "../interface/form.interface";
import { BaseField } from "./baseField.class";

export class TextAreaField extends BaseField implements FieldClass{
    constructor(private inputData: inputJSON){
        super(inputData)
    }
  
    validate(control: any): ValidationErrors | null {

        if(this.isRequired && control.value===""){
            return {error:`this field must be required`}
        }
     
        else if(this.minLength!="" && this.minLength>control.value.length){
            return {error:`minLength should be ${this.minLength}`}
        }
        else if(this.maxLength!="" && this.maxLength<control.value.length){
            return {error:`maxLength should be ${this.maxLength}`}
        }
        return null
    }
   
    

    
}