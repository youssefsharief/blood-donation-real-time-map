(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["success-success-module"],{

/***/ "./src/app/success/success-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/success/success-routing.module.ts ***!
  \***************************************************/
/*! exports provided: SuccessRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessRoutingModule", function() { return SuccessRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success.component */ "./src/app/success/success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _success_component__WEBPACK_IMPORTED_MODULE_2__["SuccessComponent"] },
];
var SuccessRoutingModule = /** @class */ (function () {
    function SuccessRoutingModule() {
    }
    SuccessRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SuccessRoutingModule);
    return SuccessRoutingModule;
}());



/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"jumbotron\">\r\n        <h1>Success</h1>\r\n        <p>Use this private link to edit or remove your posting. </p>\r\n        <p><a href=\"{{url}}/posting/{{id}}\">   {{url}}/posting/{{id}}</a> </p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SuccessComponent = /** @class */ (function () {
    function SuccessComponent(route, userService, router) {
        this.route = route;
        this.userService = userService;
        this.router = router;
        this.url = window.location.origin;
    }
    SuccessComponent.prototype.ngOnInit = function () {
        this.id = this.userService.userId;
        if (!this.id)
            this.router.navigate(['/map']);
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/success/success.module.ts":
/*!*******************************************!*\
  !*** ./src/app/success/success.module.ts ***!
  \*******************************************/
/*! exports provided: SuccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessModule", function() { return SuccessModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _success_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./success-routing.module */ "./src/app/success/success-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports

// This Module's Components



var SuccessModule = /** @class */ (function () {
    function SuccessModule() {
    }
    SuccessModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _success_routing_module__WEBPACK_IMPORTED_MODULE_3__["SuccessRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ],
            declarations: [
                _success_component__WEBPACK_IMPORTED_MODULE_1__["SuccessComponent"],
            ],
            exports: [
                _success_component__WEBPACK_IMPORTED_MODULE_1__["SuccessComponent"],
            ]
        })
    ], SuccessModule);
    return SuccessModule;
}());



/***/ })

}]);
//# sourceMappingURL=success-success-module.js.map