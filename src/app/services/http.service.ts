import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Cloudeer } from '../models/cloudeer'

@Injectable()
export class HttpService {
    private headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) { }

    public http_post(url: string,data:any): Promise<any> {
        var query_body = JSON.stringify(data);
        return this.http
            .post(url, query_body, {headers: this.headers})
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    public http_get(url): Promise<any> {
        return this.http
            .get(url, {headers: this.headers})
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    public  postCloudeer(servicename:string,url:string,data:any):Promise<any> {
        var ticket = ''; //$rootScope.ticket || "";
        if(url.indexOf('?')===-1){
            url+='?';
        }else{
            url+='&';
        }
        url+="ticket=" + encodeURI(ticket);

        var cloudeer = new Cloudeer();
        cloudeer.service = servicename;
        cloudeer.url = url;
        cloudeer.params = data;
        return this.http_post('/cloudeer/post',cloudeer);
    }

    public  getCloudeer(servicename:string,url:string,data:any):Promise<any> {
        var ticket = ''; //$rootScope.ticket || "";
        if(url.indexOf('?')===-1){
            url+='?';
        }else{
            url+='&';
        }
        url+="ticket=" + encodeURI(ticket);

        //JSON.stringify(

        var get_url = '/cloudeer/get';
        get_url+='?service='+encodeURI(servicename);
        get_url+='&url='+encodeURI(url);
        get_url+='&params='+encodeURI(JSON.stringify(data));

        return this.http_get(get_url);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
