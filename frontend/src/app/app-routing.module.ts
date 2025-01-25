import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { RelativeAbundanceComponent } from './tutorials/relative_abundance/relative_abundance.component';
import { ProcessOutputComponent } from './tutorials/process_output/process_output.component';
import { RunCanuComponent } from './tutorials/run_canu/run_canu.component';

export const router: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'documentation', component: DocumentationComponent },
	{ path: 'tutorials', component: TutorialsComponent },
	{ path: 'tutorials/relative_abundance', component: RelativeAbundanceComponent },
	{ path: 'tutorials/process_output', component: ProcessOutputComponent },
	{ path: 'tutorials/run_canu', component: RunCanuComponent },
	{ path: 'dashboard/project/:pid', redirectTo: 'project/:pid', pathMatch: 'full', data: { type: 'project' } } // The project button inside the dashboard
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(router);
