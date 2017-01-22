import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Account } from '../../models/account'

@Injectable()
export class AccountService {
    //public hasLogin: boolean=false;
    constructor(private http: HttpService){

    }

    public login(account : Account):Promise<any> {
       return this.http.postCloudeer("cloudarling","/open/account/login",account);
        //console.log("user login service login...");
        //this.hasLogin=true;
    }

    public logout():void{
        //console.log("user login service logout...");
        //this.hasLogin=false;
    }
}
