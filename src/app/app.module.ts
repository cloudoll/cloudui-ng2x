import {NgModule, ApplicationRef} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, PreloadAllModules} from '@angular/router';
import {removeNgStyles, createNewHosts, createInputTransfer} from '@angularclass/hmr';
import {TranslateModule} from 'ng2-translate';
import {ToasterModule} from 'angular2-toaster/angular2-toaster';
import {HttpInterceptorModule} from 'angular2-http-interceptor';
import {APIInterceptor} from './services/api.tnterceptor'
/*service*/
import { AuthService } from './services/auth.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AuthGuard }  from './services/auth-guard.service';
import { HttpService } from './services/http.service';
/*widgets*/
import {AppHeaderComponent} from './widgets/app-header';
import {AppFooterComponent} from './widgets/app-footer';
import {MenuAsideComponent} from './widgets/menu-aside';
import {MessagesBoxComponent} from './widgets/messages-box';
import {NotificationBoxComponent} from './widgets/notification-box';
import {TasksBoxComponent} from './widgets/tasks-box';
import {UserBoxComponent} from './widgets/user-box';
import {BreadcrumbComponent} from './widgets/breadcrumb';
/*app and root pages*/
import {ENV_PROVIDERS} from './environment';
import {ROUTES} from './app.routes';
import {AppComponent} from './app.component';
import {APP_RESOLVER_PROVIDERS} from './app.resolver';
import {AppState, InternalStateType} from './app.service';
import {HomeComponent} from './controller/home';
import {NoContentComponent} from './no-content';

// Application wide providers
const APP_PROVIDERS = [
    ...APP_RESOLVER_PROVIDERS,
    AppState
];

type StoreType = {
    state:InternalStateType,
    restoreInputValues:() => void,
    disposeOldHosts:() => void
};

let widgets = [
    AppComponent,
    BreadcrumbComponent,
    AppHeaderComponent,
    AppFooterComponent,
    MenuAsideComponent,
    MessagesBoxComponent,
    NotificationBoxComponent,
    TasksBoxComponent,
    UserBoxComponent
];

let services = [
    BreadcrumbService,
    HttpService,
    AuthService,
    AuthGuard,
    NotificationService,
];

let pages = [
    AppComponent,
    HomeComponent,
    NoContentComponent,
];

let modules = [
    BrowserModule,
    HttpModule,
    ToasterModule,
    TranslateModule.forRoot(),
    FormsModule
];

// export function interceptorFactory(notif: NotificationService){
//     let service = new APIInterceptor(notif);
//     return service;
// }

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        ...widgets,
        ...pages
    ],
    imports: [ // import Angular's modules
        ...modules,
        HttpInterceptorModule.withInterceptors([APIInterceptor]),
        RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS,
        services,
        // {
        //     provide: APIInterceptor,
        //     useFactory: interceptorFactory,
        //     deps: [NotificationService]
        // }
    ]
})
export class AppModule {
    constructor(public appRef:ApplicationRef, public appState:AppState) {
    }

    hmrOnInit(store:StoreType) {
        if (!store || !store.state) return;
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            let restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store:StoreType) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        // save state
        const state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = createNewHosts(cmpLocation);
        // save input values
        store.restoreInputValues = createInputTransfer();
        // remove styles
        removeNgStyles();
    }

    hmrAfterDestroy(store:StoreType) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }

}

