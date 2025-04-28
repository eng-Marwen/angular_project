export class AuthService{
    log:boolean=false;
    logIn(){
        this.log=true;
    }
    logOut(){
        this.log=false;
    }
    isAuth(){
        return this.log;
    }
}