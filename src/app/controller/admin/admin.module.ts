import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminService } from './admin.service';

import { AdminMainComponent } from './main/main.component';
import { AdminUserListComponent } from './user/list.component';

import adminRoutes from './admin.routes';

// import {HttpInterceptorModule} from 'angular2-http-interceptor';
// import {APIInterceptor} from '../../services/api.tnterceptor'

@NgModule({
    declarations: [
        AdminMainComponent,
        AdminUserListComponent,
    ],
    imports: [
        adminRoutes,
        FormsModule,
    ],
    exports:[
        AdminMainComponent
    ],
    providers: [
        AdminService
    ]
})
export default class AdminModule { }