import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {environment} from '../../environments/environment';
import {Account} from '../models/account';

@Injectable()
export class AuthService {
    constructor(private notif:NotificationService) {

    }

    public login = (profile : Account):void => {
        localStorage.setItem("profile",JSON.stringify(profile));
        this.notif.success('You successfully login');
    }

    public logout = ():void => {
        localStorage.removeItem('profile');
        this.notif.success('You successfully loged out');
    }

    public isAuthenticated = ():boolean => {
        return this.getProfile()!==null;
    }

    public getProfile = ():Account => {
        let profile = localStorage.getItem('profile');

        if (profile) {
            return JSON.parse(profile);
        }

        return null;
    }
}
