(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posting-posting-module"],{

/***/ "./src/app/posting/posting-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/posting/posting-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PostingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingRoutingModule", function() { return PostingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posting.component */ "./src/app/posting/posting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: ' ', component: _posting_component__WEBPACK_IMPORTED_MODULE_2__["PostingComponent"] },
    { path: '**', component: _posting_component__WEBPACK_IMPORTED_MODULE_2__["PostingComponent"] },
];
var PostingRoutingModule = /** @class */ (function () {
    function PostingRoutingModule() {
    }
    PostingRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PostingRoutingModule);
    return PostingRoutingModule;
}());



/***/ }),

/***/ "./src/app/posting/posting.component.html":
/*!************************************************!*\
  !*** ./src/app/posting/posting.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1 *ngIf=\"isEdit\">Edit you info</h1>\r\n    <h1 *ngIf=\"!isEdit\">Add you info</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n\r\n            <form (ngSubmit)=\"onSubmit(form.value)\" [formGroup]=\"form\" *ngIf=\"form\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">First name </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter your first name\" formControlName=\"firstName\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Last name </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter your last name\" formControlName=\"lastName\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Email Address </label>\r\n                    <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Enter email address\" formControlName=\"email\">\r\n                    <p [hidden]=\"!isIncorrectMailFormat('email')\" class=\"text-danger\"> Please Enter a valid email </p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Phone Number </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter phone number\" formControlName=\"telephone\" required>\r\n                    <p [hidden]=\"!isIncorrectTelephoneFormat('telephone')\" class=\"text-danger\"> Please Enter a valid phone number</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Blood Group </label>\r\n                    <select class=\"form-control bg-white xs-inline loadServices\" formControlName=\"bloodGroup\">\r\n                                        <option *ngFor=\"let item of bloodGroups\" value=\"{{item}}\">{{item}}</option>\r\n                                </select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Longitude </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"longitude\">\r\n                    <p [hidden]=\"!isIncorrectLongitudeFormat('longitude')\" class=\"text-danger\"> Please Enter a valid longitude </p>\r\n\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Latitude </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"latitude\">\r\n                    <p [hidden]=\"!isIncorrectLatitudeFormat('latitude')\" class=\"text-danger\"> Please Enter a valid latitude </p>\r\n\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\">Address </label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"address\" >\r\n                </div>\r\n\r\n\r\n\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!form.valid\"> Submit</button>\r\n                <div class=\"btn btn-info ml-3 link\" (click)=\"onChangeLocationRequest()\">Get Back to Map</div>\r\n                <div class=\"btn btn-danger ml-3 link\" *ngIf=\"userService.userId\" (click)=\"onRemove()\">Remove My Posting</div>\r\n\r\n            </form>\r\n            <hr />\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/posting/posting.component.ts":
/*!**********************************************!*\
  !*** ./src/app/posting/posting.component.ts ***!
  \**********************************************/
