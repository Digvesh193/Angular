import { Directive, Input } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";
import {  FieldClass, SelectFieldClass} from "../interface/form.interface";
import { Validation } from "./validator.class";

@Directive({
    selector:"[BaseComponent]"
})

export class BaseComponent extends Validation implements FieldClass,Validator {
    
    
    @Input() formGroups !: FormGroup
    @Input() fieldMeta!: FieldClass
    
    constructor(){
        super()
        console.log("BaseComponent Called")
    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        const isValid = this.requiredValidator(this.isRequired,control,this.type)
        if(isValid){
            return isValid
        }
        switch(this.type){
            case "email":
               return this.emailValidator(control,this.isRequired)
            case "phone":
               return this.phoneValidator(control,this.isRequired)
            case "select":
                return this.selectValidator(control,this.fieldMeta.multipleSelection,this.isRequired)
            case "text":
            case "textarea":
            case "password":
                return this.textValidator(control,this.minLength,this.maxLength,this.isRequired)
        }
        return null
    }
    
    get displayName(): string {
        return this.fieldMeta.displayName
    }
    get fieldName(): string {
        return this.fieldMeta.fieldName
    }
    get type(): string {
        return this.fieldMeta.type
    }
    get minLength(): string {
        return this.fieldMeta.minLength
    }
    get maxLength(): string {
        return this.fieldMeta.maxLength
    }
    get isRequired(): boolean {
        return this.fieldMeta.isRequired
    }
    get defaultValue(): string | number | undefined {
        return this.fieldMeta.defaultValue?this.fieldMeta.defaultValue:""
    }

    // get options(){
    //     // return this.fieldMeta.options
    // }

}