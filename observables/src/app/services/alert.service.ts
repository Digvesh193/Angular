import { Injectable } from "@angular/core";

@Injectable({providedIn:"root"})
export class AlertService{

    myName : string = "kalp"

    constructor(){
        console.log("AlertService constructor called")
    }
    alertMessage(): void{
        alert("Hello Digvesh, This is alert message")
    }
    product : person = {name:"Laptop",id:8}

    product1 : Array<person> = [{name:"Laptop",id:8},{name:"Laptop",id:8},{name:"Laptop",id:8}]
}


export interface person{
    name:string,
    id:number
}