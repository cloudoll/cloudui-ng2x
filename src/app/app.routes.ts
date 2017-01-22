import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './controller/home';

//import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { AuthGuard }  from './services/auth-guard.service';

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'home',  component: HomeComponent , canActivate: [AuthGuard] },
  {
    path: 'account',
    loadChildren:'app/controller/account/account.module'
  },
  {
    path: 'admin',
    loadChildren:'app/controller/admin/admin.module'
  },
  //{ path: 'about', component: AboutComponent },
  //{
  //   path: 'detail', loadChildren: () => System.import('./+detail')
  //     .then((comp: any) => comp.default),
  //},
  { path: '**',    component: NoContentComponent },
];
