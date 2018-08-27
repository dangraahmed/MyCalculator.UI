import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../../../environments/environment';


@Injectable()
export class LoginService {

    constructor(private http: Http, private router: Router) {

    }

    login(username: string, password: string): Observable<any> {
        var user = {
            Id: 1, 
            UserName: "a", 
            UserId: username,
            userPassword: password
        }
        return this.http.post(environment.apiUrl + 'Login/Login', user)
            .map(res => {
                return res.json();
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Observable<any> {
        return Observable.throw(error.message || error);
    }
}
