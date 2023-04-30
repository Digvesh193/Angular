import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of } from "rxjs";

@Injectable()
export class PreloadService implements PreloadingStrategy{
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        if(route.data && route.data["preload"] ){
            console.log("called")
            return fn()
        }
        else{
            console.log("else called")
            return of(null)
        }

    }
    constructor(){
        
    }

}