import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


export interface IdeactivateCompo {
    canExit:()=>Observable<boolean>|Promise<boolean>|boolean;
}

export class deactivate implements CanDeactivate<IdeactivateCompo>{
    canDeactivate(component: IdeactivateCompo, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) {
        return component.canExit();
    }
}