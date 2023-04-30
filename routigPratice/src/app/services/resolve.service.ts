import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

@Injectable()
    
export class ResolveService implements Resolve<any>{
    constructor(private router : Router){
    
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("hello sfddddddddddddddddddddddddddddddddddddddddddddd")
        console.log(route)
        console.log(state)
        // this.router.navigate(["/product"])
    }


}