import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class ProductsGuard implements CanActivate{
    constructor(private authsr:AuthService,private router:Router ){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        if(this.authsr.isAuth()){
            return true;
        }
        else{
            this.router.navigate(['']);
            return false
        }
    }
}