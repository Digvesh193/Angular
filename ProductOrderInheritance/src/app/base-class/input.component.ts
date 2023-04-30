export class InputBaseClass{

    getFormValue(title: string):Array<form>{
        if(title === "Order"){
            return [
                { 
                  id:"",
                  label:"Title",
                  type:"text",
                  value:"",
                  name:"title",
                  placeholder:"Enter OrderName Name",
                  error:"orderNameError"
                },
                { 
                    id:"",
                    label:"body",
                    type:"text",
                    value:"",
                    name:"body",
                    min:1,
                    placeholder:"Enter Quantity",
                    error:"quantityError"
                  },
               ]
        }
        else if(title === "Product"){
           return [
                { 
                  id:"",
                  label:"Product",
                  type:"text",
                  value:"",
                  name:"product",
                  placeholder:"Enter Product Name",
                  error:"productError"
                },
               ]
        }
        return [];
    }
    constructor(){
        console.log("Base class constructor called")
    }
}

export interface form{
    id?:string,
    type:string,
    name:string,
    placeholder?:string,
    value?:string,
    label:string,
    min?:number,
    error?:string

}