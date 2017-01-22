import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Injectable()
export class AdminService {
    constructor(private http: HttpService){

    }
}