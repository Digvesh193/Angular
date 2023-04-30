import { FieldClass, inputJSON } from "../interface/form.interface";
import { BaseField } from "./baseField.class";

export class TextAreaField extends BaseField implements FieldClass{
    constructor(private inputData: inputJSON){
        super(inputData)
    }

    
}