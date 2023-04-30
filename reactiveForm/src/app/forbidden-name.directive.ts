import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector:'[]',
    providers:[{provide:NG_VALIDATORS,useExisting:ForbiddenValidatorDirective,multi:true}]
})

export class ForbiddenValidatorDirective implements Validator{

    @Input('appForbiddenName') forbiddenName = '';

    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        alert(this.forbiddenName)
        throw new Error("Method not implemented.");
    }
   

}