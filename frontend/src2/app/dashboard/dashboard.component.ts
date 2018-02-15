import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { Session } from '../../services/session/session.service';


@Component({
  // selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public user: any;
  public fullname: string;
  public institution: string;
  public email: string;

  constructor(
    public session: Session,
    private router: Router
  ) {}

  ngOnInit() {

    this.user = this.session.get('user');

    if (!this.session.get('isLoggedIn') ) {
      this.router.navigate(['login']);
    }

  }

}
