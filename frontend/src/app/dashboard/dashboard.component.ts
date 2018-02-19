import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { Session } from '../../services/session/session.service';
import { AuthService } from '../../services/auth/auth.service';

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
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {

    this.user = this.auth.credentials;
    // console.log(this.auth.credentials);

    if (this.auth.credentials['isLoggedIn'] === false) {
      this.router.navigate(['login']);
    }

  }

}
