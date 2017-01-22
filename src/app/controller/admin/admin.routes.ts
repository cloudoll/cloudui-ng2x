import { RouterModule } from "@angular/router";
import { AdminMainComponent } from './main/main.component';
import { AdminUserListComponent } from './user/list.component';

const adminRoutes = [
    {
        path:'',
        component:AdminMainComponent,
        children: [
            { path: '', component: AdminUserListComponent },
            { path: 'user_list', component: AdminUserListComponent },
        ]
    }
];
export default RouterModule.forChild(adminRoutes);