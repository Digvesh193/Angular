import { AbstractControl, ValidationErrors } from "@angular/forms";

export class Validation{
    constructor(){
        console.log("Validation called")
    }

    textValidator(control: AbstractControl<any,any>,minLength:string,maxLength:string,isRequired:boolean):ValidationErrors | null{
        
        if(minLength!="" && minLength>control.value.length){
            return {error:`minLength should be ${minLength}`}
        }
        else if(maxLength!="" && maxLength<control.value.length){
            return {error:`maxLength should be ${maxLength}`}
        }
        return null
    }

    emailValidator(control: AbstractControl<any,any>,isRequired:boolean):ValidationErrors | null{
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!control.value.match(pattern)){
            return {error:"Email Not Valid"}
        }
        return null
    }

    phoneValidator(control: AbstractControl<any,any>,isRequired:boolean):ValidationErrors | null{
        const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if(control.value.length < 10 || control.value.length>10){
            return {error:"PhoneNumber must be 10"}
        }
        else if(!control.value.match(pattern)){
             return {error:"PhoneNumber not valid"}
        }
        return null
    }

    selectValidator(control: AbstractControl<any,any>,multipleSelection:boolean | undefined,isRequired:boolean ):ValidationErrors | null{
        if(isRequired && !multipleSelection && control.value == null){
            return {error:'this field must be required'}
        }
        else if(isRequired && multipleSelection && control.value.length<=0){
            return {error:'this field must be required'}
        }
        return null
    }

    requiredValidator(isRequired:boolean,control: AbstractControl<any,any>,type:string):ValidationErrors | null{
       switch(type){
        case "email":
        case "phone":
        case "textarea":
        case "text":
        case "password":
            if(isRequired && control.value ===""){
                return {error:'this field must be required'}
            }
            break;
       }
        return null
    }

}