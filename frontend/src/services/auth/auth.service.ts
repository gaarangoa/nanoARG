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

import { Sha512 } from './encrypt'

@Injectable()
export class AuthService {
  credentials: any;
  redirectUrl: string;
  base_url: string;
  private encript: any

  constructor (private http:Http, private session:Session){
    // this._cookieService.removeAll();
    this.base_url = environment.api_url;
    this.credentials = {"isLoggedIn": false}
    this.encript = new Sha512();
  }





  login(username: string, password: string) {
    // const hash_user = sha256(username);
    password = this.encript.SHA512(password).toString();

    return this.http.post(this.base_url+'/auth/login/', {email:username, password:password})
      .map(res => {
        this.credentials = res.json();
        if(this.credentials){
          // this.credentials = this.credentials[0];
          // this.credentials['isLoggedIn'] = true;
          this.session.putObject('isLoggedIn', 1);
          this.session.putObject('user', this.credentials[0]);
          // console.log(this.session)
        }else{
          this.session.removeAll();
          // this.credentials = [];
          // this.credentials['isLoggedIn'] = false;
        }
      })
  }

  logout() {
    this.session.removeAll();
    this.credentials = []
  }

  signup(data: Object){
    data['password'] = this.encript.SHA512(data['password']).toString();
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
