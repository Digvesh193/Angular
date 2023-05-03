import { Type } from "@angular/core"
import { FormGroup, ValidationErrors } from "@angular/forms";

export interface inputJSON {
    displayName:string,
    fieldName:string,
    type:string,
    minLength:string,
    maxLength:string,
    isRequired:boolean,
    defaultValue?:string | number | undefined,
    options?: Array<Options>,
    multipleSelection?:boolean | undefined
}

export interface Options{
    label:string,
    value:string
}

export interface FieldClass{
   options?:Array<Options> | undefined,
   multipleSelection?:boolean | undefined,
   get displayName():string
   get fieldName():string
   get type(): string
   get minLength():string
   get maxLength():string
   get isRequired():boolean
   get defaultValue():string | number | undefined
   validate(control:any):ValidationErrors |  null
}

export interface SelectFieldClass{
    get options():Array<Options> | undefined
}

// export class FieldClass{
    
// }

export interface Field{
    componentToRender:Type<any>;
    componentInput:{
        formGroup:FormGroup,
        fieldMeta:FieldClass,
        value:string | number | undefined
    }

}

