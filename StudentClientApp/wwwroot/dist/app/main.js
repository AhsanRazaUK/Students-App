(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./ClientApp/$$_lazy_route_resource lazy recursive":
/*!****************************************************************!*\
  !*** ./ClientApp/$$_lazy_route_resource lazy namespace object ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app-routing.module.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/app-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./student-list/student-list.component */ "./ClientApp/app/student-list/student-list.component.ts");
/* harmony import */ var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./student-details/student-details.component */ "./ClientApp/app/student-details/student-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_2__["StudentListComponent"] },
    { path: 'add-new-student', component: _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_3__["StudentDetailsComponent"] },
    { path: 'edit-student/:id', component: _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_3__["StudentDetailsComponent"] },
    { path: 'delete-student/:id', component: _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_3__["StudentDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./ClientApp/app/app.component.html":
/*!******************************************!*\
  !*** ./ClientApp/app/app.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"margin-top:20px;\"></div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./ClientApp/app/app.component.html"),
            styleUrls: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./student-list/student-list.component */ "./ClientApp/app/student-list/student-list.component.ts");
/* harmony import */ var _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./student-details/student-details.component */ "./ClientApp/app/student-details/student-details.component.ts");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/student.service */ "./ClientApp/app/shared/student.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./ClientApp/app/app-routing.module.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./ClientApp/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_5__["StudentListComponent"],
                _student_details_student_details_component__WEBPACK_IMPORTED_MODULE_6__["StudentDetailsComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_9__["FilterPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"]
            ],
            providers: [_shared_student_service__WEBPACK_IMPORTED_MODULE_7__["StudentService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./ClientApp/app/pipes/filter.pipe.ts":
/*!********************************************!*\
  !*** ./ClientApp/app/pipes/filter.pipe.ts ***!
  \********************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (item) { return item.surname.toLowerCase().includes(searchText) || item.firstName.toLowerCase().includes(searchText); });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./ClientApp/app/shared/student.model.ts":
/*!***********************************************!*\
  !*** ./ClientApp/app/shared/student.model.ts ***!
  \***********************************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./ClientApp/app/shared/student.service.ts":
/*!*************************************************!*\
  !*** ./ClientApp/app/shared/student.service.ts ***!
  \*************************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4525/api/students';
    }
    StudentService.prototype.getStudents = function () {
        return this.http.get(this.apiUrl);
    };
    StudentService.prototype.getStudent = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.get(url);
    };
    StudentService.prototype.saveStudent = function (student) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', student.studentID.toString());
        var body = {
            FirstName: student.firstName,
            Surname: student.surname,
            StudentID: student.studentID
        };
        if (student.studentID === 0) {
            // Add New Record
            return this.http.post("" + this.apiUrl, body, {
                headers: headers
            });
        }
        else {
            // Edit Record
            return this.http.put(this.apiUrl + "/" + student.studentID, body, {
                headers: headers,
                params: params
            });
        }
    };
    StudentService.prototype.deleteStudent = function (id) {
        var url = this.apiUrl + "/" + id;
        return this.http.delete(url);
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./ClientApp/app/student-details/student-details.component.html":
/*!**********************************************************************!*\
  !*** ./ClientApp/app/student-details/student-details.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<div class=\"gap-20\"></div>\r\n<div *ngIf=\"student\" class=\"row\">\r\n    <div class=\"form-horizontal\">\r\n        <div class=\"col-md-6\">\r\n            <div *ngIf=\"student.studentID > 0\" class=\"form-group\">\r\n                <label for=\"StudentID\" class=\"col-sm-4 control-label\">Student ID</label>\r\n                <div class=\"col-sm-8\">\r\n                    <input class=\"form-control\" id=\"StudentID\" type=\"text\" placeholder=\"Student ID\" [(ngModel)]=\"student.studentID\" readonly>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"FirstName\" class=\"col-sm-4 control-label\">First Name</label>\r\n                <div class=\"col-sm-8\">\r\n                    <input id=\"FirstName\" placeholder=\"First Name\" class=\"form-control\" type=\"text\" [(ngModel)]=\"student.firstName\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"Surname\" class=\"col-sm-4 control-label\">Surname</label>\r\n                <div class=\"col-sm-8\">\r\n                    <input class=\"form-control\" id=\"Surname\" type=\"text\" placeholder=\"Surname\" [(ngModel)]=\"student.surname\">\r\n                </div>\r\n            </div>\r\n            <hr />\r\n            <div class=\"form-group\">\r\n                <div class=\"col-sm-8 pull-right\">\r\n                    <button type=\"button\" (click)=\"Save()\" class=\"btn btn-primary\" style=\"margin-right:10px;\">&nbsp;Save&nbsp;</button>\r\n                    <button type=\"button\" (click)=\"GoBack()\" class=\"btn btn-default\">Cancel</button>\r\n                    <div class=\"gap-20\"></div>\r\n                    <button type=\"button\" (click)=\"Delete()\" class=\"btn btn-danger\" *ngIf=\"deleteRecord\">Delete</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/student-details/student-details.component.ts":
/*!********************************************************************!*\
  !*** ./ClientApp/app/student-details/student-details.component.ts ***!
  \********************************************************************/
/*! exports provided: StudentDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentDetailsComponent", function() { return StudentDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_student_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/student.model */ "./ClientApp/app/shared/student.model.ts");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/student.service */ "./ClientApp/app/shared/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentDetailsComponent = /** @class */ (function () {
    function StudentDetailsComponent(studentService, route, location) {
        this.studentService = studentService;
        this.route = route;
        this.location = location;
        this.deleteRecord = false;
    }
    StudentDetailsComponent.prototype.ngOnInit = function () {
        this.GetStudent();
    };
    StudentDetailsComponent.prototype.GetStudent = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        console.log(this.route.snapshot.url[0].path);
        console.log(id);
        if (id == 0) {
            this.title = "Add New Student";
            this.student = new _shared_student_model__WEBPACK_IMPORTED_MODULE_3__["Student"]();
            this.student.studentID = 0;
        }
        else {
            if (this.route.snapshot.url[0].path.includes('delete')) {
                this.deleteRecord = true;
            }
            this.studentService.getStudent(id).subscribe(function (data) {
                _this.student = data;
                _this.title = "Student Details";
            });
        }
    };
    StudentDetailsComponent.prototype.GoBack = function () {
        this.location.back();
    };
    StudentDetailsComponent.prototype.Save = function () {
        var _this = this;
        this.studentService.saveStudent(this.student)
            .subscribe(function () { return _this.GoBack(); });
    };
    StudentDetailsComponent.prototype.Delete = function () {
        var _this = this;
        if (confirm('Would you like to delete this record?')) {
            this.studentService.deleteStudent(this.student.studentID)
                .subscribe(function () { return _this.GoBack(); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_student_model__WEBPACK_IMPORTED_MODULE_3__["Student"])
    ], StudentDetailsComponent.prototype, "student", void 0);
    StudentDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-details',
            template: __webpack_require__(/*! ./student-details.component.html */ "./ClientApp/app/student-details/student-details.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_shared_student_service__WEBPACK_IMPORTED_MODULE_4__["StudentService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], StudentDetailsComponent);
    return StudentDetailsComponent;
}());



