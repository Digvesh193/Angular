import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable()

export class DeactiveGuardServices implements CanDeactivate<unknown>{

    constructor(private router : Router){
    }

    canDeactivate(component: unknown, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        console.log("Deactive called")
        console.log(" component "+component)
        console.log(currentRoute)
        console.log(currentState)
        console.log(nextState.url)
        // return this.router.createUrlTree(["/ram"]);
        return false
    }
    
      
}