import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Account} from '../../models/account';

@Component({
    /* tslint:disable */
    selector: '.userBox',
    /* tslint:enable */
    styleUrls: ['./user-box.component.css'],
    templateUrl: './user-box.component.html'
})
export class UserBoxComponent implements OnInit {
    //
    private account:Account;

    constructor(private auth:AuthService, private router:Router) {
        this.account = auth.getProfile();
    }

    public ngOnInit() {
        // TODO
    }

    private logout = ():void => {
        this.auth.logout();
        this.router.navigate(['/account/login']);
    }
}
