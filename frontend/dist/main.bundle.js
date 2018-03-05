webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documentation_documentation_component__ = __webpack_require__("../../../../../src/app/documentation/documentation.component.ts");




var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a" /* LoginComponent */] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_3__documentation_documentation_component__["a" /* DocumentationComponent */] },
    { path: 'dashboard/project/:pid', redirectTo: 'project/:pid', pathMatch: 'full', data: { type: 'project' } } // The project button inside the dashboard
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(router);
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <a routerLink=\"home\" class=\"navbar-brand\"><strong>ARG</strong> | nanopore </a>\n            <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-main\">\n          </button>\n        </div>\n        <div class=\"navbar-collapse collapse\" id=\"navbar-main\">\n            <ul class=\"nav navbar-nav\">\n\n                <!-- <li *ngIf=\"authService.credentials['isLoggedIn']\"> -->\n                <li>\n                    <a routerLink=\"dashboard\">Dashboard</a>\n                </li>\n                <li>\n                    <a routerLink=\"documentation\">Documentation</a>\n                </li>\n            </ul>\n\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li *ngIf=\"!authService.session.get('isLoggedIn')\"><a routerLink=\"login\">LogIn</a></li>\n                <li *ngIf=\"authService.session.get('isLoggedIn')\"><a routerLink=\"login\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n\n        </div>\n    </div>\n</div>\n\n\n<br>\n<hr>\n\n<div class=\"container\">\n    <div class=\"row-fluid\">\n        <div class=\"span2\"></div>\n        <div class=\"span10\">\n            <div class=\"wrapper\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__ = __webpack_require__("../../../../../src/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(session, authService) {
        this.session = session;
        this.authService = authService;
    }
    AppComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_session_service__["a" /* Session */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__ = __webpack_require__("../../../../../src/services/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_project_module__ = __webpack_require__("../../../../../src/app/project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__project_sample_sample_module__ = __webpack_require__("../../../../../src/app/project/sample/sample.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__documentation_documentation_component__ = __webpack_require__("../../../../../src/app/documentation/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__documentation_documentation_component__["a" /* DocumentationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12__project_sample_sample_module__["a" /* SampleModule */],
                __WEBPACK_IMPORTED_MODULE_11__project_project_module__["a" /* ProjectModule */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_module__["a" /* DashboardModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_7__services_session_session_service__["a" /* Session */],
                __WEBPACK_IMPORTED_MODULE_8_angular2_cookie_core__["CookieService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */] },
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/dashboard-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<!--Profile and new project-->\n<div class=\"col-md-3\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading with-border text-center\">\n            <strong><h3 class=\"panel-title\"><strong>{{ user.fullname }}</strong></h3>\n            </strong>\n        </div>\n        <!-- /.box-header -->\n        <div class=\"panel-body\">\n            <strong><i class=\"fa fa-book margin-r-5\"></i> Education</strong>\n\n            <p class=\"text-muted \">\n                {{user.institution}}\n            </p>\n\n            <hr>\n\n            <strong><i class=\"fa fa-map-marker margin-r-5\"></i> Contact</strong>\n\n            <p class=\"text-muted\">{{user.email}}</p>\n\n            <hr>\n\n            <strong><i class=\"fa fa-pencil margin-r-5\"></i> Skills</strong>\n\n            <p>\n                <span class=\"label label-danger\">Nanopore</span>\n                <span class=\"label label-success\">Sequencing</span>\n            </p>\n\n            <hr>\n\n            <strong><i class=\"fa fa-file-text-o margin-r-5\"></i> Notes</strong>\n\n            <p></p>\n        </div>\n        <!-- /.box-body -->\n    </div>\n\n\n\n</div>\n\n\n<!--Feed with the existing projects from user-->\n<div class=\"col-md-6\">\n    <app-my-projects></app-my-projects>\n</div>\n\n\n<!--Some updates about anything-->\n<div class=\"col-md-3\">\n    <div class=\"\">\n        <app-new-project></app-new-project>\n    </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__ = __webpack_require__("../../../../../src/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(session, router, auth) {
        this.session = session;
        this.router = router;
        this.auth = auth;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.user = this.session.get('user');
        // console.log(this.auth.credentials);
        if (this.session.get('isLoggedIn') === false) {
            this.router.navigate(['login']);
        }
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_project_new_project_component__ = __webpack_require__("../../../../../src/app/dashboard/new-project/new-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_project_project_service__ = __webpack_require__("../../../../../src/services/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__my_projects_my_projects_component__ = __webpack_require__("../../../../../src/app/dashboard/my-projects/my-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_primeng__["ConfirmDialogModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__new_project_new_project_component__["a" /* NewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__my_projects_my_projects_component__["a" /* MyProjectsComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_project_project_service__["a" /* ProjectService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/my-projects/my-projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/my-projects/my-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" *ngFor=\"let item of projectService.projectsByUser\">\n    <div #projectPanel class=\"panel panel-default\">\n        <div class=\"panel-heading with-border\">\n            <h3 class=\"box-title\">{{ item.name }}</h3>\n        </div>\n\n        <div class='panel-body'>\n            <strong><i class=\"fa fa-envira margin-r-5\"></i> {{item.biome}}</strong>\n            <p>{{item.description}}</p>\n            <strong><i class=\"fa fa-calendar margin-r-5\"></i> Date</strong>\n            <p>{{item.date}}</p>\n        </div>\n\n        <div class=\"box-footer \">\n            <button routerLink=\"project/{{ item._id }}\" class=\"btn btn-xs btn-default\"> <i class=\"fa fa-cube\"></i> <strong>View Project</strong> </button>\n            <!--<a routerLink=\"new-sample/{{ item._id }}\" class=\"\"><span class=\"label label-success\">Edit Project</span></a>-->\n            <button (click)=\"removeProject(item, projectPanel)\" class=\"btn btn-xs btn-default\"> <i class=\"fa fa-trash\"></i> <strong>Remove Project</strong></button>\n        </div>\n\n    </div>\n</div>\n\n<p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>"

/***/ }),

/***/ "../../../../../src/app/dashboard/my-projects/my-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_project_service__ = __webpack_require__("../../../../../src/services/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyProjectsComponent = (function () {
    function MyProjectsComponent(router, projectService, session, confirmationService) {
        this.router = router;
        this.projectService = projectService;
        this.session = session;
        this.confirmationService = confirmationService;
        this.projectService.readProjectByUserId(this.session.get('user')['_id'])
            .subscribe(function () {
            // console.log(this.projectService.projectsByUser)
        });
    }
    MyProjectsComponent.prototype.ngOnInit = function () {
    };
    MyProjectsComponent.prototype.removeProject = function (project, panel) {
        var _this = this;
        // console.log(project)
        this.confirmationService.confirm({
            message: 'Do you really want to delete the project ' + project.name + '?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.projectService.deleteProject(project)
                    .subscribe(function () {
                    //   panel.remove();
                    // console.log(this.projectService.projectsByUser)
                });
            }
        });
    };
    MyProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-projects',
            template: __webpack_require__("../../../../../src/app/dashboard/my-projects/my-projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/my-projects/my-projects.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_project_project_service__["a" /* ProjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === 'function' && _d) || Object])
    ], MyProjectsComponent);
    return MyProjectsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/my-projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/new-project/new-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/new-project/new-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-warning \">\n    <div class=\"box-header with-border\">\n        <h3 class=\"box-title\"><strong>New Project</strong></h3>\n    </div>\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <form [formGroup]=\"newProjectForm\" (ngSubmit)=\"create()\">\n        <!-- text input -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error':!newProjectForm.controls['name'].valid && newProjectForm.controls['name'].touched}\" >\n            <label>Project Name</label>\n            <input formControlName=\"name\" [formControl]=\"newProjectForm.controls['name']\" type=\"text\" class=\"form-control\" placeholder=\"Enter ...\">\n        </div>\n\n        <!-- select -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error':!newProjectForm.controls['biome'].valid && newProjectForm.controls['biome'].touched}\">\n            <label>Biome</label>\n            <input formControlName=\"biome\" #biome type=\"text\" class=\"form-control\" placeholder=\"Enter ...\">\n            <!--<select class=\"form-control\">\n            <option>Soil</option>\n            </select>-->\n        </div>\n\n        <!-- textarea -->\n        <div class=\"form-group\" [ngClass]=\"{'has-error':!newProjectForm.controls['description'].valid && newProjectForm.controls['description'].touched}\">\n            <label>Project Description</label>\n            <textarea formControlName=\"description\" #description class=\"form-control\" rows=\"3\" placeholder=\"Enter at least 50 characters\"></textarea>\n        </div>\n\n        <div class=\"box-footer text-center \">\n            <button type=\"submit\" class=\"btn btn-default btn-sm\" [disabled]=\"!newProjectForm.valid\"><strong>Create Project</strong></button>\n        </div>\n\n        </form>\n    </div>\n    <!-- /.box-body -->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/new-project/new-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_project_service__ = __webpack_require__("../../../../../src/services/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewProjectComponent = (function () {
    function NewProjectComponent(router, projectService, session, fb) {
        var _this = this;
        this.router = router;
        this.projectService = projectService;
        this.session = session;
        this.fb = fb;
        this.formValid = false;
        this.newProjectForm = this.fb.group({
            'name': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(5)]],
            'description': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(50)]],
            'biome': [undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.newProjectForm.valueChanges.subscribe(function () {
            _this.formValid = _this.newProjectForm.valid;
        });
    }
    NewProjectComponent.prototype.create = function () {
        var _this = this;
        this.timestamp = new Date();
        this.fields = this.newProjectForm.value;
        this.fields['userID'] = this.session.credentials['_id'];
        this.fields['timestamp'] = this.timestamp.getTime();
        this.fields['date'] = this.timestamp.toString();
        this.projectService.create(this.fields)
            .subscribe(function (project) {
            // this.projectService.projectsByUser.unshift(this.projectService.projectInfo);
            _this.newProjectForm.reset();
            // console.log(this.projectService.projectsByUser)
        });
    };
    NewProjectComponent.prototype.ngOnInit = function () {
    };
    NewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-project',
            template: __webpack_require__("../../../../../src/app/dashboard/new-project/new-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/new-project/new-project.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_project_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_project_project_service__["a" /* ProjectService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _d) || Object])
    ], NewProjectComponent);
    return NewProjectComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/new-project.component.js.map

/***/ }),

/***/ "../../../../../src/app/documentation/documentation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documentation/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> About ARGpore </h2>\n<h3>ARGpore Metagenomics Service</h3>\n\nThe ARGpore service is an automated pipeline designed specifically for the annotation of Antimicrobial Resistance (AMR) genes from metagenomics samples using the MinION nanopore sequence technology.\n\n\n<h3> How to use ARGpore for data analysis </h3>\n<h4>Register with us</h4>\nRegistration is required to submit your nanopore sequencing data into our platform. Please, note that the registration needs a valid email address. \nIf you don't have an account, just click in the <strong>login</strong> link placed in the top right of the window. \n\n<h4>Check the format of your data</h4>\nNanopore devices produce raw reads in the FAST5 format. These files provide a  variety of information from your samples. However, ARGpore does not require that information. What you need to submit to the ARGpore service is a FASTA file with your long sequence reads. Therefore, you need to substract the sequences before submiting (1D, 2D, both or the best strand). \n<br><br>\nTo obtain FASTA files from the FAST5 format you can use <a href=\"https://poretools.readthedocs.io/en/latest/\"> poretools </a>, a flexible toolkit for exploring datasets generated from the nanopore sequencing devices. It can be as simple as typing: \n<code>\n  poretools fasta --type best test_data/\n</code>\nto a linux/mac console to get the formated required for ARGpore. \nFor more details about poretools and how to install it please visit their <a href=\"https://poretools.readthedocs.io/en/latest/\"> documentation </a>. \n\n<h3>How we analyze the nanopore data</h3>\n<p>The latest version of the ARGpore pipeline includes the following steps: </p>\n<div class=\"col-md-10 col-md-offset-1\"> \n  <img class=\"img-responsive\" src='./public/img/pipeline.png'>\n</div>\n\n<h3 class='col-md-12' >How to use ARGpore</h3>\n<div class=\"col-md-4 text-center\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>Create a New Project</h4>\n    </div>\n    <div class=\"panel-body\">\n      To create a New Project, go under the <strong>New project</strong> pannel and type the information that is required. Note that the description has to have at least 50 characters. \n      <img class=\"img-responsive\" src='./public/img/demo/createProject.png'>\n      Then click on <strong>Create Project</strong> button. If everything is right, you will get an update in the dashboard showing the new created project. \n      <img class=\"img-responsive\" src='./public/img/demo/createdProject.png'>\n    </div>\n  </div>\n</div>\n\n<div class=\"col-md-8\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading text-center\">\n      <h4>Add samples to your project</h4>\n    </div>\n    <div class=\"panel-body\">\n      Once you created your project click on <strong>View Project</strong> button\n      <img class=\"img-responsive\" src='./public/img/demo/projectPanel.png'>\n      Then, click on Add Sample button in the project information panel and you will be prompted with a panel with four different steps that you need to go through. \n      \n      <img class=\"img-responsive\" src='./public/img/demo/GOTO.png'>\n\n      <h4>Metadata</h4> \n      <p>Requires information about your sample. Note that blank fields are not allowed.</p>\n      <ul>\n        <li>\n           <strong>Sample Name</strong>: Name of the sample you are analizing. \n        </li>\n\n        <li>\n           <strong>Primary Group</strong>: Data related to the sample collection. For instance, soil, water, wastewater, etc. \n        </li>\n\n        <li>\n           <strong>Secondary Group</strong>: More specific information about the sample location. For instance, if you primary group is wastewater, the secondary group can be influent, efluent, sludge, etc.  \n        </li>\n\n        <li>\n           <strong>Location</strong>: The name of the city/town/place where the sample is collected. \n        </li>\n\n        <li>\n           <strong>Comments</strong>: Any relevant information related to the sample collection. If there are not relevant comments just put <strong>none</strong>. \n        </li>\n\n      </ul>\n\n      <h4>Upload Files</h4> \n      <p>Browse your reads and barcodes files. These files has to be in FASTA format.</p>\n\n      <h4>Parameters setup</h4> \n      <p>In the current version, there are not any customizable parameter.</p>\n\n      <h4>Execute</h4> \n      <p>Make sure you are submiting the right files and click on Execute Analysis button.</p>\n\n\n    </div>\n\n  </div>\n</div>\n\n<div class=\"col-md-12 text-center\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>Retrieving your sample analysis </h4>\n    </div>\n    <div class=\"panel-body\">\n      <p>Samples submitted for analysis will be sent to one of the ARC clusters at Virginia Tech. The time required to run the jobs will vary depending on the cluster availability. In general, it takes from few minutes to few hours to get the analysis done. You will need to monitor the analysis activity under the samples table (see below). It will prompt the status of each sample. If your sample has the status <strong>RetrieveResults: SUCCESS</strong>, your sample has been processed. If there were any error during the execution, you will see an error message. If the process is going you will see a START message.</p> \n      <p>Once the samples are processed you can download a table with the absolute abundance of the Antibiotic resistance categories (types) or groups (subtypes) that can be used for downstream analysis.</p>\n\n      <img class=\"img-responsive\" src='./public/img/demo/retrieveResults.png'>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-md-4 col-md-offset-0 text-center\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>Funding</h4>\n    </div>\n    <div class=\"panel-body\">\n      <p>The ARGpore resource receives funding from the <strong>NSF Halting Environmental Antimicrobial Resistance Dissemination (HEARD) PIRE </strong></p>\n\n      <img class=\"img-responsive\" src='./public/img/demo/PIRE.png'>\n\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col-md-8 col-md-offset-0 text-center\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <h4>Who is behind ARGpore</h4>\n    </div>\n    <div class=\"panel-body\">\n      <p>ARGpore is part of a multidisciplinary collaboration between scientist from the department of Computer Science  and Environmental Engineering at Virginia Tech, including:\n         Faculty: <a href=\"http://bioinformatics.cs.vt.edu/zhanglab/\">Dr. Liqing Zhang</a>  (CS), <a href=\"\">Dr. Lenwood S. Heath </a> (CS), <a href=\"\">Dr. Amy Pruden </a> (C&EE), and Dr. <a href=\"\">Peter Vikesland</a> (C&EE)</p>\n\n         <p>ARGpore is developed and maintained by <a href=\"\">Gustavo Arango </a>: PhD Student in the Computer Science Depatrment at Virginia Tech and <a href=\"\">Dongjuan Dai</a> Post doctoral associate in the department of Civil and Environmental Engineering. </p>\n         \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/documentation/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentationComponent = (function () {
    function DocumentationComponent() {
    }
    DocumentationComponent.prototype.ngOnInit = function () {
    };
    DocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documentation',
            template: __webpack_require__("../../../../../src/app/documentation/documentation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/documentation/documentation.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], DocumentationComponent);
    return DocumentationComponent;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/documentation.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n    /*image is public available from here http://www.stockvault.net/photo/127466/bacteria*/\n    background-image: url(" + escape(__webpack_require__("../../../../../src/app/home/img/background-1.jpg")) + ") !important;\n    color: white !important;\n}\n\n.jumbotron .btn {\n    background: rgba(24, 98, 181, 0.5) !important;\n}\n\n*,\n*:before,\n*:after {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\nbody {\n    padding: 0;\n    background: #f5f5f5;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <br><br>\n    <h1>ARG - Nanopore</h1>\n    <br>\n    <p>ARGpore is an online pipeline designed specifically to analyze environmental metagenomics samples from the <a>nanopore</a> MinION sequencing technology.</p>\n    <br>\n    <br>\n    <p><a class=\"btn btn-primary btn-lg\">Learn more</a></p>\n</div>\n\n\n<!--<a href=\"http://www.freepik.com/free-vector/digital-technology-background_1055187.htm\">Designed by Freepik</a>-->\n\n\n<br><br><br>\n\n\n\n\n\n\n<div class=\"col-md-12 text-center\">\n    <h1>Motivation</h1>\n    <br><br>\n</div>\n\n<div class=\"col-md-4 text-center\">\n    <div class='panel panel-primary'>\n        <div class=\"panel-heading\">\n            <h3>What is antibiotic resistance?</h3>\n        </div>\n        <div class=\"panel-body\">\n            <!--<blockquote >-->\n            Antibiotic / Antimicrobial resistance is the ability of microbes to resist the effects of drugs – that is, the germs are not killed, and their growth is not stopped. Although some people are at greater risk than others, no one can completely avoid the\n            risk of antibiotic-resistant infections.\n            <hr>\n            <small><cite title=\"https://www.cdc.gov/drugresistance/about.html\">CDC: Centers for Disease Control and Prevention</cite></small>\n\n            <!--</blockquote>-->\n        </div>\n\n    </div>\n    <!--<iframe width=\"560\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>-->\n</div>\n\n\n<div class=\"col-md-4 text-center\">\n    <div class='panel panel-info'>\n        <div class=\"panel-heading\">\n            <h3>Biggest Threats</h3>\n        </div>\n        <div class=\"panel-body\">\n            <!--<blockquote >-->\n            In 2013, CDC published a report outlining the top 18 drug-resistant threats to the United States. These threats were categorized based on level of concern: urgent, serious, and concerning. In general, threats assigned to the urgent and serious categories\n            require more monitoring and prevention activities, whereas the threats in the concerning category require less.\n            <hr>\n            <small><cite title=\"https://www.cdc.gov/drugresistance/about.html\">CDC: Centers for Disease Control and Prevention</cite></small>\n\n            <!--</blockquote>-->\n        </div>\n\n    </div>\n    <!--<iframe width=\"560\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>-->\n</div>\n\n\n<div class=\"col-md-4 text-center\">\n    <div class='panel panel-success'>\n        <div class=\"panel-heading\">\n            <h3>Nanopore MinION sequencing</h3>\n        </div>\n        <div class=\"panel-body\">\n            <!--<blockquote >-->\n\n            <a href=\"https://nanoporetech.com/\">Oxford Nanopore Technologies </a> has developed the MinION, considered a 3rd generation sequencing technology. The MinION is a portable, real time, long-read, low cost device that has been designed to bring\n            easy biological analyses in real world applications such as disease/pathogen surveillance, environmental monitoring or food chain surveillance.\n            <hr>\n            <small><cite title=\"https://nanoporetech.com/\">Oxford Nanopore Tech</cite></small>\n\n            <!--</blockquote>-->\n        </div>\n\n    </div>\n    <!--<iframe width=\"560\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>-->\n</div>\n\n\n\n<div class=\"col-md-12 text-center\">\n    <hr>\n    <br><br>\n    <h1>ARGpore service</h1>\n    <br><br>\n\n</div>\n\n\n\n\n\n<div class=\"col-md-3 text-center\">\n    <div class='box box-primary'>\n        <div class=\"box-header\">\n            <h2>Environmental Metagenomics</h2>\n        </div>\n        <div class=\"box-body\">\n            Environmental metagenomics is the study of organisms in a microbial community based on analyzing the DNA within an environmental sample.\n            <br><br> Examples include profiling microbial populations in water samples taken from deep ocean vents or in soil samples from human-made environments like active mineral mines.\n            <br><br> Environmental metagenomics study data are used for agricultural microbiome analysis, ecological remediation, or other biological investigations.\n            <br><br> In particular environmental metagenomics can help to understand the spread of Antibiotic Resistance Genes through different environments.\n            <br><br>\n        </div>\n\n    </div>\n    <!--<iframe width=\"560\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>-->\n</div>\n\n\n<div class=\"col-md-9 text-center\">\n    <div class='panel panel-info'>\n        <div class=\"panel-heading\">\n            <h2>ARGpore pipeline</h2>\n        </div>\n        <div class=\"panel-body\">\n            <p>One of the main challenges of analyzing nanopore environmental metagenomes is the lack of depth coverage in the samples. Unlike single-cell sequencing, environmental metagenomics can contain thousands of different organisms making almost imposible\n                to assemble them. Thus, despite computational tools designed for single-cell nanopore sequencing reports very high assembly accuracy, they cannot be applied directly to environmental metagenomics samples. Therefore, we developed ARGpore:\n                A specialized tool for processing low coverage naopore sequence reads from environmental samples.\n            </p>\n            <br>\n            <img class=\"img-responsive\" src='assets/img/pipeline.png'>\n\n        </div>\n\n    </div>\n    <!--<iframe width=\"560\" height=\"315\" [src]=\"url\" frameborder=\"0\" allowfullscreen></iframe>-->\n</div>\n\n\n\n\n\n\n<div class=\"col-md-12 text-center\">\n    <hr>\n    <br><br>\n    <h1>Meet our additional services</h1>\n    <br><br>\n\n    <div class=\"col-md-3 col-md-offset-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-aqua-active\">\n                <h3 class=\"widget-user-username\"><strong>MetaStorm</strong></h3>\n                <h5 class=\"widget-user-desc\"></h5>\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"assets/img/MS.png\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <span> <a href=\"http://bench.cs.vt.edu/MetaStorm/\"> A Web service developed for functional and taxonomy annotation of metagenomes from short read sequences </a> </span>\n                            <!--<span class=\"description-text\">Virginia Tech</span>-->\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n    <div class=\"col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-aqua-active\">\n                <h3 class=\"widget-user-username\"><strong>deepARG</strong></h3>\n                <h5 class=\"widget-user-desc\"></h5>\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"assets/img/DL.png\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <span> <a href=\"http://bench.cs.vt.edu/deeparg\"> An accurate Antibiotic Resistance Profiler for short and long sequences using Deep Learning </a></span>\n                            <!--<span class=\"description-text\">Virginia Tech</span>-->\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n</div>\n\n\n\n\n\n\n<div class=\"col-md-12 text-center\">\n    <hr>\n    <br><br>\n    <h1>Who is behind ARGpore</h1>\n    <br><br>\n\n\n    <div class=\"col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-default\">\n                <h3 class=\"widget-user-username\">Dr. Zhang's Lab</h3>\n                <h5 class=\"widget-user-desc\">Computer Science</h5>\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"assets/img/user_avatar.png\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">Department of Computer Science</h5>\n                            <span class=\"description-text\">Virginia Tech</span>\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n    <div class=\"col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-default\">\n                <h3 class=\"widget-user-username\">Dr. Pruden's Lab</h3>\n                <h5 class=\"widget-user-desc\">Environmental Engineering</h5>\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"./assets/img/user_avatar.png\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">Department of Civil and Environmental Engineering</h5>\n                            <span class=\"description-text\">Virginia Tech</span>\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n    <div class=\"col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-default\">\n                <h3 class=\"widget-user-username\">Dr. Heath's Lab</h3>\n                <h5 class=\"widget-user-desc\">Computer Science</h5>\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"./assets/img/user_avatar.png\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">Department of Computer Science</h5>\n                            <span class=\"description-text\">Virginia Tech</span>\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n\n    <div class=\"col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-default\">\n                <h3 class=\"widget-user-username\">Dr. Vikesland's Lab</h3>\n                <h5 class=\"widget-user-desc\">Environmental Engineering</h5>\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"assets/img/user_avatar.png\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">Department of Civil and Environmental Engineering</h5>\n                            <span class=\"description-text\">Virginia Tech</span>\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n</div>\n\n\n<div class=\"col-md-12 text-center\">\n    <hr>\n    <br><br>\n    <h1>ARGpore is supported by</h1>\n    <br><br>\n\n    <div class=\"col-md-3 col-md-offset-2 text-center\">\n        <div class=\"box box-widget widget-user\">\n            <div class=\"widget-user-header bg-default\">\n                <h4></h4>\n            </div>\n            <div class=\"widget-user-image\">\n                <!-- <p>NSF Halting Environmental Antimicrobial Resistance Dissemination (HEARD) PIRE</p> -->\n\n                <img class=\"img-circle\" src='assets/img/demo/PIRE.png'>\n\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">HEARD - PIRE</h5>\n                            <!--<span class=\"description-text\">National Science Foundation</span>-->\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n    </div>\n\n    <div class=\" col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-default\">\n                <!--<h3 class=\"widget-user-username\">NSF</h3>-->\n                <!--<h5 class=\"widget-user-desc\">National Science Foundation</h5>-->\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"assets/img/nsf1.jpg\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">National Science Foundation</h5>\n                            <!--<span class=\"description-text\">National Science Foundation</span>-->\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n    <div class=\"col-md-3\">\n        <!-- Widget: user widget style 1 -->\n        <div class=\"box box-widget widget-user\">\n            <!-- Add the bg color to the header using any of the bg-* classes -->\n            <div class=\"widget-user-header bg-default\">\n                <!--<h3 class=\"widget-user-username\">NSF</h3>-->\n                <!--<h5 class=\"widget-user-desc\">National Science Foundation</h5>-->\n\n            </div>\n            <div class=\"widget-user-image\">\n                <img class=\"img-circle\" src=\"assets/img/Virginia-Tech-Logo.jpg\" alt=\"User Avatar\">\n            </div>\n            <div class=\"box-footer\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 border-right\">\n                        <div class=\"description-block\">\n                            <h5 class=\"description-header\">Virginia Polytechnic Institute and State University</h5>\n                            <!--<span class=\"description-text\">National Science Foundation</span>-->\n                        </div>\n                        <!-- /.description-block -->\n                    </div>\n                    <!-- /.col -->\n                </div>\n                <!-- /.row -->\n            </div>\n        </div>\n        <!-- /.widget-user -->\n    </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    // name:string;
    // video: any = {id: 'xZbcwi7SfZE'};
    // baseUrl:string = 'https://www.youtube.com/embed/';
    // url: any;
    // constructor(private sanitizer: DomSanitizer) { 
    //   this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.video.id);    
    // }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/img/background-1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "background-1.25620a61143b0af087a9.jpg";

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n  <div class=\"col-md-4 col-md-offset-4\">\n      <h3>Login</h3>\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n        <input class=\"form-control\" formControlName=\"email\"  type=\"text\" placeholder=\"email\"  />\n        <input class=\"form-control\" formControlName=\"password\" type=\"password\"  placeholder=\"Password\" />     \t\t  \n        <button class=\"btn btn-primary btn-block\" >Login</button>  \n      </form>\n  </div>\n\n\n  <div class=\"col-md-4 col-md-offset-4\">\n    <h3>Create an Account</h3>\n\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup()\">\n      <input class=\"form-control\" formControlName=\"fullname\"  type=\"text\" placeholder=\"Full name\" required />\n      <input class=\"form-control\" formControlName=\"email\"  type=\"email\"  placeholder=\"email address\"  required />  \n      <input class=\"form-control\" formControlName=\"password\" type=\"password\"  placeholder=\"Password\" />\n      \n      <input class=\"form-control\" formControlName=\"repassword\" type=\"password\"  placeholder=\"Re-type password\" />\n      <p *ngIf=\"registerForm.controls['password'].value!=registerForm.controls['repassword'].value\">Error passwords don't match</p>\n      <input class=\"form-control\" formControlName=\"institution\"  type=\"text\" placeholder=\"Institution\" required/> \n\n      <button class=\"btn btn-primary btn-block\" >Sign Up</button> \n    </form>\n\n    <p>{{message}}</p>\n\n  </div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__ = __webpack_require__("../../../../../src/services/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, session, fb) {
        this.authService = authService;
        this.router = router;
        this.session = session;
        this.fb = fb;
        this.registerForm = this.fb.group({
            'fullname': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            'email': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            'password': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]],
            'repassword': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]],
            'institution': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
        this.loginForm = this.fb.group({
            'email': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            'password': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
        // if(this.authService.credentials['isLoggedIn']){
        //   this.router.navigate(['dashboard']);
        // }
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.loginForm.value['email'], this.loginForm.value['password'])
            .subscribe(function () {
            _this.router.navigate(['./dashboard']);
            // if(this.session.get('isLoggedIn')){
            //  this.router.navigate(['dashboard']);
            // }else{
            // this.message="Error Username or password"
            // }
        });
    };
    LoginComponent.prototype.signup = function () {
        var _this = this;
        this.authService.signup(this.registerForm.value)
            .subscribe(function (user) {
            // console.log(this.authService.credentials)  
            _this.router.navigate(['dashboard']);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_sample_component__ = __webpack_require__("../../../../../src/app/project/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_metadata_metadata_component__ = __webpack_require__("../../../../../src/app/project/sample/metadata/metadata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_upload_upload_component__ = __webpack_require__("../../../../../src/app/project/sample/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sample_parameters_parameters_component__ = __webpack_require__("../../../../../src/app/project/sample/parameters/parameters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sample_execute_execute_component__ = __webpack_require__("../../../../../src/app/project/sample/execute/execute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_samples_view_samples_component__ = __webpack_require__("../../../../../src/app/project/view-samples/view-samples.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// Here is how the routes by default are loaded into the component, it has to be with children
var routes = [
    { path: 'project/:pid/dashboard', redirectTo: 'dashboard' },
    { path: 'project/:pid', component: __WEBPACK_IMPORTED_MODULE_2__project_component__["a" /* ProjectComponent */],
        children: [
            { path: 'add-sample', component: __WEBPACK_IMPORTED_MODULE_3__sample_sample_component__["a" /* SampleComponent */], data: { type: 'pid' },
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_4__sample_metadata_metadata_component__["a" /* MetadataComponent */] },
                    { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_5__sample_upload_upload_component__["a" /* UploadComponent */] },
                    { path: 'parameters', component: __WEBPACK_IMPORTED_MODULE_6__sample_parameters_parameters_component__["a" /* ParametersComponent */] },
                    { path: 'execute', component: __WEBPACK_IMPORTED_MODULE_7__sample_execute_execute_component__["a" /* ExecuteComponent */] }
                ]
            },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_8__view_samples_view_samples_component__["a" /* ViewSamplesComponent */] },
            { path: 'view-samples', component: __WEBPACK_IMPORTED_MODULE_8__view_samples_view_samples_component__["a" /* ViewSamplesComponent */] }
        ]
    }
];
var ProjectRoutingModule = (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/project-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"col-md-12\" *ngIf=\"projectInfo\">\n    <div class=\"box box-solid\">\n        <div class=\"box-header text-center\">\n            <h1 class=\"\">{{ projectInfo.name }}</h1>\n        </div>\n\n        <div class='box-body'>\n            <strong><i class=\"fa fa-envira margin-r-5\"></i> {{projectInfo.biome}}</strong>\n            <p>{{projectInfo.description}}</p>\n            <strong><i class=\"fa fa-calendar margin-r-5\"></i> Date</strong>\n            <p>{{projectInfo.date}}</p>\n            <strong><i class=\"fa fa-codepen margin-r-5\"></i> Project ID</strong>\n            <p>{{ projectInfo._id }}</p>\n        </div>\n\n\n        <div class=\"box-footer\">\n            <a routerLink=\"dashboard\" class=\"\"> <span class=\"label label-primary\">Projects</span></a>\n            <a routerLink=\"add-sample\" class=\"\"> <span class=\"label label-success\">Add Sample</span></a>\n            <a routerLink=\"view-samples\" class=\"\"> <span class=\"label label-warning\">View Samples</span></a>\n        </div>\n    </div>\n\n</div>\n<div class=\"col-md-12\">\n    <div class=\"box box-primary\">\n        <router-outlet></router-outlet>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_project_service__ = __webpack_require__("../../../../../src/services/project/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectComponent = (function () {
    function ProjectComponent(router, route, projectService, confirmationService, session, sampleService) {
        this.router = router;
        this.route = route;
        this.projectService = projectService;
        this.confirmationService = confirmationService;
        this.session = session;
        this.sampleService = sampleService;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        // console.log(this.route.params)
        var _this = this;
        this.SUB = this.route.params.subscribe(function (params) {
            // this.dt.reset();
            // console.log(params)
            _this.projectID = params['pid'];
            _this.projectService.getProjectById(params['pid'])
                .subscribe(function (response) {
                _this.projectInfo = _this.projectService.projectInfo;
                // console.log(this.projectInfo)
            });
        });
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // selector: 'app-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project.component.css")],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_project_project_service__["a" /* ProjectService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_project_project_service__["a" /* ProjectService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_session_session_service__["a" /* Session */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__["a" /* SampleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__["a" /* SampleService */]) === 'function' && _f) || Object])
    ], ProjectComponent);
    return ProjectComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_routing_module__ = __webpack_require__("../../../../../src/app/project/project-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_sample_module__ = __webpack_require__("../../../../../src/app/project/sample/sample.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_samples_view_samples_component__ = __webpack_require__("../../../../../src/app/project/view-samples/view-samples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts__ = __webpack_require__("../../../../angular2-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService__ = __webpack_require__("../../../../angular2-highcharts/dist/HighchartsService.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












function highchartsFactory() {
    return __webpack_require__("../../../../highcharts/highcharts.js");
}


var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_4__sample_sample_module__["a" /* SampleModule */],
                __WEBPACK_IMPORTED_MODULE_2__project_routing_module__["a" /* ProjectRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_8_angular2_highcharts__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_10__swimlane_ngx_charts__["NgxChartsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_primeng_primeng__["ConfirmationService"],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9_angular2_highcharts_dist_HighchartsService__["HighchartsStatic"],
                    useFactory: highchartsFactory
                }
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__project_component__["a" /* ProjectComponent */], __WEBPACK_IMPORTED_MODULE_5__view_samples_view_samples_component__["a" /* ViewSamplesComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], ProjectModule);
    return ProjectModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/project.module.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/execute/execute.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/sample/execute/execute.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <br><br>\n    <div class=\"col-md-6 col-md-offset-3 text-center\">\n        <div class=\"panel panel-default \">\n            <div class=\"panel-heading with-border\">\n                <h3 class=\"panel-title\">Nanopore Antibiotic Resitance Annotation</h3>\n            </div>\n            <div class=\"panel-body\">\n\n              <p ><strong>You are almost done!</strong> Please make sure that the information is correct to start the analysis. </p>\n              \n              <button (click)=\"run()\" class=\"btn btn-default btn-sm\" > <strong>Execute Analysis</strong></button>\n            \n            </div>\n\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/project/sample/execute/execute.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecuteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_component__ = __webpack_require__("../../../../../src/app/project/sample/sample.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExecuteComponent = (function () {
    function ExecuteComponent(router, sampleService, route, session, sampleComponent) {
        this.router = router;
        this.sampleService = sampleService;
        this.route = route;
        this.session = session;
        this.sampleComponent = sampleComponent;
    }
    ExecuteComponent.prototype.run = function () {
        var _this = this;
        this.sampleService.sampleInfo['input'] = this.sampleService.upload_directory + this.sampleService.sampleInfo['input'];
        this.sampleService.sampleInfo['barcode'] = this.sampleService.upload_directory + this.sampleService.sampleInfo['barcode'];
        this.sampleService.run(this.sampleService.sampleInfo)
            .subscribe(function (project) {
            _this.sampleComponent.activeIndex = 0;
            _this.router.navigate(['project/' + _this.sampleService.sampleInfo['projectID']]);
        });
    };
    ExecuteComponent.prototype.ngOnInit = function () {
    };
    ExecuteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/project/sample/execute/execute.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/sample/execute/execute.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__["a" /* SampleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__["a" /* SampleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__sample_component__["a" /* SampleComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__sample_component__["a" /* SampleComponent */]) === 'function' && _e) || Object])
    ], ExecuteComponent);
    return ExecuteComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/execute.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/metadata/metadata.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/sample/metadata/metadata.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"col-sm-8 col-sm-offset-2 panel panel-default\">\n    <!-- /.box-header -->\n    <div class=\"panel-body\">\n        <h4 class=\"text-center\"> Let's first start by adding some relevant information about your sample.</h4>\n        <form [formGroup]=\"newSampleForm\" (ngSubmit)=\"create()\">\n            <!-- text input -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!newSampleForm.controls['name'].valid && newSampleForm.controls['name'].touched}\">\n                <!--<label>Sample Name</label>-->\n                <input formControlName=\"name\" [formControl]=\"newSampleForm.controls['name']\" type=\"text\" class=\"form-control\" placeholder=\"Sample Name\">\n            </div>\n\n            <!-- select -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!newSampleForm.controls['primary-group'].valid && newSampleForm.controls['primary-group'].touched}\">\n                <!--<label>Primary Group</label>-->\n                <input formControlName=\"primary-group\" type=\"text\" class=\"form-control\" placeholder=\"Biome\">\n                <!--<select class=\"form-control\">\n                <option>Soil</option>\n                </select>-->\n            </div>\n\n            <!-- <div class=\"form-group\" [ngClass]=\"{'has-error':!newSampleForm.controls['secondary-group'].valid && newSampleForm.controls['secondary-group'].touched}\"> -->\n            <!--<label>Primary Group</label>-->\n            <!-- <input formControlName=\"secondary-group\" type=\"text\" class=\"form-control\" placeholder=\"\"> -->\n            <!--<select class=\"form-control\">\n                <option>Soil</option>\n                </select>-->\n            <!-- </div> -->\n\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!newSampleForm.controls['location'].valid && newSampleForm.controls['location'].touched}\">\n                <!--<label>Location</label>-->\n                <input formControlName=\"location\" type=\"text\" class=\"form-control\" placeholder=\"Location\">\n                <!--<select class=\"form-control\">\n                <option>Soil</option>\n                </select>-->\n            </div>\n\n            <!-- textarea -->\n            <div class=\"form-group\" [ngClass]=\"{'has-error':!newSampleForm.controls['description'].valid && newSampleForm.controls['description'].touched}\">\n                <!--<label>Comments about this sample</label>-->\n                <textarea formControlName=\"description\" #description class=\"form-control\" rows=\"3\" placeholder=\"Additional Comments\"></textarea>\n            </div>\n\n            <div class=\"box-footer\">\n                <button type=\"submit\" class=\"btn btn-primary btn-xs\" [disabled]=\"!newSampleForm.valid\">Save Metadata</button>\n                <button class=\"btn btn-warning btn-xs\">Clear Form</button>\n            </div>\n\n        </form>\n    </div>\n    <!-- /.box-body -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/sample/metadata/metadata.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetadataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_component__ = __webpack_require__("../../../../../src/app/project/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MetadataComponent = (function () {
    function MetadataComponent(router, sampleService, route, session, fb, sampleComponent, projectComponent) {
        var _this = this;
        this.router = router;
        this.sampleService = sampleService;
        this.route = route;
        this.session = session;
        this.fb = fb;
        this.sampleComponent = sampleComponent;
        this.projectComponent = projectComponent;
        this.formValid = false;
        this.newSampleForm = this.fb.group({
            'name': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            'primary-group': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            // 'secondary-group':[undefined, [Validators.required]],
            'location': [undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            'description': [undefined, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
        this.inputForm = this.fb.group({
            'inputFile': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
        this.barcodeForm = this.fb.group({
            'inputFile': [undefined, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
        });
        this.newSampleForm.valueChanges.subscribe(function () {
            _this.formValid = _this.newSampleForm.valid;
        });
        this.updateSampleForm = this.fb.group({});
        // console.log(this.route.snapshot.params['pid']);
        // console.log(this.route.snapshot.data['type']);
    }
    MetadataComponent.prototype.ngOnInit = function () {
    };
    MetadataComponent.prototype.create = function () {
        var _this = this;
        this.timestamp = new Date();
        this.fields = this.newSampleForm.value;
        this.fields['userID'] = this.session.get('user')['_id'];
        this.fields['timestamp'] = this.timestamp.getTime();
        this.fields['date'] = this.timestamp.toString();
        this.fields['projectID'] = this.projectComponent.projectID;
        this.fields['status'] = 'created';
        // console.log(this.fields)
        this.sampleService.create(this.fields)
            .subscribe(function (project) {
            _this.newSampleForm.reset();
            _this.fields = _this.sampleService.sampleInfo;
            _this.router.navigate(['project/' + _this.fields['projectID'] + '/add-sample/upload']);
            _this.sampleComponent.activeIndex = 1;
        });
    };
    MetadataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/project/sample/metadata/metadata.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/sample/metadata/metadata.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_sample_sample_service__["a" /* SampleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_sample_sample_service__["a" /* SampleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__sample_component__["a" /* SampleComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__sample_component__["a" /* SampleComponent */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__project_component__["a" /* ProjectComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__project_component__["a" /* ProjectComponent */]) === 'function' && _g) || Object])
    ], MetadataComponent);
    return MetadataComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/metadata.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/parameters/parameters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/sample/parameters/parameters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <br><br>\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"panel panel-default \">\n            <div class=\"panel-heading with-border\">\n                <h3 class=\"panel-title\">Parameters</h3>\n            </div>\n            <div class=\"panel-body\">\n\n              <p>Currently alignment, annotation and error correction parameters are not enabled for modification. Click <a>here</a> to see the default parameters used in this pipeline </p>\n              \n\n              <button (click)='goToExecute()' class=\"btn btn-default btn-sm pull-right\" ><strong>Next</strong></button>\n\n            </div>\n\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/project/sample/parameters/parameters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParametersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_component__ = __webpack_require__("../../../../../src/app/project/sample/sample.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParametersComponent = (function () {
    function ParametersComponent(router, sampleService, route, session, sampleComponent) {
        this.router = router;
        this.sampleService = sampleService;
        this.route = route;
        this.session = session;
        this.sampleComponent = sampleComponent;
    }
    ParametersComponent.prototype.ngOnInit = function () {
    };
    ParametersComponent.prototype.goToExecute = function () {
        this.sampleComponent.activeIndex = 3;
        this.router.navigate(['project/' + this.sampleService.sampleInfo['projectID'] + '/add-sample/execute']);
    };
    ParametersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-parameters',
            template: __webpack_require__("../../../../../src/app/project/sample/parameters/parameters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/sample/parameters/parameters.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__["a" /* SampleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_sample_sample_service__["a" /* SampleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__sample_component__["a" /* SampleComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__sample_component__["a" /* SampleComponent */]) === 'function' && _e) || Object])
    ], ParametersComponent);
    return ParametersComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/parameters.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/sample-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var routes = [];
var SampleRoutingModule = (function () {
    function SampleRoutingModule() {
    }
    SampleRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], SampleRoutingModule);
    return SampleRoutingModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/sample-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/sample.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-steps .ui-steps-item {\n    width: 25%;\n}\n\n.ui-steps.steps-custom {\n    margin-bottom: 5%;\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {\n    height: 1px;\n    /*padding: 0 1em;*/\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-steps-number {\n    font-size: 1.2em;\n    background-color: #0081c2;\n    color: #FFFFFF;\n    display: inline-block;\n    width: 15%;\n    border-radius: 50%;\n    /*margin-top: -14px;*/\n    /*margin-bottom: 1px;*/\n}\n\n.ui-steps.steps-custom .ui-steps-item .ui-steps-title {\n    color: #555555;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"box-header text-center\">\n</div>\n<div class=\"box-body\">\n    <p-steps [model]=\"items\" [(activeIndex)]=\"activeIndex\" styleClass=\"steps-custom\" [readonly]=\"true\"></p-steps>\n    <router-outlet></router-outlet>\n</div>\n<div class=\"box-footer\">\n    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/project/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SampleComponent = (function () {
    function SampleComponent(router, route, confirmationService, session) {
        this.router = router;
        this.route = route;
        this.confirmationService = confirmationService;
        this.session = session;
        this.msgs = [];
        this.activeIndex = 0;
    }
    SampleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = [{
                label: 'Insert Metadata',
                command: function (event) {
                    _this.activeIndex = 0;
                    _this.msgs.length = 0;
                }
            },
            {
                label: 'Upload Files',
                command: function (event) {
                    _this.activeIndex = 1;
                    _this.msgs.length = 0;
                }
            },
            {
                label: 'Setup Parameters',
                command: function (event) {
                    _this.activeIndex = 2;
                    _this.msgs.length = 0;
                    console.log('here in the two');
                }
            },
            {
                label: 'Execute',
                command: function (event) {
                    _this.activeIndex = 3;
                    _this.msgs.length = 0;
                }
            }
        ];
    };
    SampleComponent.prototype.ngOnDestroy = function () {
    };
    SampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/project/sample/sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/sample/sample.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmationService"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_session_service__["a" /* Session */]) === 'function' && _d) || Object])
    ], SampleComponent);
    return SampleComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/sample.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/sample.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_routing_module__ = __webpack_require__("../../../../../src/app/project/sample/sample-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sample_component__ = __webpack_require__("../../../../../src/app/project/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metadata_metadata_component__ = __webpack_require__("../../../../../src/app/project/sample/metadata/metadata.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__upload_upload_component__ = __webpack_require__("../../../../../src/app/project/sample/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__parameters_parameters_component__ = __webpack_require__("../../../../../src/app/project/sample/parameters/parameters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__execute_execute_component__ = __webpack_require__("../../../../../src/app/project/sample/execute/execute.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SampleModule = (function () {
    function SampleModule() {
    }
    SampleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__sample_routing_module__["a" /* SampleRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["FileUploadModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmationService"],
                __WEBPACK_IMPORTED_MODULE_10__services_sample_sample_service__["a" /* SampleService */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sample_component__["a" /* SampleComponent */], __WEBPACK_IMPORTED_MODULE_6__metadata_metadata_component__["a" /* MetadataComponent */], __WEBPACK_IMPORTED_MODULE_7__upload_upload_component__["a" /* UploadComponent */], __WEBPACK_IMPORTED_MODULE_8__parameters_parameters_component__["a" /* ParametersComponent */], __WEBPACK_IMPORTED_MODULE_9__execute_execute_component__["a" /* ExecuteComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SampleModule);
    return SampleModule;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/sample.module.js.map

/***/ }),

/***/ "../../../../../src/app/project/sample/upload/upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/sample/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n    <br><br>\n    <div class=\"col-md-9 col-md-offset-2\">\n        <div class=\"panel panel-default \">\n            <div class=\"panel-heading with-border\">\n                <h3 class=\"panel-title\">Sample Data</h3>\n            </div>\n            <div class=\"panel-body\">\n\n                <h3>Nanopore Raw Reads</h3>\n                <p>Please upload your nanopore sequence reads in fasta format. It can be 1D or 2D. You can generate the set of reads from your samples using <code>poretools</code> </p>\n\n                <p-fileUpload [name]=\"sampleService.sampleInfo['input']\" [url]=\"sampleService.upload_service\" multiple=\"multiple\" accept=\".fasta\" maxFileSize=\"10000000000\">\n                </p-fileUpload>\n\n                <!-- <h3>Barcodes</h3>\n                <p>Please upload your barcode sequences in fasta format. </p>\n                <p-fileUpload [name]=\"sampleService.sampleInfo['barcode']\" [url]=\"sampleService.upload_service\" multiple=\"multiple\" accept=\".fasta\" maxFileSize=\"10000000000\">\n                </p-fileUpload>\n                <br> -->\n\n                <button (click)='goToParameters()' class=\"btn btn-default btn-sm pull-right\"><strong>Next</strong></button>\n\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/sample/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_component__ = __webpack_require__("../../../../../src/app/project/sample/sample.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadComponent = (function () {
    function UploadComponent(router, sampleService, route, session, fb, sampleComponent) {
        this.router = router;
        this.sampleService = sampleService;
        this.route = route;
        this.session = session;
        this.fb = fb;
        this.sampleComponent = sampleComponent;
        this.uploadedFiles = [];
        this.sampleService.sampleInfo['input'] = this.sampleService.sampleInfo['timestamp'] + '_rawreads.fasta';
        this.sampleService.sampleInfo['barcode'] = this.sampleService.sampleInfo['timestamp'] + '_barcodes.fasta';
    }
    UploadComponent.prototype.goToParameters = function () {
        this.sampleComponent.activeIndex = 2;
        this.router.navigate(['project/' + this.sampleService.sampleInfo['projectID'] + '/add-sample/parameters']);
    };
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/project/sample/upload/upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/sample/upload/upload.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_sample_sample_service__["a" /* SampleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_sample_sample_service__["a" /* SampleService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__sample_component__["a" /* SampleComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__sample_component__["a" /* SampleComponent */]) === 'function' && _f) || Object])
    ], UploadComponent);
    return UploadComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/EventDrops.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDrops; });
var d3 = __webpack_require__("../../../../d3/build/d3.node.js");
var eventDrops = __webpack_require__("../../../../event-drops/dist/index.js");
var chart = eventDrops({ d3: d3 });
var numberCommitsContainer = document.getElementById('numberCommits');
var zoomStart = document.getElementById('zoomStart');
var zoomEnd = document.getElementById('zoomEnd');
var EventDrops = (function () {
    function EventDrops() {
    }
    EventDrops.prototype.parse_data = function (data, origin) {
        // console.log(data);
        var mydata = [];
        data.data.forEach(function (e) {
            for (var i = e.start; i <= e.end; i += 10) {
                if (e.origin === origin) {
                    mydata.push({ date: i, message: e.metadata[4], coverage: e.coverage, color: e.color, start: e.start, end: e.end, iden: e.identity, evalue: e.evalue, metadata: e.metadata, strand: e.strand, index: i, author: { name: 'ARGs', email: 'some' } });
                }
            }
        });
        return mydata;
    };
    EventDrops.prototype.render = function (data) {
        var arg_reads = this.parse_data(data, 1);
        var arg_data = { name: "ARGs", data: arg_reads }; // ARGs
        var mges_reads = this.parse_data(data, 2);
        var mges_data = { name: "MGEs", data: mges_reads }; // ARGs
        var mrgs_reads = this.parse_data(data, 4);
        var mrgs_data = { name: "MRGs", data: mrgs_reads }; // ARGs
        var other_reads = this.parse_data(data, 3);
        var other_data = { name: "UniRef-90", data: other_reads }; // ARGs
        var c_data = [arg_data, mges_data, mrgs_data, other_data];
        var updateCommitsInformation = function (chart) {
        };
        var tooltip = d3
            .select('body')
            .append('div')
            .classed('tooltip', true)
            .style('opacity', 0);
        var chart = eventDrops({
            d3: d3,
            bound: {
                format: d3.timeFormat(''),
            },
            metaballs: {
                blurDeviation: 2,
                colorMatrix: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10',
            },
            axis: {
                formats: {
                    milliseconds: '',
                    seconds: '',
                    minutes: '',
                    hours: '',
                    days: '',
                    weeks: '',
                    months: '',
                    year: '',
                },
            },
            zoom: {
                onZoomEnd: function () { return updateCommitsInformation(chart); },
            },
            drop: {
                radius: 4,
                color: function (d) { return d.color; },
                date: function (d) { return new Date(d.date); },
                onMouseOver: function (commit) {
                    tooltip
                        .transition()
                        .duration(200)
                        .style('opacity', 1);
                    tooltip
                        .html("\n                            <div class=\"box box-solid\">\n                            <div class=\"box-body\">\n                            <hp><strong>Gene: </strong>" + commit.metadata[4] + "</hp>\n                            <p>" + commit.metadata[3] + "</p>                            \n                            <p><strong>Position</strong>: " + commit.start + " - " + commit.end + "</p>\n                            <p><strong>Identity</strong>: " + commit.iden + "</p>\n                            <p><strong>Coverage</strong>: " + commit.coverage + "</p>\n                            <p><strong>e-value</strong>: " + commit.evalue + "</p>\n                            <p><strong>Strand</strong>: " + commit.strand + " </p>\n                            </div>\n                            </div>\n                        ")
                        .style('left', (d3.event.pageX - 30) + "px")
                        .style('top', (d3.event.pageY + 20) + "px");
                },
                onMouseOut: function () {
                    tooltip
                        .transition()
                        .duration(500)
                        .style('opacity', 0);
                },
            },
            range: {
                start: 0,
                end: data.read[0].len
            },
            label: {
                padding: 0,
                text: function (d) { return ("" + d.name); },
                width: 150,
            },
            line: {
                color: function (_, index) { return d3.schemeCategory10[index]; },
                height: 40,
            },
        });
        d3.select('#gene_organization')
            .data([c_data])
            .call(chart);
        updateCommitsInformation(chart);
    };
    return EventDrops;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/EventDrops.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/Gmap.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Genome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circos_dist_circos_js__ = __webpack_require__("../../../../circos/dist/circos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circos_dist_circos_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_circos_dist_circos_js__);

var Genome = (function () {
    function Genome() {
        this.width = 600;
        this.height = 400;
        this.conf1 = {
            innerRadius: (this.height / 2.8) - 1,
            outerRadius: this.height / 2.8,
            cornerRadius: 5,
            color: 'rgba(200,0,0,0.5)',
            gap: 0.0,
            labels: {
                display: false,
                position: 'center',
                size: '1px',
                color: 'rgba(200,0,0,0.5)',
                radialOffset: 0,
            },
            ticks: {
                display: true,
                color: 'rgba(0,0,0,0.5)',
                spacing: 5000,
                labels: true,
                labelSpacing: 1,
                labelSuffix: 'k',
                labelDenominator: 1000,
                labelDisplay0: true,
                labelSize: '4em',
                labelColor: 'rgba(10,30,20,0.8)',
                //   labelFont: '"Lato", sans-serif',
                majorSpacing: 1,
                size: {
                    minor: 2,
                    major: 5,
                }
            },
            events: {}
        };
        this.origin_1 = {
            innerRadius: (this.height / 3) - 15,
            outerRadius: this.height / 3,
            min: null,
            max: null,
            color: function (d) { return d.color; },
            strokeColor: function (d) { return 'black'; },
            strokeWidth: function (d) { return d.stroke_width; },
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 1) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function (d) { return d.value; },
            events: {}
        };
        this.origin_2 = {
            innerRadius: (this.height / 3.7) - 15,
            outerRadius: this.height / 3.7,
            min: null,
            max: null,
            color: function (d) { return d.color; },
            strokeColor: function (d) { return 'black'; },
            strokeWidth: function (d) { return d.stroke_width; },
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 4) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function (d) { return d.value; },
            events: {}
        };
        this.origin_3 = {
            innerRadius: (this.height / 5) - 15,
            outerRadius: this.height / 5,
            min: null,
            max: null,
            color: function (d) { return d.color; },
            strokeColor: function (d) { return 'black'; },
            strokeWidth: function (d) { return d.stroke_width; },
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 3) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function (d) { return d.value; },
            events: {}
        };
        this.origin_4 = {
            innerRadius: (this.height / 6.7) - 15,
            outerRadius: this.height / 6.7,
            min: null,
            max: null,
            color: function (d) { return d.color; },
            strokeColor: function (d) { return 'black'; },
            strokeWidth: function (d) { return d.stroke_width; },
            opacity: 0.7,
            // opacity: function(d) { if (d.origin === 4) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function (d) { return d.value; },
            events: {}
        };
    }
    Genome.prototype.render = function (container, read, data) {
        this.read = read;
        this.data = data;
        this.circos = new Circos({
            container: container,
            width: this.width,
            height: this.height
        });
        var d1 = this.data.reduce(function (init, current) { if (current.origin === 1) {
            init.push(current);
        } return init; }, []);
        var d2 = this.data.reduce(function (init, current) { if (current.origin === 2) {
            init.push(current);
        } return init; }, []);
        var d3 = this.data.reduce(function (init, current) { if (current.origin === 3) {
            init.push(current);
        } return init; }, []);
        var d4 = this.data.reduce(function (init, current) { if (current.origin === 4) {
            init.push(current);
        } return init; }, []);
        // console.log(d1)
        d1.forEach(function (e) {
            e.value = e.metadata[4];
        });
        this.circos.layout(this.read, this.conf1);
        this.circos.highlight('ARGs', d1, this.origin_1);
        this.circos.highlight('MRGs', d4, this.origin_2);
        this.circos.highlight('MGEs', d2, this.origin_3);
        this.circos.highlight('Others', d3, this.origin_4);
        this.circos.text('ARGs_text', d1, this.origin_1);
        this.circos.render();
    };
    ;
    Genome.prototype.compare = function (a, b) {
        if (a.data < b.data) {
            return 1;
        }
        ;
        if (a.data > b.data) {
            return -1;
        }
        ;
        return 0;
    };
    /**
//  * Get histogram data out of xy data
//  * @param   {Array} data  Array of tuples [x, y]
//  * @param   {Number} step Resolution for the histogram
//  * @returns {Array}       Histogram data
//  */
    Genome.prototype.histogram = function (data, step) {
        var histo = {}, x, i, arr = [];
        // Group down
        for (i = 0; i < data.length; i++) {
            x = Math.floor(data[i][0] / step) * step;
            if (!histo[x]) {
                histo[x] = 0;
            }
            histo[x]++;
        }
        // Make the histo group into an array
        for (x in histo) {
            if (histo.hasOwnProperty((x))) {
                arr.push([parseFloat(x), histo[x]]);
            }
        }
        // Finally, sort the array
        arr.sort(function (a, b) {
            return a[0] - b[0];
        });
        // console.log(arr);
        return arr;
    };
    Genome.prototype.genes_distribution = function (data, origin, section, colors) {
        // option reffers to the type ARGs, MGEs or others, section reffers to the index in the metadata
        // data are the nodes from the network that contains the necesary information
        var dgenes = [];
        data.nodes.forEach(function (e) {
            if (e.data.origin === origin) {
                dgenes[e.data.metadata[section]] = { data: 0, name: e.data.metadata[section], color: e.data.color };
            }
        });
        data.nodes.forEach(function (e) {
            if (e.data.origin === origin) {
                try {
                    dgenes[e.data.metadata[section]].data += e.data.size;
                }
                catch (error) {
                    dgenes[e.data.metadata[section]].data = e.data.size;
                }
            }
        });
        var genes = Object.keys(dgenes).map(function (e) {
            return dgenes[e];
        });
        genes.sort(this.compare);
        var labels = genes.map(function (i, ix) { return i.name; });
        // const xdata = genes.map((i, ix) => { return i.data; });
        // console.log(xdata.map(e => {
        //     return {y: e.data, color: e.color}
        // }))
        return {
            chart: {
                borderColor: '#000000',
                borderWidith: 1,
                type: 'bar',
                height: genes.length * 15 + 120,
                position: 'absolute',
                width: null
            },
            title: {
                text: null
            },
            series: [{
                    data: genes.map(function (e) {
                        return { y: e.data, color: e.color };
                    })
                }],
            legend: {
                enabled: false,
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
            },
            plotOptions: {
                series: {
                    colorByPoint: true,
                    groupPadding: 0,
                    stacking: 'normal',
                    borderColor: '#000',
                    borderWidth: 1
                }
            },
            xAxis: {
                categories: labels,
                labels: {
                    style: {
                        color: '#000'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Number of reads'
                },
                min: 0,
                startOnTick: true,
                minorGridLineWidth: 1,
                majorGridLineWidth: 1,
                gridLineWidth: 1,
                labels: {
                    enabled: true
                },
                tickWidth: 1
            },
            credits: {
                enabled: false
            },
        };
    };
    Genome.prototype.length_distribution = function (data) {
        return {
            title: { text: null },
            chart: {
                type: 'column',
                width: null,
                height: 300,
            },
            xAxis: {
                categories: data[1],
                labels: {
                    format: '{value} k'
                }
            },
            series: [{
                    name: 'Read-length',
                    type: 'column',
                    data: data[0],
                    pointPadding: 0,
                    groupPadding: 0,
                    pointPlacement: 'between'
                }],
            plotOptions: {
                series: {
                    dataLabels: {
                        enabled: false,
                    },
                    colorByPoint: false,
                    groupPadding: 0,
                    stacking: 'normal',
                    borderColor: '#000',
                    borderWidth: 1
                }
            },
            credits: {
                enabled: false
            },
        };
    };
    ;
    return Genome;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/Gmap.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/OverallStats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stats; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chords__ = __webpack_require__("../../../../../src/app/project/view-samples/chords.ts");

var Stats = (function () {
    function Stats() {
        this.chords = new __WEBPACK_IMPORTED_MODULE_0__chords__["a" /* Chords */]();
    }
    Stats.prototype.overall_abundances = function (data) {
        var kind = this.chords.kind;
        var main_layout = {};
        // console.log(data)
        data.nodes.forEach(function (e) {
            // if(e.data.origin < 9) {
            var key = kind[e.data.origin];
            main_layout[key] = {
                counts: 0,
                color: e.data.color,
                label: key,
                id: key
            };
            // }
        });
        data.nodes.forEach(function (e) { main_layout[kind[e.data.origin]].counts += e.data.size; });
        return main_layout;
    };
    return Stats;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/OverallStats.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/chords.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chords; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circos_dist_circos_js__ = __webpack_require__("../../../../circos/dist/circos.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_circos_dist_circos_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_circos_dist_circos_js__);

var Chords = (function () {
    function Chords() {
        this.width = 600;
        this.height = 600;
        this.kind = {
            1: 'ARGs',
            2: 'MGEs',
            3: 'UniRef',
            4: 'MRGs',
            9: 'Pathogens',
            10: 'Bacteria'
        };
        this.conf1 = {
            innerRadius: (this.height / 2.8) - 2,
            outerRadius: this.height / 2.8,
            cornerRadius: 10,
            color: 'rgba(0,0,0,1)',
            gap: 0.04,
            labels: {
                display: true,
                position: 'center',
                size: '1px',
                color: 'rgba(0,0,0,1)',
                radialOffset: 20,
            },
            ticks: {
                display: false,
                color: 'rgba(0,0,0,0.5)',
                spacing: 5000,
                labels: true,
                labelSpacing: 1,
                labelSuffix: 'k',
                labelDenominator: 1000,
                labelDisplay0: true,
                labelSize: '4em',
                labelColor: 'rgba(10,30,20,0.8)',
                //   labelFont: '"Lato", sans-serif',
                majorSpacing: 1,
                size: {
                    minor: 2,
                    major: 5,
                }
            },
            events: {}
        };
        this.origin_1 = {
            innerRadius: (this.height / 3) - 15,
            outerRadius: this.height / 3,
            min: null,
            max: null,
            color: function (d) { return d.color; },
            strokeColor: function (d) { return 'black'; },
            strokeWidth: function (d) { return d.stroke_width; },
            // opacity: function(d) { if (d.origin === 1) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function (d) { return d.value; },
            events: {}
        };
        this.origin_2 = {
            radius: (this.height / 3) - 15,
            color: function (d) { return (d.target.id === "ARGs") ? d.target.color : d.source.color; },
            strokeColor: function (d) { return 'black'; },
            strokeWidth: function (d) { return 1; },
            opacity: function (d) { return ((d.source.id === "ARGs" || d.target.id == "ARGs") && (d.source.id === 'ARGs' || d.source.id !== "Bacteria") && (d.target.id === "ARGs" || d.target !== "Bacteria")) ? 0.6 : 0.2; },
            // opacity: function(d) { if (d.origin === 4) { return d.opacity; }else { return 0; }},
            logScale: false,
            tooltipContent: function (d) {
                return d.source.name + " to " + d.target.name;
            },
            events: {
                'click': function (d, i, n, event) {
                    // d['color'] = 'black'
                }
            }
        };
    }
    Chords.prototype.sort_color_nodes = function (a, b) {
        if (a.color < b.color) {
            return 1;
        }
        ;
        if (a.color > b.color) {
            return -1;
        }
        ;
        return 0;
    };
    Chords.prototype.subtract_nodes = function (nodes, kind, origin) {
        var d1 = nodes.reduce(function (init, current) { if (current.data.origin === origin) {
            init.push(current.data);
        } return init; }, []).sort(this.sort_color_nodes); // Get ARGs
        var pos = 0;
        d1.forEach(function (e) {
            e.block_id = kind[e.origin];
            e.value = e.id;
            e.start = pos;
            e.end = pos + 1;
            pos += 1;
        });
        return d1;
    };
    Chords.prototype.render = function (container, data) {
        this.circos = new Circos({
            container: container,
            width: this.width,
            height: this.height
        });
        var kind = this.kind;
        // console.log(data)
        var nodes = data.nodes;
        var edges = data.edges;
        // main layout with the 
        var main_layout = {};
        nodes.forEach(function (e) {
            // if(e.data.origin < 9) {
            var key = kind[e.data.origin];
            main_layout[key] = {
                len: 0,
                color: e.data.color,
                label: key,
                id: key
            };
            // }
        });
        nodes.forEach(function (e) { main_layout[kind[e.data.origin]].len += 1; });
        var d1 = this.subtract_nodes(nodes, kind, 1); //1-ARGs
        var d2 = this.subtract_nodes(nodes, kind, 2); //2-MGEs
        var d3 = this.subtract_nodes(nodes, kind, 4); //4-MRGs
        // var d4 = this.subtract_nodes(nodes, kind, 9); //9-PATH
        // var d5 = this.subtract_nodes(nodes, kind, 10); //10-BAC
        // remove bacteria and pathogens
        delete main_layout['Pathogens'];
        delete main_layout['Bacteria'];
        var circos_nodes = d1.concat(d2).concat(d3); //.concat(d4).concat(d5)
        // main_layout['MGEs'].color = 'red'
        var layout_data = Object.keys(main_layout).map(function (e) { return main_layout[e]; });
        // console.log(circos_nodes);
        // create a dict with the info from the nodes, this is useful when parsing the edges, so I can get right away the data from each node.
        var circos_nodes_dict = {};
        circos_nodes.forEach(function (e) {
            circos_nodes_dict[e.id] = e;
        });
        // console.log(circos_nodes_dict, edges)
        // traverse the edges
        var _chords = [];
        // const min_counts = 2;
        edges.forEach(function (e) {
            if (e.data.source_origin < 9 || e.data.target_origin < 9) {
                var color = circos_nodes_dict[e.data.source].color;
                // if(color === 'white') color='red'
                if (circos_nodes_dict[e.data.source].block_id === 'ARGs' || circos_nodes_dict[e.data.target].block_id === 'ARGs') {
                    _chords.push({
                        color: color,
                        source: {
                            id: circos_nodes_dict[e.data.source].block_id,
                            start: circos_nodes_dict[e.data.source].start,
                            end: circos_nodes_dict[e.data.source].end,
                            color: circos_nodes_dict[e.data.source].color,
                            name: circos_nodes_dict[e.data.source].id
                        },
                        target: {
                            id: circos_nodes_dict[e.data.target].block_id,
                            start: circos_nodes_dict[e.data.target].start,
                            end: circos_nodes_dict[e.data.target].end,
                            color: circos_nodes_dict[e.data.target].color,
                            name: circos_nodes_dict[e.data.target].id
                        }
                    });
                }
            }
        });
        // console.log(_chords);
        this.circos.layout(layout_data, this.conf1);
        this.circos.chords('chords', _chords, this.origin_2);
        this.circos.highlight('ARGs', circos_nodes, this.origin_1);
        this.circos.render();
    };
    ;
    return Chords;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/chords.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/network.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Network; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cytoscape_dist_cytoscape_js__ = __webpack_require__("../../../../cytoscape/dist/cytoscape.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cytoscape_dist_cytoscape_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cytoscape_dist_cytoscape_js__);

var Network = (function () {
    function Network() {
    }
    Network.prototype.render = function (placeholder, data) {
        var _max = 0;
        var _min = 9999999999999;
        var nodes = [];
        data.nodes.forEach(function (e) {
            e.data.counts = e.data.size;
            e.data.size = Math.log(e.data.size + 1);
            if (e.data.size < _min) {
                _min = e.data.size;
            }
            if (e.data.size > _max) {
                _max = e.data.size;
            }
            if (e.data.origin < 9 && e.data.counts >= 1) {
                nodes.push(e);
            }
        });
        var _emax = 0;
        var _emin = 999999999999;
        var edges = [];
        data.edges.forEach(function (e) {
            e.data.counts = e.data.weight;
            e.data.weight = Math.log(e.data.weight + 1);
            if (e.data.weight < _emin) {
                _emin = e.data.weight;
            }
            if (e.data.weight > _emax) {
                _emax = e.data.weight;
            }
            if ((e.data.source_origin < 9 || e.data.target_origin < 9) && e.data.counts >= 1) {
                edges.push(e);
            }
        });
        var mydata = { nodes: nodes, edges: edges };
        // console.log(mydata)
        this.network = new cytoscape({
            container: document.getElementById(placeholder),
            elements: mydata,
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': function (e) {
                            if (e.data("origin") === 9) {
                                return "red";
                            }
                            else {
                                if (e.data("origin") === 10) {
                                    return "yellow";
                                }
                                else {
                                    return e.data('color');
                                }
                            }
                        },
                        'background-opacity': 1,
                        'border-color': '#000',
                        'border-width': 1,
                        'label': 'data(id)',
                        'font-size': 20,
                        'font-family': '"Lato", sans-serif',
                        'shape': function (e) { if (e.data("origin") >= 9) {
                            return "star";
                        }
                        else {
                            return "ellipse";
                        } },
                        'padding': '30%',
                        'height': 'mapData(size, ' + _min + ', ' + _max + ', 20, 50)',
                        'width': 'mapData(size, ' + _min + ', ' + _max + ', 20, 50)'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 'mapData(weight, ' + _emin + ', ' + _emax + ', 1, 30)',
                        'curve-style': 'unbundled-bezier',
                        'line-style': 'solid',
                        'line-color': '#b8c1db',
                        // 'edge-distances': 'control-point-weight',
                        'opacity': 0.5,
                    }
                },
            ],
            layout: {
                name: 'concentric',
                fit: true,
                circle: false,
                directed: true,
                avoidOverlap: true,
                animate: false,
                componentSpacing: 40,
                nodeRepulsion: function (node) { return 120000 * node.data('size'); },
                nodeOverlap: 200,
                padding: 100
            },
            zoom: 0,
            minZoom: 0.4,
            maxZoom: 10,
            zoomingEnabled: true,
            boxSelectionEnabled: true,
            motionBlur: true,
            motionBlurOpacity: 0.1,
        });
    };
    return Network;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/network.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/taxonomy.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxonomyVisualization; });
var TaxonomyVisualization = (function () {
    function TaxonomyVisualization() {
    }
    TaxonomyVisualization.prototype.compare = function (a, b) {
        var field = 'num_reads';
        if (a[field] < b[field]) {
            return 1;
        }
        ;
        if (a[field] > b[field]) {
            return -1;
        }
        ;
        return 0;
    };
    TaxonomyVisualization.prototype.render = function (data, tax_rank) {
        var xdata = [];
        data.sort(this.compare);
        data.forEach(function (element, index) {
            if (element.tax_rank === tax_rank) {
                xdata.push({
                    name: element.name,
                    y: element.num_reads
                });
            }
        });
        xdata = xdata.slice(0, 15);
        // console.log(xdata);
        return {
            chart: {
                borderColor: '#000000',
                borderWidith: 1,
                type: 'bar',
                height: '100%',
            },
            title: {
                text: null
            },
            series: [{
                    data: xdata
                }],
            legend: {
                enabled: false,
                align: 'right',
                verticalAlign: 'top',
                layout: 'vertical',
            },
            plotOptions: {
                series: {
                    colorByPoint: true,
                    groupPadding: 0,
                    stacking: 'normal',
                    borderColor: '#000',
                    borderWidth: 1
                }
            },
            xAxis: {
                categories: xdata.map(function (res) { return res.name; }),
                labels: {
                    style: {
                        color: '#000'
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Number of reads'
                },
                min: 0,
                startOnTick: true,
                minorGridLineWidth: 1,
                majorGridLineWidth: 1,
                gridLineWidth: 1,
                labels: {
                    enabled: true
                },
                tickWidth: 1
            },
            credits: {
                enabled: false
            },
        };
    };
    ;
    return TaxonomyVisualization;
}());
;
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/taxonomy.js.map

/***/ }),

/***/ "../../../../../src/app/project/view-samples/view-samples.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".network-parent {\n    height: 600px;\n    display: block;\n}\n\n#network {\n    width: 100%;\n    height: 600px;\n    display: block;\n}\n\n#network_labels {\n    width: 100%;\n    height: 100px;\n    display: block;\n}\n\n#read_circle_map-1 {\n    width: 30%;\n    /* height: 300px; */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/view-samples/view-samples.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n\n<div style=\"text-align:center\">\n    <p-dataTable #dt [value]=\"sampleService.samplesByProject\" [rows]=\"5\" [paginator]=\"true\" [pageLinks]=\"3\" exportFilename=\"metadata\">\n        <!-- <p-header> -->\n        <!-- <h4>Samples</h4> -->\n        <!-- <div class=\"ui-helper-clearfix\">\n                <button class='btn btn-xs btn-default' type=\"button\" label=\"metadata.csv\" (click)=\"dt.exportCSV()\" style=\"float:left\"><i class=\"fa fa-download\"></i> <strong>Metadata</strong></button>\n                <button class='btn btn-xs btn-default' type=\"button\" label=\"type.csv\" (click)=\"download_type('type_csv')\" style=\"float:left\"><i class=\"fa fa-download\"></i> <strong>ARG categories</strong></button>\n                <button class='btn btn-xs btn-default' type=\"button\" label=\"type.csv\" (click)=\"download_type('subtype_csv')\" style=\"float:left\"><i class=\"fa fa-download\"></i> <strong>ARG Groups</strong></button>\n            </div> -->\n\n        <!-- </p-header> -->\n        <p-column field='name' header='Sample Name'></p-column>\n        <p-column field='primary-group' header='Biome'></p-column>\n        <!-- <p-column field='secondary-group' header='Secondary Group'></p-column> -->\n        <!-- <p-column field='date' header='Createion Date'></p-column> -->\n        <p-column field='status' header='Status'></p-column>\n\n        <p-column header=\"Actions\" styleClass=\"\">\n            <template let-sample=\"rowData\" pTemplate=\"body\">\n                <a class=\" badge bg-red \" (click)=\"removeSample(sample)\"   > Remove</a>\n                <a class=\" badge bg-blue \" (click)=\"rerun(sample)\"   >Run</a>\n                <a class=\" badge bg-black\" (click)=\"view(sample)\"   >View</a>\n                <!-- <a class=\"   bg-green\" (click)=\"edit(sample)\" pButton icon=\"fa-pencil\" ></a> -->\n            </template>\n        </p-column>\n\n        <!--<p-column styleClass=\"col-button\">\n            <template let-sample=\"rowData\" pTemplate=\"body\">\n                <button type=\"text\" (click)=\"reRun(sample)\" pButton icon=\"fa-play\" label=\"Run\"></button>\n            </template>\n        </p-column>-->\n\n    </p-dataTable>\n\n    <hr>\n\n    <p-growl [value]=\"msgs\"></p-growl>\n    <p-confirmDialog header=\"Confirmation\" icon=\"fa fa-question-circle\" width=\"425\"></p-confirmDialog>\n\n\n\n</div>\n\n\n\n\n<div class=\"box box-solid\">\n    <!-- <div class=\"box-header\"> -->\n    <!-- <h3>Results</h3> -->\n    <!-- </div> -->\n    <div class=\"box-header\">\n        <h1> <i class=\"fa fa-cubes\"></i> {{ selected_sample.name }} </h1>\n    </div>\n    <div class=\"box-body\">\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <p>This section shows the primary statistics of the sample <span class=\"badge bg-blue\"> {{ selected_sample.name }} </span> <strong> ( {{selected_sample._id}} ) </strong> including read length distribution of the reads that contain at least\n                    one ARG and any other functional genes including: MGEs, MRG. Additionaly, taxonomy annotation is provided for each one of the reads in the sample.</p>\n                <br><br>\n\n                <div class=\"col-md-4 bg-blue\">\n                    <h3>Read length distribution</h3>\n                    <p class=\"small\">This graph shows the distribution of the read length that contains at least one ARG. The length is represented in kilo basepairs. each position represents the number of sequences withing a length 1000kbp range. The data used in this\n                        graph corresponds to the reads that contain at least one ARG.</p>\n                </div>\n                <div class=\"col-md-8 col-md-offset-0 text-center\">\n                    <chart class=\"col-md-12\" [options]=\"line_chart\"></chart>\n                </div>\n            </div>\n            <div class=\"col-md-12\">\n                <hr>\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"col-md-4 bg-green\">\n                    <h3>Antibiotic resistance hits distribution</h3>\n                    <h4>({{ general_info.ARGs.counts }} Hits)</h4>\n                    <p class=\"small\">\n                        ARGs are computed using our <strong> newly </strong> developed deepARG: a deep learning approach to predict antibiotic resistance genes in metagenomes <a class=\"badge bg-black\" href=\"https://microbiomejournal.biomedcentral.com/articles/10.1186/s40168-018-0401-z\">(Arango-Argoty et., al.)</a>.\n                        Because of the high error rate of nanopore reads, the deepARG-LS v1.0 was run with permisive identity parameters (<strong> --iden 30 --cov 80 --evalue 1e-10 --prob 0.8 </strong>) to guarantee the correctness of the classifications.\n                    </p>\n                </div>\n                <div class=\"col-md-4 text-center\">\n                    <!-- <h5>Antibiotic Resistance Genes distribution</h5> -->\n                    <chart class=\"col-md-12\" [options]=\"args_distribution_chart\"></chart>\n                </div>\n                <div class=\"col-md-4 text-center\">\n                    <!-- <h5>Antibiotic categories distribution</h5> -->\n                    <chart class=\"col-md-12\" [options]=\"antibiotic_distribution_chart\"></chart>\n                </div>\n                <div class=\"col-md-12\">\n                    <hr>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-12\">\n            <div class=\"col-md-4 bg-blue\">\n                <h3>Distribution of Mobile Genetic Elements (MGEs)</h3>\n                <h4>({{ general_info.MGEs.counts }} Hits)</h4>\n                <p class=\"small\">\n                    Annotations were classfied as mobile genetic elements (MGEs) based on matching metadata from protein sequences to one of the following keywords: transposase, transposon, conjugative, integrase, integron, recombinase, conjugal, mobilization, recombination,\n                    plasmid (\n                    <a class=\"badge bg-black\" href=\"https://www.nature.com/articles/nature13377\">Forsberg et., al</a>). Protein sequences that matched those keywords were retrieved from the National Center for Biotechnology Information <a class=\"badge bg-black\"\n                        href=\"\">NCBI</a>. Then, sequences with an identity greater than 90% were clustered and the centroid sequence was substracted using <a class=\"badge bg-black\" href=\"\">CD-HIT</a>. Nanopore reads are then screened against this customized\n                    set of MGEs using diamond with parameters (<strong> --evalue 1e-10 --id 30 --coverage 80 </strong>).\n                </p>\n            </div>\n\n\n            <div class=\"col-md-8 text-center\">\n                <chart class=\"col-md-12\" [options]=\"mges_distribution_chart\"></chart>\n            </div>\n\n            <div class=\"col-md-12\">\n                <hr>\n            </div>\n        </div>\n        <div class=\"col-md-12\">\n            <div class=\"col-md-4 bg-black\">\n                <h3>Distribution of Metal Resistance Genes (MRGs)</h3>\n                <h4>({{ general_info.MRGs.counts }} Hits)</h4>\n                <p class=\"small\">\n                    Metal Resistane Genes (MRG) were downloaded from the <a class=\"badge bg-black\" href=\"http://bacmet.biomedicine.gu.se/\">BacMet v1.0</a> database (<a class=\"badge bg-black\" href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3965030/\">Pal. et., al</a>)\n                    and screened agains the nanopore reads using DIAMOND with parameters <strong> --evalue 1e-10 --id 30 --coverage 80 </strong>.\n\n                </p>\n            </div>\n\n            <div class=\"col-md-6 text-center\">\n                <chart class=\"col-md-12\" [options]=\"metal_distribution_chart\"></chart>\n            </div>\n        </div>\n    </div>\n\n</div>\n\n\n\n\n\n\n<div class=\"box box-solid\">\n    <div class=\"box-header\">\n        <h3>ARGs, MGEs, MRGs patterns</h3>\n        <p class=\"small\">This section shows a linear representation of the nanopore reads with the detected ARGs and neighboring genes. It can help to identify common ARG patterns (the visualization contains only reads with antibiotic resistance genes). <a href=\"\"> UniRef90</a>            was used to screen the nanopore to a broad set of functional genes using <a href=\"\">diamond</a> with parameters <code> --evalue 1e-10 --id 30 --coverage 80 </code>. By using this set of functional genes, it is possible to identify the components\n            of each nanopore read. The order of the inner circles indicates: ARGS, MRGs, MGEs, and other functional genes.\n        </p>\n    </div>\n    <div class=\"box-body\">\n\n        <!-- read circular mapping -->\n        <div class=\"col-md-8 col-md-offset-2\">\n            <div class=\"text-center\" style=\"border-style: solid; border-width: 1px; border-color:rgba(0,0,0,0.1)\">\n                <h4> <strong> {{ selected_read.id }} </strong></h4>\n                <h5> <strong> (<i>{{ selected_read.taxa_rank }}</i> {{ selected_read.taxa }}) </strong> </h5>\n                <!-- <div class=\"d-inline\" id=\"read_circle_map-1\"></div> -->\n                <div id=\"gene_organization\" style=\"width: 90%;\"></div>\n                <!-- <div class=\"d-inline\" id=\"read_circle_map-2\"></div> -->\n            </div>\n\n        </div>\n\n        <div class=\"col-md-12 text-center\">\n            <br>\n            <p-dataTable #reads_table_vis [value]=\"reads_table\" [rows]=\"5\" [paginator]=\"true\" [pageLinks]=\"5\" exportFilename=\"reads\">\n                <p-column field='id' header='Read'>\n\n                    <template let-column_data=\"rowData\" pTemplate=\"body\">\n                            <a class=\"small\" (click)=\"render_read_circular_map(column_data)\" > {{ column_data.id }}  </a>\n                        </template>\n\n                </p-column>\n\n                <p-column field='len' header='Read Length'></p-column>\n                <p-column field='genes' header='Genes'></p-column>\n                <p-column field='args' header='ARGs'></p-column>\n                <p-column field='mges' header='MGEs'></p-column>\n                <p-column field='mrgs' header='MRGs'></p-column>\n\n            </p-dataTable>\n        </div>\n\n    </div>\n</div>\n\n<!-- <div class=\"col-md-12 col-md-offset-0\"> -->\n<div class=\"\">\n    <!-- <div class=\"box-header\">\n        \n    </div> -->\n\n    <div class=\"box box-solid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"col-md-12\">\n                    <h3>Co-occurrence of MGEs, ARGs and MRGs</h3>\n                    <p class=\"\">\n                        This visualization shows the ARGs, MGEs and MRGs patterns in the sample. Nodes (genes) are connected in the network as long as they are place within the same nanopore read. Node size represent the number of genes, shape represents the different groups\n                        (MGEs, ARGs, MRGs), colors represents the different category, e.g., antibiotic resistance genes. The thickness of the edges represent the extent of the pair is found in the sample.\n                    </p>\n                    <p class=\"small\">\n                        Nodes with star shape represent different species. Note that red star nodes represent antibiotic ressistance \"priority pathogens\" defined by the World Health Organization (WHO) (<a href=\"http://www.who.int/mediacentre/news/releases/2017/bacteria-antibiotics-needed/en/\">see details here</a>)\n                        and the ESKAPE pathogens (<a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4871955/\">Santajit., et al</a>)\n                    </p>\n                </div>\n                <div class=\"col-md-6\">\n                    <div id=\"network\"></div>\n                    <div class=\"text-center\">\n                        <span class=\"small\" *ngFor=\"let item of network_labels\">\n                        <i [style.color]=\"item.color\" class=\"fa fa-circle\" aria-hidden=\"true\"></i> {{ item.id }}\n                    </span>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div id=\"co_occurrence_chords\"></div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n<!-- </div> -->\n\n\n\n<div class=\"box box-solid\">\n    <div class=\"box-header\">\n        <h3>Taxonomy Annotation</h3>\n        <p class=\"small\">\n            The bar charts show the distribution of the <i>species</i> taxonomy rank. Taxonomy distribution is computed using a rapid, accurate and sensitive microbial community classification program called <a href=\"https://ccb.jhu.edu/software/centrifuge/manual.shtml\">centrifuge</a>            <a href=\"http://genome.cshlp.org/content/early/2016/11/16/gr.210641.116.abstract\">(Kim. et., al.)</a>. Reads are screened against the index for Bacteria, Aarchaea, Viruses and Human genomes, using default parameters. The graph displays the\n            top 10 <i>species</i> ranked by the number of reads.\n        </p>\n    </div>\n    <div class=\"box-body\">\n        <!-- <div class=\"col-md-6 text-center\">\n            <chart [options]=\"taxonomy_sample_chart_genus\" style=\"width:25%\"></chart>\n        </div> -->\n        <div class=\"ui-helper-clearfix\">\n            <button class='btn btn-xs btn-default' type=\"button\" label=\"taxonomy.csv\" (click)=\"taxonomy_table.exportCSV()\" style=\"float:right\"><i class=\"fa fa-download\"></i> <strong>download table</strong></button>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"box-body text-center\">\n                <p-dataTable #taxonomy_table [value]=\"taxonomy_data\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"5\" exportFilename=\"reads\">\n                    <p-column field='tax_id' header='Taxa ID'></p-column>\n                    <p-column field='tax_rank' header='Taxa Rank'></p-column>\n                    <p-column field='name' header='Name'></p-column>\n                    <p-column field='num_reads' header='Reads'></p-column>\n                    <!-- <p-column field='rpm' header='RPM'></p-column> -->\n                    <!-- download link -->\n                </p-dataTable>\n            </div>\n        </div>\n\n        <div class=\"col-md-6\">\n            <chart class=\"col-md-12\" [options]=\"taxonomy_sample_chart_species\"></chart>\n        </div>\n\n\n\n    </div>\n</div>\n\n\n<div class=\"box box-solid\">\n    <div class=\"box-header\">\n        <h3>Multiple Sample Comparison</h3>\n        <p class=\"small\">\n            The table below contains the results for all the samples. Including, sample name, gene category, gene name, number of hits in the sample.\n        </p>\n        <p class=\"small\">\n            The relative abundance is computed respect the total copy number of ARGs.\n        </p>\n    </div>\n    <div class=\"ui-helper-clearfix\">\n        <button class='btn btn-xs btn-default' type=\"button\" label=\"data.csv\" (click)=\"reads_table_vis_comparison.exportCSV()\" style=\"float:right\"><i class=\"fa fa-download\"></i> <strong>download table</strong></button>\n    </div>\n    <div class=\"box-body text-center\">\n        <p-dataTable #reads_table_vis_comparison [value]=\"all_samples\" [rows]=\"10\" [paginator]=\"true\" [pageLinks]=\"5\" exportFilename=\"reads\">\n            <p-column field='sample' header='Sample'></p-column>\n            <p-column field='origin' header='Section'></p-column>\n            <p-column field='category' header='Category'></p-column>\n            <p-column field='id' header='Gene'></p-column>\n            <p-column field='size' header='Hits'></p-column>\n            <p-column field='rel_abn_args' header='RA #ARGs'></p-column>\n            <p-column field='rel_abn_total_reads' header='RA #Reads'></p-column>\n            <p-column field='rel_abn_total_genes' header='RA #Genes'></p-column>\n            <p-column field='rel_abn_unique_strains' header='RA #Strains'></p-column>\n\n            <!-- download link -->\n        </p-dataTable>\n    </div>\n</div>\n\n\n\n\n<!-- <div class=\"col-md-12\">\n    <chart [options]=\"compare_samles_stacked_bar\" style=\"width:60%;margin: 0 auto\"></chart>\n</div> -->\n\n<p-growl [(value)]=\"msgs\" baseZIndex=\"99999\" autoZIndex=\"false\"></p-growl>"

/***/ }),

/***/ "../../../../../src/app/project/view-samples/view-samples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sample_sample_service__ = __webpack_require__("../../../../../src/services/sample/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Gmap__ = __webpack_require__("../../../../../src/app/project/view-samples/Gmap.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chords__ = __webpack_require__("../../../../../src/app/project/view-samples/chords.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__network__ = __webpack_require__("../../../../../src/app/project/view-samples/network.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__taxonomy__ = __webpack_require__("../../../../../src/app/project/view-samples/taxonomy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeWhile__ = __webpack_require__("../../../../rxjs/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeWhile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_takeWhile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__EventDrops__ = __webpack_require__("../../../../../src/app/project/view-samples/EventDrops.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__OverallStats__ = __webpack_require__("../../../../../src/app/project/view-samples/OverallStats.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var ViewSamplesComponent = (function () {
    // public sample_list: any;
    function ViewSamplesComponent(router, route, sampleService, confirmationService, session, projectComponent) {
        this.router = router;
        this.route = route;
        this.sampleService = sampleService;
        this.confirmationService = confirmationService;
        this.session = session;
        this.projectComponent = projectComponent;
        this.msgs = [];
        this.rel_abn_type = [];
        this.rel_abn_subtype = [];
    }
    ViewSamplesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stacked = {};
        this.general_info = {
            ARGs: { counts: 0 },
            MGEs: { counts: 0 },
            MRGs: { counts: 0 },
        };
        this.alive = true;
        this.read_length = [];
        this.read_chart = new __WEBPACK_IMPORTED_MODULE_6__Gmap__["a" /* Genome */]();
        this.network = new __WEBPACK_IMPORTED_MODULE_8__network__["a" /* Network */]();
        this.event_drops = new __WEBPACK_IMPORTED_MODULE_12__EventDrops__["a" /* EventDrops */]();
        this.stats = new __WEBPACK_IMPORTED_MODULE_13__OverallStats__["a" /* Stats */]();
        this.taxonomy_visualization = new __WEBPACK_IMPORTED_MODULE_9__taxonomy__["a" /* TaxonomyVisualization */]();
        this.selected_sample = { name: '' };
        this.network_data = { nodes: [], edges: [] };
        this.all_samples = [];
        this.co_occurrence_chords = new __WEBPACK_IMPORTED_MODULE_7__chords__["a" /* Chords */]();
        this.selected_read = {
            id: 0,
            taxa: 0
        };
        this.sub = this.route.params.subscribe(function (params) {
            // this.dt.reset();
            __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_TimerObservable__["TimerObservable"].create(0, 2000)
                .takeWhile(function () { return _this.alive; })
                .subscribe(function () {
                _this.sampleService.getSamplesByProject(_this.projectComponent.projectID)
                    .subscribe(function (response) { });
            });
            _this.sampleService.getSamplesByProject(_this.projectComponent.projectID)
                .subscribe(function (response) {
                var samples = _this.sampleService.samplesByProject;
                _this.selected_sample = samples[0];
                _this.get_sample_results(samples[0]['_id'], 5);
                _this.sample_comparison();
            });
        });
    };
    ViewSamplesComponent.prototype.filter_data = function (data) {
        var filtered_data = [];
        data.forEach(function (element) {
            if (element.read[0].args >= 0) {
                filtered_data.push(element);
            }
            ;
        });
        return filtered_data;
    };
    ViewSamplesComponent.prototype.get_sample_results = function (sample_id, index) {
        var _this = this;
        this.sampleService.get_sample_results(sample_id).
            subscribe(function (res) {
            if (res === false) {
                _this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'Processing sample' });
                return false;
            }
            ;
            // console.log(res);
            _this.raw_reads = res[0];
            _this.filter_reads = res[0];
            _this.network_data = res[1];
            _this.network_labels = res[2];
            _this.taxonomy_data = res[3];
            _this.read_length = res[4]['read_length_distribution'];
            _this.selected_read = _this.filter_reads[index].read[0];
            // variable with general statistics
            _this.general_info = _this.stats.overall_abundances(_this.network_data);
            // console.log(this.general_info);
            // length distribution
            _this.line_chart = _this.read_chart.length_distribution(_this.read_length);
            // Genes distribution
            _this.antibiotic_distribution_chart = _this.read_chart.genes_distribution(_this.network_data, 1, 3, _this.network_labels);
            _this.args_distribution_chart = _this.read_chart.genes_distribution(_this.network_data, 1, 4, _this.network_labels);
            _this.mges_distribution_chart = _this.read_chart.genes_distribution(_this.network_data, 2, 3, _this.network_labels);
            _this.metal_distribution_chart = _this.read_chart.genes_distribution(_this.network_data, 4, 3, _this.network_labels);
            // render read map //
            // this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);
            var gene_organization_div = document.getElementById('gene_organization');
            gene_organization_div.innerHTML = '';
            _this.event_drops.render(_this.filter_reads[index]);
            // co-occurrence network
            _this.network.render('network', _this.network_data);
            // co-occurrence chords
            var item = document.getElementById('co_occurrence_chords');
            item.innerHTML = '';
            _this.co_occurrence_chords.render('#co_occurrence_chords', _this.network_data);
            // barchart witht he species abundances //
            _this.taxonomy_sample_chart_species = _this.taxonomy_visualization.render(_this.taxonomy_data, 'species');
            // this.taxonomy_sample_chart_genus = this.taxonomy_visualization.render(this.taxonomy_data, 'genus');
            // table for the species abundances //
            _this.reads_table = _this.filter_reads.map(function (i, ix) {
                i.read[0]['index'] = ix;
                return i.read[0];
            });
            // this.network.render('network_labels', this.network_data[1], 'grid', false);
            // console.log(this.reads_table)
        });
    };
    ViewSamplesComponent.prototype.render_read_circular_map = function (data) {
        var index = data.index;
        this.selected_read = this.filter_reads[index].read[0];
        var item = document.getElementById('gene_organization');
        item.innerHTML = '';
        this.event_drops.render(this.filter_reads[index]);
        // this.read_chart.render('#read_circle_map-1', this.filter_reads[index]['read'], this.filter_reads[index]['data']);
    };
    ViewSamplesComponent.prototype.view = function (sample) {
        this.selected_sample = sample;
        this.get_sample_results(sample['_id'], 0);
    };
    ViewSamplesComponent.prototype.rerun = function (sample) {
        var _this = this;
        // console.log(sample)
        this.confirmationService.confirm({
            message: 'ARGpore will execute only if only there were any errors during the execution.',
            header: 'Re-run sample',
            icon: 'fa fa-play',
            accept: function () {
                // console.log(sample)
                // sample.status = 're-running';
                // *************************************
                // TODO: create a service that updates the status of a sample given its ID !IMPORTANT
                // *************************************
                _this.sampleService.run(sample)
                    .subscribe(function (project) {
                });
            }
        });
    };
    ViewSamplesComponent.prototype.removeSample = function (sample) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Do you want to delete this sample?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: function () {
                _this.sampleService.deleteSample(sample)
                    .subscribe(function () {
                });
            }
        });
    };
    ViewSamplesComponent.prototype.sample_comparison = function () {
        var _this = this;
        // load the first sample
        var samples = this.sampleService.samplesByProject;
        // console.log(samples);
        this.all_samples = [];
        samples.forEach(function (sample, index) {
            // console.log(sample);
            _this.sampleService.get_sample_results(sample['_id']).
                subscribe(function (res) {
                // console.log(res);
                // console.log(sample['_id']);
                if (res === false) {
                    _this.msgs.push({ severity: 'info', summary: 'Sample: ' + sample['name'], detail: 'Still Running' });
                    return false;
                }
                ;
                // console.log(this.all_samples.length)
                res[1].nodes.forEach(function (item) {
                    item.data['sample'] = sample['name'];
                    item.data['rel_abn_args'] = (item['data'].size * 1 / res[4]['total_mapped_ARG_reads']).toFixed(5);
                    item.data['rel_abn_total_genes'] = (item['data'].size * 1 / res[4]['total_functional_reads']).toFixed(5);
                    item.data['rel_abn_total_reads'] = (item['data'].size * 1 / res[4]['total_reads']).toFixed(5);
                    item.data['rel_abn_unique_strains'] = (item['data'].size * 1 / res[4]['total_unique_genomes']).toFixed(5);
                    item.data['category'] = item['data']['metadata'][3];
                    _this.all_samples.push(item.data);
                });
            });
        });
        // console.log(this.all_samples);
    };
    ViewSamplesComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.alive = false;
    };
    ViewSamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            // selector: 'app-view-samples',
            template: __webpack_require__("../../../../../src/app/project/view-samples/view-samples.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/view-samples/view-samples.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_sample_sample_service__["a" /* SampleService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_sample_sample_service__["a" /* SampleService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmationService"]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_session_service__["a" /* Session */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__project_component__["a" /* ProjectComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__project_component__["a" /* ProjectComponent */]) === 'function' && _f) || Object])
    ], ViewSamplesComponent);
    return ViewSamplesComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/view-samples.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    api_url: 'http://bench.cs.vt.edu/api/nanoarg',
    upload_dir: ''
};
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/main.js.map

/***/ }),

/***/ "../../../../../src/services/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__session_session_service__ = __webpack_require__("../../../../../src/services/session/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__encrypt__ = __webpack_require__("../../../../../src/services/auth/encrypt.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(http, session) {
        this.http = http;
        this.session = session;
        // this._cookieService.removeAll();
        this.base_url = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].api_url;
        this.credentials = { "isLoggedIn": false };
        this.encript = new __WEBPACK_IMPORTED_MODULE_8__encrypt__["a" /* Sha512 */]();
    }
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        // const hash_user = sha256(username);
        password = this.encript.SHA512(password).toString();
        return this.http.post(this.base_url + '/auth/login/', { email: username, password: password })
            .map(function (res) {
            _this.credentials = res.json();
            if (_this.credentials) {
                // this.credentials = this.credentials[0];
                // this.credentials['isLoggedIn'] = true;
                _this.session.putObject('isLoggedIn', 1);
                _this.session.putObject('user', _this.credentials[0]);
            }
            else {
                _this.session.removeAll();
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.session.removeAll();
        this.credentials = [];
    };
    AuthService.prototype.signup = function (data) {
        var _this = this;
        data['password'] = this.encript.SHA512(data['password']).toString();
        return this.http.post(this.base_url + '/auth/signup/', data)
            .map(function (res) {
            _this.credentials = res.json();
            // console.log(this.credentials)
            if (_this.credentials) {
                _this.session.putObject('isLoggedIn', 1);
                _this.session.putObject('user', _this.credentials);
            }
            else {
                _this.session.removeAll();
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* Session */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__session_session_service__["a" /* Session */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/services/auth/encrypt.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sha512; });
var _sha512 = __webpack_require__("../../../../crypto-js/sha512.js");
var Sha512 = (function () {
    // _sha512: any;
    function Sha512() {
        // this._sha512 = new sha512()
    }
    Sha512.prototype.SHA512 = function (message) {
        return _sha512(message);
    };
    return Sha512;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/encrypt.js.map

/***/ }),

/***/ "../../../../../src/services/project/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectsByUser = [];
        this.projectInfo = {};
        this.base_url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].api_url;
    }
    ProjectService.prototype.create = function (fields) {
        var _this = this;
        return this.http.post(this.base_url + '/project/create/', fields)
            .map(function (res) {
            _this.projectInfo = res.json()[0];
            _this.projectsByUser.push(res.json());
        });
    };
    ProjectService.prototype.readProjectByUserId = function (userID) {
        var _this = this;
        return this.http.get(this.base_url + '/project/user/' + userID)
            .map(function (res) {
            if (res.json()) {
                _this.projectsByUser = res.json();
            }
        });
    };
    ProjectService.prototype.getProjectById = function (projectID) {
        var _this = this;
        return this.http.get(this.base_url + '/project/' + projectID)
            .map(function (res) {
            // console.log(res.json())
            _this.projectInfo = res.json()[0];
        });
    };
    ProjectService.prototype.deleteProject = function (fields) {
        var _this = this;
        return this.http.post(this.base_url + '/project/remove/', fields)
            .map(function (res) {
            _this.projectsByUser = _this.projectsByUser.filter(function (item) { return item['_id'] != fields['_id']; });
        });
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], ProjectService);
    return ProjectService;
    var _a;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/project.service.js.map

/***/ }),

/***/ "../../../../../src/services/sample/sample.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SampleService = (function () {
    function SampleService(http) {
        this.http = http;
        this.done_event = false;
        this.upload_directory = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].upload_dir;
        this.base_url = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].api_url;
        this.upload_service = this.base_url + '/uploadFile/';
    }
    SampleService.prototype.create = function (fields) {
        var _this = this;
        return this.http.post(this.base_url + '/sample/create/', fields)
            .map(function (res) {
            _this.sampleInfo = res.json();
            // console.log(this.sampleInfo)
        });
    };
    SampleService.prototype.deleteSample = function (fields) {
        var _this = this;
        return this.http.post(this.base_url + '/sample/remove/', fields)
            .map(function (res) {
            console.log(_this.samplesByProject);
            _this.samplesByProject = _this.samplesByProject.filter(function (item) { return item['_id'] != fields['_id']; });
            console.log(_this.samplesByProject);
        });
    };
    SampleService.prototype.getSamplesByProject = function (projectID) {
        var _this = this;
        return this.http.get(this.base_url + '/sample/project/' + projectID)
            .map(function (res) {
            if (res.json()) {
                _this.samplesByProject = res.json();
            }
            else {
                _this.samplesByProject = undefined;
            }
        });
    };
    SampleService.prototype.update = function (fields) {
        var _this = this;
        return this.http.post(this.base_url + '/sample/update/', fields)
            .map(function (res) {
            _this.sampleInfo = res.json();
            console.log(_this.sampleInfo);
        });
    };
    SampleService.prototype.run = function (fields) {
        var _this = this;
        return this.http.post(this.base_url + '/analysis/run', fields)
            .map(function (res) {
            _this.analysisSample = res.json();
            console.log("RUNNING");
        });
    };
    SampleService.prototype.get_sample_results = function (sample_id) {
        return this.http.get(this.base_url + '/sample/read/results/' + sample_id)
            .map(function (res) {
            return res.json();
        });
    };
    ;
    SampleService.prototype.get_sample_status = function (sample_id) {
        return this.http.get(this.base_url + '/sample/' + sample_id)
            .map(function (res) {
            return res.json();
        });
    };
    SampleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], SampleService);
    return SampleService;
    var _a;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/sample.service.js.map

/***/ }),

/***/ "../../../../../src/services/session/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Session; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Session = (function () {
    function Session(_cookieService) {
        this._cookieService = _cookieService;
    }
    Session.prototype.get = function (id) {
        this.credentials = this._cookieService.get(id);
        if (this.credentials) {
            return JSON.parse(this.credentials);
        }
        else {
            return false;
        }
    };
    Session.prototype.putObject = function (id, object) {
        return this._cookieService.putObject(id, object);
    };
    Session.prototype.put = function (id, value) {
        return this._cookieService.put(id, value);
    };
    Session.prototype.removeAll = function () {
        return this._cookieService.removeAll();
    };
    Session = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object])
    ], Session);
    return Session;
    var _a;
}());
//# sourceMappingURL=/Volumes/drive/projects/ARG/nanopore/frontend/src/session.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map