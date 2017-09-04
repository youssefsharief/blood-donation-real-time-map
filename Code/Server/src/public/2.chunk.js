webpackJsonp([2],{

/***/ "../../../../../src/app/posting/posting-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posting_component__ = __webpack_require__("../../../../../src/app/posting/posting.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: ' ', component: __WEBPACK_IMPORTED_MODULE_2__posting_component__["a" /* PostingComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__posting_component__["a" /* PostingComponent */] },
];
var PostingRoutingModule = (function () {
    function PostingRoutingModule() {
    }
    return PostingRoutingModule;
}());
PostingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], PostingRoutingModule);

//# sourceMappingURL=posting-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/posting/posting.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <h1 *ngIf=\"isEdit\">Edit you info</h1>\r\n    <h1 *ngIf=\"!isEdit\">Add you info</h1>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            \r\n                <form (ngSubmit)=\"onSubmit(form.value)\" [formGroup]=\"form\" *ngIf=\"form\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">First name </label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter your first name\" formControlName=\"firstName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Last name </label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter your last name\" formControlName=\"lastName\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Email Address </label>\r\n                            <input type=\"email\" class=\"form-control\" id=\"\" placeholder=\"Enter email address\" formControlName=\"email\">\r\n                            <p *ngIf=\"form\" [hidden]=\"!isIncorrectMailFormat('email')\" class=\"text-danger\"> Please Enter a valid email </p>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Phone Number </label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"Enter phone number\" formControlName=\"telephone\" required>\r\n                            <p *ngIf=\"form\" [hidden]=\"!isIncorrectTelephoneFormat('telephone')\" class=\"text-danger\"> Please Enter a valid phone number</p>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Blood Group </label>\r\n                            <select class=\"form-control bg-white xs-inline loadServices\" formControlName=\"bloodGroup\">\r\n                                        <option *ngFor=\"let item of bloodGroups\" value=\"{{item}}\">{{item}}</option>\r\n                                </select>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Longitude </label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"longitude\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Latitude </label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"latitude\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"\">Address </label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" formControlName=\"address\">\r\n                        </div>\r\n                    \r\n                    \r\n                    \r\n                        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!form.valid\"> Submit</button>\r\n                        <div class=\"btn btn-warning\" (click)=\"onChangeLocationRequest()\">Get Back to Map</div>\r\n                        <div class=\"btn btn-danger\" *ngIf=\"infoService.userId\" (click)=\"onRemove()\">Remove My Posting</div>\r\n                    \r\n                    </form>\r\n                <hr />\r\n                \r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/posting/posting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_info_service__ = __webpack_require__("../../../../../src/app/shared/services/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_global_validators__ = __webpack_require__("../../../../../src/app/shared/global-validators.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_snackbar_service__ = __webpack_require__("../../../../../src/app/shared/services/snackbar.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostingComponent = (function () {
    function PostingComponent(fb, activatedRoute, dataService, router, infoService, sb) {
        this.fb = fb;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.router = router;
        this.infoService = infoService;
        this.sb = sb;
        this.bloodGroups = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
        this.grabIdAndGetInfo();
    }
    PostingComponent.prototype.grabIdAndGetInfo = function () {
        if (this.activatedRoute.snapshot.url[0]) {
            this.isEdit = true;
            this.getDonorInfo(this.activatedRoute.snapshot.url[0].path);
        }
        else if (this.infoService.userId) {
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
        console.log(id);
        this.dataService.getDonorInfo(id).subscribe(function (data) {
            _this.infoService.userId = id;
            _this.infoService.userData = data;
            _this.buildForm();
        }, function (error) {
            console.log(error);
            _this.sb.emitErrorSnackBar("This account is currently non-existant");
            _this.router.navigate(['/map']);
        });
    };
    PostingComponent.prototype.onRemove = function () {
        var _this = this;
        return this.dataService.deleteDonor(this.infoService.userId).subscribe(function (data) {
            _this.infoService.clearData();
            _this.form.reset();
            _this.sb.emitSuccessSnackBar("You have successfully deleted your info");
            _this.router.navigate(['/map']);
        }, function (error) { return console.log(error); });
    };
    PostingComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        if (this.infoService.userId)
            return this.dataService.updateDonor(this.infoService.userId, formData).subscribe(function (success) {
                _this.router.navigate(['/success']);
            }, function (error) { return console.log(error); });
        else
            return this.dataService.addDonor(formData).subscribe(function (data) {
                _this.infoService.userId = data._id;
                _this.router.navigate(['/success']);
            }, function (error) { return console.log(error); });
    };
    PostingComponent.prototype.onChangeLocationRequest = function () {
        this.router.navigate(['/map']);
    };
    PostingComponent.prototype.buildForm = function () {
        if (this.infoService.userData) {
            this.form = this.fb.group({
                firstName: [this.infoService.userData.firstName || '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                lastName: [this.infoService.userData.lastName || '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                email: [this.infoService.userData.email || '', __WEBPACK_IMPORTED_MODULE_5__shared_global_validators__["a" /* globalValidators */].mailFormat],
                telephone: [this.infoService.userData.telephone || '', __WEBPACK_IMPORTED_MODULE_5__shared_global_validators__["a" /* globalValidators */].telephoneFormat],
                bloodGroup: [this.infoService.userData.bloodGroup || '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                longitude: [this.infoService.userData.longitude || '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                latitude: [this.infoService.userData.latitude || '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                address: [this.infoService.userData.address || '', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            });
        }
        else {
            this.form = this.fb.group({
                firstName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                lastName: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                email: ['', __WEBPACK_IMPORTED_MODULE_5__shared_global_validators__["a" /* globalValidators */].mailFormat],
                telephone: ['', __WEBPACK_IMPORTED_MODULE_5__shared_global_validators__["a" /* globalValidators */].telephoneFormat],
                bloodGroup: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                longitude: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                latitude: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
                address: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["g" /* Validators */].required],
            });
        }
    };
    PostingComponent.prototype.isIncorrectMailFormat = function (control) {
        return this.form.get(control).hasError('incorrectMailFormat');
    };
    PostingComponent.prototype.isIncorrectTelephoneFormat = function (control) {
        return this.form.get(control).hasError('incorrectTelephoneFormat');
    };
    return PostingComponent;
}());
PostingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'posting',
        template: __webpack_require__("../../../../../src/app/posting/posting.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_info_service__["a" /* InfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_info_service__["a" /* InfoService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_snackbar_service__["a" /* SnackBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_snackbar_service__["a" /* SnackBarService */]) === "function" && _f || Object])
], PostingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=posting.component.js.map

/***/ }),

/***/ "../../../../../src/app/posting/posting.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posting_routing_module__ = __webpack_require__("../../../../../src/app/posting/posting-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__posting_component__ = __webpack_require__("../../../../../src/app/posting/posting.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingModule", function() { return PostingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports

// This Module's Components



var PostingModule = (function () {
    function PostingModule() {
    }
    return PostingModule;
}());
PostingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__posting_routing_module__["a" /* PostingRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__posting_component__["a" /* PostingComponent */],
        ],
    })
], PostingModule);

//# sourceMappingURL=posting.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/global-validators.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalValidators; });
var globalValidators = {
    mailFormat: function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value && control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    },
    telephoneFormat: function (control) {
        var PHONE_REGEXP = /(00|\+)\d{12}$/i;
        if (control.value && control.value != "" && (control.value.length <= 5 || !PHONE_REGEXP.test(control.value))) {
            return { "incorrectTelephoneFormat": true };
        }
        return null;
    }
};
//# sourceMappingURL=global-validators.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map