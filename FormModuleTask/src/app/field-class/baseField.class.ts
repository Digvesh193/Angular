import { Field, FieldClass, inputJSON } from "../interface/form.interface";

export class BaseField{

    constructor(private data:inputJSON){}

    get displayName():string{
        return this.data.displayName;
    }

    get fieldName():string{
        return this.data.fieldName;
    }

    get type():string{
        return this.data.type.toLowerCase();
    }

    get minLength(): string{
        return this.data.minLength;
    }

    get maxLength(): string{
        return this.data.maxLength;
    }

    get isRequired(): boolean{
        return this.data.isRequired;
    }

    get defaultValue():string | number | undefined{
        return this.data.defaultValue;
    }
}