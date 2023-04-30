import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()

export class PreloadService implements PreloadingStrategy{
    constructor(){
        console.log("Preload Service Called")
    }
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        console.log("Preload Service Route is this ====> ",route)
        return fn()
    }

    showName():void{
        console.log("hi digvesh")
    }
}