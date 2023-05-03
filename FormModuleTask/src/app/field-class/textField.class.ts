import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";
import { FieldClass, inputJSON } from "../interface/form.interface";
import { BaseField } from "./baseField.class";

export class TextField extends BaseField implements FieldClass,Validator{
    
    constructor(private inputData:inputJSON){
        super(inputData)
    }

    validate = (control: AbstractControl<any, any>): ValidationErrors | null =>{
        if(this.isRequired && control.value===""){
            return {error:"this field must be required"}
        }
        switch(this.type){
            case "email":
               return this.emailValidator(control)
            case "phone":
               return this.phoneValidator(control)
            case "textarea":
            case "password":
            case "text":
                return this.textValidator(control)
            case "number":
                return this.numberValidator(control) 
        }
        return null
    }
   

    textValidator(control: AbstractControl<any,any>):ValidationErrors | null{
        if(this.minLength!="" && this.minLength>control.value.length){
            return {error:`minLength should be ${this.minLength}`}
        }
        else if(this.maxLength!="" && this.maxLength<control.value.length){
            return {error:`maxLength should be ${this.maxLength}`}
        }
        return null
    }

    emailValidator(control: AbstractControl<any,any>):ValidationErrors | null{
        console.log("Hell")
        const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!control.value.match(pattern)){
            return {error:"Email Not Valid"}
        }
        return null
    }

    phoneValidator(control: AbstractControl<any,any>):ValidationErrors | null{
        const pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        if(control.value.length < 10 || control.value.length>10){
            return {error:"PhoneNumber must be 10"}
        }
        else if(!control.value.match(pattern)){
             return {error:"PhoneNumber not valid"}
        }
        return null
    }

    numberValidator(control: AbstractControl<any,any>):ValidationErrors | null{
        if(this.isRequired && control.value<parseInt(this.minLength)){
            return {error:`number should not be lessthan ${this.minLength}`}
        }
        else if(this.isRequired && control.value>parseInt(this.maxLength)){
            return {error:`number should not be greaterthan ${this.maxLength}`}
        }
        return null;
    }
}