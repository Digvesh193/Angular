import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()

export class StorageService{

    istableShow : boolean = false
    isSubmit : boolean = false
    value = new Map<string,{name:string,value:string,required:boolean}>();
    submitObservable : Subject<any>
    constructor(){
        // console.log("service called")
        this.submitObservable = new Subject<any>()
    }

    validation():boolean{
        // if(this.value.size==0){
        //     return false
        // }
        for(let item of this.value.values()){
            if(item["required"] && item["value"]==""){
                this.istableShow = false
                return false
            }
        }
        this.istableShow = true
        return true
        // console.log("storage service is there ",this.value)
    }

}