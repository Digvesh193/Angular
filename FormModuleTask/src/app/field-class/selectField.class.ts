import { FieldClass, inputJSON, Options } from "../interface/form.interface";
import { BaseField } from "./baseField.class";

export class SelectField extends BaseField implements FieldClass{
    constructor(private inputData: inputJSON){
        super(inputData)
    }

    get options():Array<Options> | undefined{
        return this.inputData.options
    }

    get multipleSelection():boolean | undefined{
        return this.inputData.multipleSelection
    }
}