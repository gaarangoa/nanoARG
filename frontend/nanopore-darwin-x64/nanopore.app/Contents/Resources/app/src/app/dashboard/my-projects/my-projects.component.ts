import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ProjectService } from '../../../services/project/project.service';
import { Session } from '../../../services/session/session.service';

import { ConfirmationService } from 'primeng/primeng';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit {

  constructor(  public router: Router, 
                public projectService: ProjectService, 
                private session: AuthService,
                private confirmationService: ConfirmationService,
                ){

                this.projectService.readProjectByUserId(this.session.credentials['_id'])
                    .subscribe(()=>{
                        // console.log(this.projectService.projectsByUser)
                    })
                
              }

  ngOnInit() {
  }

  removeProject(project: any, panel: any) {
      // console.log(project)
      this.confirmationService.confirm({
          message: 'Do you really want to delete the project '+project.name+'?',
          header: 'Delete Confirmation',
          icon: 'fa fa-trash',
          accept: () => {
              this.projectService.deleteProject(project)
                .subscribe(()=>{
                //   panel.remove();
                // console.log(this.projectService.projectsByUser)
                })
              
          }
      });
    }

}