/*! exports provided: PostingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingComponent", function() { return PostingComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/global-validators */ "./src/app/shared/global-validators.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostingComponent = /** @class */ (function () {
    function PostingComponent(fb, activatedRoute, dataService, router, userService, sb) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.router = router;
        this.userService = userService;
        this.sb = sb;
        this.bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        this.grabIdAndGetInfo();
    }
    PostingComponent.prototype.grabIdAndGetInfo = function () {
        if (this.activatedRoute.snapshot.url[0]) {
            this.isEdit = true;
            this.getDonorInfo(this.activatedRoute.snapshot.url[0].path);
        }
        else if (this.userService.userId) {
            this.isEdit = true;
            this.buildForm();
        }
        else {
            this.isEdit = false;
            this.buildForm();
        }
    };
    PostingComponent.prototype.getDonorInfo = function (id) {
        var _this = this;
        this.dataService.getDonorInfo(id).subscribe(function (data) {
            _this.userService.userId = id;
            _this.userService.userData = data;
            _this.buildForm();
        }, function (error) {
            _this.sb.emitErrorSnackBar("This account is currently non-existant");
            _this.router.navigate(['/map']);
        });
    };
    PostingComponent.prototype.onRemove = function () {
        var _this = this;
        return this.dataService.deleteDonor(this.userService.userId).subscribe(function (data) {
            _this.userService.clearData();
            _this.form.reset();
            _this.sb.emitSuccessSnackBar("You have successfully deleted your info");
            _this.router.navigate(['/map']);
        }, function (error) { return console.log(error); });
    };
    PostingComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (this.userService.userId)
            return this.dataService.updateDonor(this.userService.userId, formData).subscribe(function (success) {
                _this.router.navigate(['/success']);
            }, function (error) { return console.log(error); });
        else
            return this.dataService.addDonor(formData).subscribe(function (data) {
                _this.userService.userId = data._id;
                _this.router.navigate(['/success']);
            }, function (error) { return console.log(error); });
    };
    PostingComponent.prototype.onChangeLocationRequest = function () {
        this.router.navigate(['/map']);
    };
    PostingComponent.prototype.buildForm = function () {
        if (this.userService.userData) {
            this.form = this.fb.group({
                firstName: [this.userService.userData.firstName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                lastName: [this.userService.userData.lastName || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: [this.userService.userData.email || '', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].mailFormat],
                telephone: [this.userService.userData.telephone || '', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].telephoneFormat],
                bloodGroup: [this.userService.userData.bloodGroup || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                longitude: [this.userService.userData.longitude || '', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].longitudeFormat],
                latitude: [this.userService.userData.latitude || '', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].latitudeFormat],
                address: [this.userService.userData.address || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
        else {
            this.form = this.fb.group({
                firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                email: ['', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].mailFormat],
                telephone: ['', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].telephoneFormat],
                bloodGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
                longitude: ['', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].longitudeFormat],
                latitude: ['', _shared_global_validators__WEBPACK_IMPORTED_MODULE_5__["globalValidators"].latitudeFormat],
                address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            });
        }
    };
    PostingComponent.prototype.isIncorrectMailFormat = function (control) {
        return this.form.get(control).hasError('incorrectMailFormat');
    };
    PostingComponent.prototype.isIncorrectTelephoneFormat = function (control) {
        return this.form.get(control).hasError('incorrectTelephoneFormat');
    };
    PostingComponent.prototype.isIncorrectLongitudeFormat = function (control) {
        return this.form.get(control).hasError('incorrectLongitudeFormat');
    };
    PostingComponent.prototype.isIncorrectLatitudeFormat = function (control) {
        return this.form.get(control).hasError('incorrectLatitudeFormat');
    };
    PostingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'posting',
            template: __webpack_require__(/*! ./posting.component.html */ "./src/app/posting/posting.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"],
            _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]])
    ], PostingComponent);
    return PostingComponent;
}());



/***/ }),

/***/ "./src/app/posting/posting.module.ts":
/*!*******************************************!*\
  !*** ./src/app/posting/posting.module.ts ***!
  \*******************************************/
/*! exports provided: PostingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingModule", function() { return PostingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _posting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posting-routing.module */ "./src/app/posting/posting-routing.module.ts");
/* harmony import */ var _posting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posting.component */ "./src/app/posting/posting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports

// This Module's Components



var PostingModule = /** @class */ (function () {
    function PostingModule() {
    }
    PostingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _posting_routing_module__WEBPACK_IMPORTED_MODULE_2__["PostingRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
            ],
            declarations: [
                _posting_component__WEBPACK_IMPORTED_MODULE_3__["PostingComponent"],
            ],
        })
    ], PostingModule);
    return PostingModule;
}());



/***/ }),

/***/ "./src/app/shared/global-validators.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/global-validators.ts ***!
  \*********************************************/
/*! exports provided: globalValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalValidators", function() { return globalValidators; });
var globalValidators = {
    mailFormat: function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    },
    telephoneFormat: function (control) {
        var REGEX = /(00|\+)\d{12}$/i;
        if (control.value && control.value != "" && (control.value.length <= 5 || !REGEX.test(control.value))) {
            return { "incorrectTelephoneFormat": true };
        }
        return null;
    },
    longitudeFormat: function (control) {
        var REGEX = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,30})?))$/i;
        if (control.value && control.value != "" && !REGEX.test(control.value)) {
            return { "incorrectLongitudeFormat": true };
        }
        return null;
    },
    latitudeFormat: function (control) {
        var REGEX = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,30})?))$/i;
        if (control.value && control.value != "" && !REGEX.test(control.value)) {
            return { "incorrectLatitudeFormat": true };
        }
        return null;
    }
};


/***/ })

}]);
//# sourceMappingURL=posting-posting-module.js.map