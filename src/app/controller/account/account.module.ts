import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AccountService } from './account.service';

import { AccountMainComponent } from './main/main.component';
import { AccountLoginComponent } from './login/login.component';
import { AccountRegisterComponent } from './register/register.component';

import accountRoutes from './account.routes';

// import {HttpInterceptorModule} from 'angular2-http-interceptor';
// import {APIInterceptor} from '../../services/api.tnterceptor'

@NgModule({
    declarations: [
        AccountMainComponent,
        AccountLoginComponent,
        AccountRegisterComponent,
    ],
    imports: [
        accountRoutes,
        FormsModule,
    ],
    exports:[
        AccountMainComponent
    ],
    providers: [
        AccountService
    ]
})
export default class AccountModule { }