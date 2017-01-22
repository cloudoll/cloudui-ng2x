import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { constants } from '../../../app.constants';
import { Account } from '../../../models/account';
import { NotificationService } from '../../../services/notification.service';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'account-login',
    templateUrl: './login.component.html'
    //styleUrls: ['./account-login.component.scss']
})
export class AccountLoginComponent implements OnInit {
    private appInfo:any;
    private formData:Account;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private accountService: AccountService,
        private notif: NotificationService,
        private authService: AuthService
    ) {
        this.appInfo = constants.appInfo;
        this.formData = new Account();
    }

    ngOnInit() {
    }

    public doLogin():void{
       this.accountService.login(this.formData).then(data=>{
           if(data.success === true){
               let account = data as Account;
               // let account = new Account();
               // account.nick = data.nick;
               // account.open_id = data.open_id;
               // account.passport = this.formData.passport;
               // account.expires_in= data.expires_in;
               // account.ticket= data.ticket;
               console.log(account);
               this.authService.login(account);
               this.router.navigateByUrl('');
           }else{
               this.notif.warning(data.msg);
           }
       });

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