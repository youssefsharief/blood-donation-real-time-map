(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./esri-map/esri-map.module": [
		"./src/app/esri-map/esri-map.module.ts",
		"esri-map-esri-map-module"
	],
	"./posting/posting.module": [
		"./src/app/posting/posting.module.ts",
		"posting-posting-module"
	],
	"./success/success.module": [
		"./src/app/success/success.module.ts",
		"success-success-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var paths = [
    { path: 'map', loadChildren: './esri-map/esri-map.module#EsriMapModule' },
    { path: 'success', loadChildren: './success/success.module#SuccessModule' },
    { path: 'posting', loadChildren: './posting/posting.module#PostingModule' },
    { path: '', redirectTo: 'map', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(paths)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-6\">\r\n\t\t\t<loader *ngIf=\"loading\"> </loader>\r\n\t\t\t<app-nav></app-nav> -->\r\n\t\t\t<!-- <app-header [title]=\"title\" [speaker]=\"speaker\" [isConnected]=\"isConnected()\"></app-header> -->\r\n\t\t\t<app-nav></app-nav>\r\n\t\t\t<div class=\"page-container\">\r\n\t\t\t\t<router-outlet></router-outlet>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-footer>\r\n\r\n\t\t\t</app-footer> -->\r\n\t\t\t<!-- <app-footer></app-footer>\r\n\t\t</div>\r\n\t</div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.dataService.instantiateSocket();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/snackbar.service */ "./src/app/shared/services/snackbar.service.ts");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_graphics_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/services/graphics.service */ "./src/app/shared/services/graphics.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"], _shared_services_graphics_service__WEBPACK_IMPORTED_MODULE_9__["GraphicsService"], _shared_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _shared_services_snackbar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-4\">\r\n    <a class=\"navbar-brand\" href=\"#\">Rescue</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n        aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n        </ul>\r\n    </div>\r\n    <img *ngIf=\"isConnected()\" class=\"connectionStatus pull-right\" src=\"assets/images/connected.png\" alt=\"\">\r\n    <img *ngIf=\"!isConnected()\" class=\"connectionStatus pull-right\" src=\"assets/images/not_connected.jpg\" alt=\"\">\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/shared/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".connectionStatus {\n  max-width: 50px;\n  padding-right: 10px;\n  padding-top: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi9DOlxcQ29kZVxcTWluaS1Qcm9qZWN0c1xcYmxvb2QtZG9uYXRpb24tcmVhbC10aW1lLW1hcFxcQ29kZVxcQ2xpZW50L3NyY1xcYXBwXFxzaGFyZWRcXG5hdlxcbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWM7RUFDZCxvQkFBa0I7RUFDbEIsaUJBRUosRUFBQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXYvbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbm5lY3Rpb25TdGF0dXN7XHJcbiAgICBtYXgtd2lkdGg6NTBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHhcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "./src/app/shared/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(dataService) {
        this.dataService = dataService;
    }
    NavComponent.prototype.isConnected = function () {
        return this.dataService.isConnected();
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/shared/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/shared/nav/nav.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.requestHeaders = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        this.requestOptions = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: this.requestHeaders });
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            this.donorsEndPoint = '/donors';
        else
            this.donorsEndPoint = 'http://localhost:3000/donors';
        this.nearbyDonorsSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    DataService.prototype.instantiateSocket = function () {
        var _this = this;
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production)
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
        else
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://localhost:3000");
        this.socket.on("new data", function (payload) {
            _this.nearbyDonorsStore = payload;
            _this.nearbyDonorsSubscription.next(_this.nearbyDonorsStore);
        });
        this.socket.on("updated", function (payload) {
            _this.getNearbyDonors();
        });
    };
    DataService.prototype.getNearbyDonors = function (longitude, latitude) {
        this.socket.emit('needs data', { longitude: longitude, latitude: latitude });
    };
    DataService.prototype.isConnected = function () {
        return this.socket.connected;
    };
    DataService.prototype.deleteDonor = function (id) {
        return this.http.delete(this.donorsEndPoint + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return "OK";
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DataService.prototype.updateDonor = function (id, data) {
        data._id = id;
        return this.http.put("" + this.donorsEndPoint, data, this.requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DataService.prototype.addDonor = function (item) {
        return this.http.post("" + this.donorsEndPoint, item, this.requestOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            return res.json();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DataService.prototype.getDonorInfo = function (id) {
        return this.http.get(this.donorsEndPoint + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var item = res.json();
            item.longitude = item.location.coordinates[0];
            item.latitude = item.location.coordinates[1];
            return item;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.log(error);
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errMsg);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/services/graphics.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/graphics.service.ts ***!
  \*****************************************************/
/*! exports provided: GraphicsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicsService", function() { return GraphicsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GraphicsService = /** @class */ (function () {
    function GraphicsService() {
    }
    GraphicsService.prototype.setGraphicsFromData = function (view, SimpleMarkerSymbol, Point, Graphic, data) {
        var markerSymbol = new SimpleMarkerSymbol({
            color: [107, 0, 232],
            outline: {
                color: [255, 255, 255],
                width: 2
            }
        });
        var newGraphics = data.map(function (person, index) {
            return new Graphic({
                geometry: new Point({
                    longitude: person.location.coordinates[0],
                    latitude: person.location.coordinates[1]
                }),
                symbol: markerSymbol,
                attributes: {
                    "First Name": person.firstName,
                    "Last Name": person.lastName,
                    "Blood Group": person.bloodGroup,
                    "Phone Number": "<a id=\"telephone-" + index + "\" data=\"" + person.telephone + "\"  > Hidden </a> ",
                    "Email": "<a id=\"email-" + index + "\" data=\"" + person.email + "\" > Hidden </a> ",
                },
                popupTemplate: {
                    actions: [{
                            title: "Show phone and email",
                            id: "show-hidden",
                        }],
                    title: "{firstName} {lastName}",
                    content: [{
                            type: "fields",
                            fieldInfos: [{
                                    fieldName: "First Name"
                                }, {
                                    fieldName: "Last Name"
                                }, {
                                    fieldName: "Blood Group"
                                }, {
                                    fieldName: "Phone Number"
                                }, {
                                    fieldName: "Email"
                                }]
                        }]
                }
            });
        });
        view.graphics.removeAll();
        view.graphics.addMany(newGraphics);
    };
    GraphicsService.prototype.showAddingPopup = function (view, mapPoint, address) {
        // Get the coordinates of the click on the view
        var lat = Math.round(mapPoint.latitude * 1000) / 1000;
        var lon = Math.round(mapPoint.longitude * 1000) / 1000;
        view.popup.actions = [{
                title: "Confirm Location",
                id: "show-add-modal",
                className: "text-danger"
            }];
        view.popup.open({
            // Set the popup's title to the coordinates of the location
            title: address ? address : "No address was found for this location",
            location: mapPoint // Set the location of the popup to the clicked location
        });
        view.popup.content = "[" + lon + ", " + lat + "]";
    };
    GraphicsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], GraphicsService);
    return GraphicsService;
}());



/***/ }),

/***/ "./src/app/shared/services/snackbar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/snackbar.service.ts ***!
  \*****************************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackBarService = /** @class */ (function () {
    function SnackBarService(snackBar) {
        this.snackBar = snackBar;
        this.actionText = 'Ok';
        this.successDefaultMessage = 'Successful operation';
        this.successConfig = { panelClass: ['successAlert'], duration: 5000 };
        this.errorDefaultMessage = 'Sorry, an error ocurred';
        this.errorConfig = { panelClass: ['errorAlert'], duration: 5000 };
        this.warnConfig = { panelClass: ['warnAlert'], duration: 5000 };
    }
    SnackBarService.prototype.emitSuccessSnackBar = function (message, actionText, config) {
        if (message === void 0) { message = this.successDefaultMessage; }
        if (actionText === void 0) { actionText = this.actionText; }
        if (config === void 0) { config = this.successConfig; }
        this.snackBar.open(message, actionText, config);
    };
    SnackBarService.prototype.emitErrorSnackBar = function (message, actionText, config) {
        if (message === void 0) { message = this.errorDefaultMessage; }
        if (actionText === void 0) { actionText = this.actionText; }
        if (config === void 0) { config = this.errorConfig; }
        this.snackBar.open(message, actionText, config);
    };
    SnackBarService.prototype.emitWarnSnackBar = function (message, actionText, config) {
        if (message === void 0) { message = this.errorDefaultMessage; }
        if (actionText === void 0) { actionText = this.actionText; }
        if (config === void 0) { config = this.warnConfig; }
        this.snackBar.open(message, actionText, config);
    };
    SnackBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarService);
    return SnackBarService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.saveLocation = function (longitude, latitude, address) {
        if (!this.userData) {
            this.userData = {};
        }
        this.userData.longitude = longitude;
        this.userData.latitude = latitude;
        this.userData.address = address;
    };
    UserService.prototype.clearData = function () {
        this.userData = null;
        this.userId = null;
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/shared/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
            ],
            declarations: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:3000"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Code\Mini-Projects\blood-donation-real-time-map\Code\Client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map