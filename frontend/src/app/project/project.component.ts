import { Component,  OnInit, OnDestroy} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

import { Router, ActivatedRoute} from '@angular/router';

import { Message } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';

// services
import { ProjectService } from '../../services/project/project.service';
import { SampleService } from '../../services/sample/sample.service'
import { UserService } from '../../services/user/user.service'
import { Session } from '../../services/session/session.service';
import { ConfirmationService } from 'primeng/primeng';


@Component({
  // selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['project.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class ProjectComponent implements OnInit, OnDestroy {

  private SUB: any;
  public projectID: string;
  public projectInfo: Object;
  public shared_user_id: string;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private projectService: ProjectService,
    private confirmationService: ConfirmationService,
    public session: Session, 
    private sampleService: SampleService,
    private userService: UserService
  ) {

  }


  ngOnInit() {

    // console.log(this.route.params)
    this.shared_user_id = '1A0';
    this.SUB = this.route.params.subscribe(
        params => {
          // this.dt.reset();
          // console.log(params)
          this.projectID = params['pid'];
          this.projectService.getProjectById(params['pid'])
            .subscribe(response =>{
              this.projectInfo = this.projectService.projectInfo
              // console.log(this.projectInfo)
          });


      })

  }

  ngOnDestroy(){

  }

  share_project(user_to_share: string){
    // get user_id f
    this.userService.get_user_id_from_username(user_to_share)
      .subscribe( res => {
        this.shared_user_id = res.user_id
        
        this.projectService.shareProject({project_id: this.projectInfo['_id'], to_user_id: this.shared_user_id})
          .subscribe( res => {

        });

      });

    
  }

}
