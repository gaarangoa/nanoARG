import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  base_url: string;

  constructor (private http:Http){
    this.base_url = environment.api_url;
  }

  
  get_user_id_from_username(username: string){
    return this.http.get(this.base_url+'/user/user_id/'+username)
      .map(res => {
        console.log(res.json() )
        return res.json()
      })
  }

}