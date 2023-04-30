import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class ObservableService{
    productPopUp : Subject<any> = new Subject<any>();
    orderPopUp : Subject<any> = new Subject<any>();
}