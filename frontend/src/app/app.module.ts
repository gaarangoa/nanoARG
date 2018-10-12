import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TutorialsComponent } from './tutorials/tutorials.component';

// Services
import { AuthService } from '../services/auth/auth.service';
import { Session } from '../services/session/session.service';
import { CookieService } from 'angular2-cookie/core';
import { UserService } from '../services/user/user.service';

// modules
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProjectModule } from './project/project.module';
import { SampleModule } from './project/sample/sample.module';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';

import { RouterModule } from '@angular/router';

// import { PlotlyModule } from 'angular-plotly.js';

// import { TypedModule } from '@kuflink/angular-typed';

import { TypingAnimationDirective } from 'angular-typing-animation';
import { RelativeAbundanceComponent } from './tutorials/relative_abundance/relative_abundance.component';
import { ProcessOutputComponent } from './tutorials/process_output/process_output.component';
import { RunCanuComponent } from './tutorials/run_canu/run_canu.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		DocumentationComponent,
		TypingAnimationDirective,
		TutorialsComponent,
		RelativeAbundanceComponent,
		ProcessOutputComponent,
		RunCanuComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		SampleModule,
		ProjectModule,
		DashboardModule,
		AppRoutingModule
		// PlotlyModule
		// TypedModule
	],
	providers: [
		AuthService,
		Session,
		CookieService,
		UserService,
		{ provide: LocationStrategy, useClass: HashLocationStrategy }
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
