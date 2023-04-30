import { DoCheck, Injectable } from "@angular/core";
import { AlertService } from "./alert.service";


// @Injectable({
//     providedIn:"root"
// })

@Injectable()
export class ManualService{

    name : string = ""

    constructor(private alertService : AlertService) {
        // this.name = name
        console.log("Manual service constructor called")
    }
    

    k = 0;
    showMyName(data:any){
        this.alertService.myName = data
        this.name = this.alertService.myName
        // return this.alertService.myName
        // alert(this.alertService.myName)
    }

    getName():string{
        return this.alertService.myName
    }
}