import {Request, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {constants} from '../app.constants';
import {NotificationService} from './notification.service';
// import {Inject} from '@angular/core';
// import {HttpInterceptor} from 'angular2-http-interceptor';
// import {Router} from '@angular/router';
// import {Observable} from 'rxjs';
// import {CookieService} from "angular2-cookie/services/cookies.service";

import {HttpInterceptor} from 'angular2-http-interceptor';

export class APIInterceptor implements HttpInterceptor {
    // constructor(@Inject(Router) private router: Router, @Inject(CookieService) private cookie: CookieService) {
    // }

    // constructor(private notif:NotificationService) {
    //
    // }

    before(request:Request):Request {
        //do something ...

        // if (request.method !== RequestMethod.Get && !(request.getBody() instanceof FormData)) {
        //     request.headers.set('Content-Type', 'application/json;charset=UTF-8');
        // }
        // let token: string = this.cookie.get('token');
        // if (!token && (request.url.indexOf('/login') === -1 || request.url.indexOf('/register')) === -1) {
        //     this.router.navigate(['/login']);
        // }
        // token && request.headers.set('token', token);

        return request;
    }

    after(response:Observable<Response>):Observable<any> {
        //do something ...
        // return response.catch(res => {
        //     let json = res.json();
        //     console.log(json);
        //     if (res.status === 403) {
        //
        //     }
        //     return Observable.throw(res);
        // });


        return response.map(res => {
            let json = res.json();
            if (res.status === 200) {
                if (json.errno !== undefined) {
                    json.success = false;
                    json.msg = json.errText;
                    //this.notif.warning(res.errText);
                } else {
                    json.success = true;
                    json.msg = 'OK';
                }
            } else {
                //this.notif.error('系统错误！');
            }

            if (constants.debug === true) {
                console.log(res);
            }

            return json;
        }).catch(res => {
            // if (res.status === 403) {
            //
            // }
            //return res;
            return Observable.throw(res);
        });
    }

}