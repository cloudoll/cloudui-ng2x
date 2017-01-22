import { Component, Input } from '@angular/core';
// import { TranslateService } from 'ng2-translate';
import { AuthService } from '../../services/auth.service';
import {constants} from '../../app.constants';

@Component( {
    selector: 'app-header',
    styleUrls: ['./app-header.component.css'],
    templateUrl: './app-header.component.html'
})
export class AppHeaderComponent {

    private appInfo:any;
    
    //
    constructor( private auth: AuthService  ) {
        this.appInfo = constants.appInfo;
    }
}
