import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { environment } from '../../environments/environment';

@Injectable()
export class ProjectService {
  
  projectInfo: Object;
  projectsByUser: Array<Object>;
  removed: Boolean;
  base_url: string;

  constructor (private http:Http){
    this.projectsByUser = [];
    this.projectInfo = {};
    this.base_url = environment.api_url;
  }

  create(fields: Object) {
    return this.http.post(this.base_url+'/project/create/', fields)
      .map(res => {
        this.projectInfo = res.json()[0];
        this.projectsByUser.push(res.json())
      })
  }


  readProjectByUserId(userID: string){
    return this.http.get(this.base_url+'/project/user/'+userID)
      .map(res => {
        if(res.json()){this.projectsByUser = res.json();}
      })
  }

  getProjectById(projectID: string){
    return this.http.get(this.base_url+'/project/'+projectID)
      .map(res => {
        // console.log(res.json())
        this.projectInfo = res.json()[0];
      })
  }

  deleteProject(fields: Object){
    return this.http.post(this.base_url+'/project/remove/', fields)
      .map( res=> {
        this.projectsByUser = this.projectsByUser.filter(item => item['_id'] != fields['_id'])
      });
  }

  shareProject(fields: Object){
    // console.log(fields)
    return this.http.post(this.base_url+'/project/share/', fields)
      .map( res=> {
        
      });
  }

}