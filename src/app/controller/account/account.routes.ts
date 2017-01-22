import {RouterModule} from "@angular/router";
import { AccountMainComponent } from './main/main.component';
import { AccountLoginComponent } from './login/login.component';
import { AccountRegisterComponent } from './register/register.component';

const accountRoutes = [
    {
        path:'',
        component:AccountMainComponent,
        children: [
            { path: '', component: AccountLoginComponent },
            { path: 'login', component: AccountLoginComponent },
            { path: 'register', component: AccountRegisterComponent },
        ]
    }
];
export default RouterModule.forChild(accountRoutes);