/***/ }),

/***/ "./ClientApp/app/student-list/student-list.component.css":
/*!***************************************************************!*\
  !*** ./ClientApp/app/student-list/student-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./ClientApp/app/student-list/student-list.component.html":
/*!****************************************************************!*\
  !*** ./ClientApp/app/student-list/student-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\r\n<div class=\"gap-20\"></div>\r\n<div class=\"col-md-4\" style=\"padding-left: 0;\">\r\n    <input [(ngModel)]=\"searchText\" class=\"form-control\" placeholder=\"Search...\">\r\n</div>\r\n<div class=\"gap-20\"></div>\r\n<table class=\"table table-condensed table-bordered table-responsive table-hover\" matSort (matSortChange)=\"sortData($event)\">\r\n    <thead>\r\n        <tr>\r\n            <th mat-sort-header=\"studentID\">Student ID</th>\r\n            <th mat-sort-header=\"firstName\">First Name</th>\r\n            <th mat-sort-header=\"surname\">Surname</th>\r\n            <th><a routerLink=\"/add-new-student\">Add New</a></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody *ngIf=\"studentList?.length > 0;\">\r\n        <tr *ngFor=\"let student of studentList | filter : searchText\">\r\n            <td>{{student.studentID}}</td>\r\n            <td>{{student.firstName}}</td>\r\n            <td>{{student.surname}}</td>\r\n            <td>\r\n                <a class=\"btn btn-info\" routerLink=\"/edit-student/{{student.studentID}}\"><i class=\"fa fa-edit\"></i>&nbsp;Edit&nbsp;</a>&nbsp;\r\n                <a class=\"btn btn-danger\" routerLink=\"/delete-student/{{student.studentID}}\"><i class=\"fa fa-trash\"></i>&nbsp;Delete</a>\r\n            </td>\r\n\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<div *ngIf=\"studentList?.length <= 0;\">\r\n    <mat-spinner></mat-spinner>\r\n</div>"

/***/ }),

/***/ "./ClientApp/app/student-list/student-list.component.ts":
/*!**************************************************************!*\
  !*** ./ClientApp/app/student-list/student-list.component.ts ***!
  \**************************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/student.service */ "./ClientApp/app/shared/student.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(studentService) {
        this.studentService = studentService;
        this.title = "Student List";
        this.studentList = [];
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (data) {
            _this.studentList = data.slice();
        });
    };
    StudentListComponent.prototype.sortData = function (sort) {
        var data = this.studentList.slice();
        if (!sort.active || sort.direction === '') {
            this.studentList = data;
            return;
        }
        this.studentList = data.sort(function (a, b) {
            var isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'studentID': return compare(a.studentID, b.studentID, isAsc);
                case 'firstName': return compare(a.firstName, b.firstName, isAsc);
                case 'surname': return compare(a.surname, b.surname, isAsc);
                default: return 0;
            }
        });
    };
    StudentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./ClientApp/app/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./ClientApp/app/student-list/student-list.component.css")],
            providers: [_shared_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]]
        }),
        __metadata("design:paramtypes", [_shared_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]])
    ], StudentListComponent);
    return StudentListComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\My Projects\StudentApplication\StudentClientApp\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map