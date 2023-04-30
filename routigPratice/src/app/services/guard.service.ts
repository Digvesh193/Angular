import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IsUserService } from "./isUser.service";

@Injectable()

export class GuardServices implements CanActivate{
    constructor(private isUser : IsUserService,private router : Router){
        console.log("Guard Services called")
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        // throw new Error("Method not implemented.");
        console.log(route)
        console.log(state)
        console.log("Guard")
        return this.router.createUrlTree(['/product/laptop']);
    }   
}