import { ValidationErrors } from "@angular/forms";
import { FieldClass, inputJSON, Options } from "../interface/form.interface";
import { BaseField } from "./baseField.class";

export class SelectField extends BaseField implements FieldClass{
    constructor(private inputData: inputJSON){
        super(inputData)
    }
    validate(control: any): ValidationErrors | null {
        if(this.isRequired && !this.multipleSelection && control.value == null){
            return {error:'this field must be required'}
        }
        else if(this.isRequired && this.multipleSelection && control.value.length<=0){
            return {error:'this field must be required'}
        }
        return null
    }
   

    get options():Array<Options> | undefined{
        return this.inputData.options
    }

    get multipleSelection():boolean | undefined{
        return this.inputData.multipleSelection
    }
}