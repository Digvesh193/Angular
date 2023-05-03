import { Directive, Input } from "@angular/core";
import { AbstractControl, FormGroup, ValidationErrors, Validator } from "@angular/forms";
import {  FieldClass, SelectFieldClass} from "../interface/form.interface";
import { Validation } from "./validator.class";

@Directive({
    selector:"[BaseComponent]"
})

export class BaseComponent {
    @Input() formGroups !: FormGroup
    @Input() fieldMeta!: FieldClass
    
    constructor(){
      
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

}