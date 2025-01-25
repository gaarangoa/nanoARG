import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { environment } from '../../environments/environment';

@Injectable()
export class SampleService {
  sampleInfo: Object;
  samplesByProject: Array<Object>;
  file: File;
  done_event: boolean;
  barcode_name: string;
  input_name: string;
  analysisSample: Object;
  upload_directory: string;
  public upload_service: string;
  base_url: string;

  constructor(private http: Http) {
    this.done_event = false;
    this.upload_directory = environment.upload_dir;
    this.base_url = environment.api_url;
    this.upload_service = this.base_url + '/uploadFile/';
  }

  create(fields: Object) {
    return this.http
      .post(this.base_url + '/sample/create/', fields)
      .map(res => {
        this.sampleInfo = res.json();
        // console.log(this.sampleInfo)
      });
  }

  deleteSample(fields: Object) {
    return this.http
      .post(this.base_url + '/sample/remove/', fields)
      .map(res => {
        console.log(this.samplesByProject);
        this.samplesByProject = this.samplesByProject.filter(
          item => item['_id'] != fields['_id']
        );
        console.log(this.samplesByProject);
      });
  }

  getSamplesByProject(projectID: string) {
    return this.http
      .get(this.base_url + '/sample/project/' + projectID)
      .map(res => {
        if (res.json()) {
          this.samplesByProject = res.json();
        } else {
          this.samplesByProject = undefined;
        }
      });
  }

  update(fields: Object) {
    return this.http
      .post(this.base_url + '/sample/update/', fields)
      .map(res => {
        this.sampleInfo = res.json();
        console.log(this.sampleInfo);
      });
  }

  run(fields: Object) {
    return this.http.post(this.base_url + '/analysis/run', fields).map(res => {
      this.analysisSample = res.json();
      console.log('running');
    });
  }

  get_sample_results(sample_id: string) {
    return this.http
      .get(this.base_url + '/sample/read/results/' + sample_id)
      .map(res => {
        return res.json();
      });
  }

  get_sample_results_size(sample_id: string) {
    return this.http
      .get(this.base_url + '/sample/read/size/' + sample_id)
      .map(res => {
        return res.json();
      });
  }

  get_sample_status(sample_id: string) {
    return this.http.get(this.base_url + '/sample/' + sample_id).map(res => {
      return res.json();
    });
  }

  set_sample_status(sample_id: string, project_id: string, status: string) {
    return this.http
      .get(
        this.base_url +
          '/sample/status/' +
          sample_id +
          '/' +
          project_id +
          '/' +
          status
      )
      .map(res => {
        return true;
      });
  }
}
