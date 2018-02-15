import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {CookieService} from 'angular2-cookie/core';
import { Session } from '../session/session.service'

import { environment } from '../../environments/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthService {
  credentials = Object;
  redirectUrl: string;
  base_url: string;

  constructor (private http:Http, private session:Session){
    // this._cookieService.removeAll();
    this.base_url = environment.api_url;
  }





  login(username: string, password: string) {
    return this.http.post(this.base_url+'/auth/login/', {email:username, password:password})
      .map(res => {
        this.credentials = res.json();
        // console.log(this.credentials, username, password);
        if(this.credentials){
          this.session.putObject('isLoggedIn', 1);
          this.session.putObject('user', this.credentials[0]);
        }else{
          this.session.removeAll();
        }
      })
  }

  logout() {
    this.session.removeAll();
  }

  signup(data: Object){
    return this.http.post(this.base_url+'/auth/signup/', data)
      .map(res => {
        this.credentials = res.json();
        console.log(this.credentials)
        if(this.credentials){
          this.session.putObject('isLoggedIn', 1);
          this.session.putObject('user', this.credentials);
        }else{
          this.session.removeAll();
        }
      })
  }


}
