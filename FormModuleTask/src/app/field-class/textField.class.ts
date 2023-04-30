import { FieldClass, inputJSON } from "../interface/form.interface";
import { BaseField } from "./baseField.class";

export class TextField extends BaseField implements FieldClass{
    
    constructor(private inputData:inputJSON){
        super(inputData)
    }
}