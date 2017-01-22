import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { constants } from '../../../app.constants'

@Component({
    selector: 'account-register',
    templateUrl: './register.component.html',
    //styleUrls: ['./account-login.component.scss']
})
export class AccountRegisterComponent implements OnInit {
    private appInfo:any;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private accountService: AccountService
    ) {
        console.log(accountService);
        this.appInfo = constants.appInfo;
    }

    ngOnInit() {
    }

    public doLogin():void{
        // this.accountService.login();
        // this.router.navigateByUrl("user");
    }

    public doLogout():void{
        // this.accountService.logout();
        // this.router.navigateByUrl("home");
    }

    public forgetPwd():void{
        // this.router.navigateByUrl("forgetpwd");
    }
}