webpackJsonp([1],{

/***/ "../../../../../src/app/esri-map/esri-helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return modules; });
/* harmony export (immutable) */ __webpack_exports__["b"] = addUI;
/* unused harmony export assignMapClickWatcher */
var modules = [
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Track",
    "esri/widgets/Search",
    "esri/geometry/support/webMercatorUtils",
    "esri/layers/FeatureLayer",
    "esri/tasks/Locator",
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol",
];
function addUI(view, track, searchWidget) {
    view.ui.add(track, "top-left");
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
    });
}
function assignMapClickWatcher(view, locatorTask, self) {
    view.on("double-click", function (event) {
        // event.stopPropagation(); // overwrite default click-for-popup behavior
        // Get the coordinates of the click on the view
        var lat = Math.round(event.mapPoint.latitude * 1000) / 1000;
        var lon = Math.round(event.mapPoint.longitude * 1000) / 1000;
        view.popup.open({
            // Set the popup's title to the coordinates of the location
            title: "Reverse geocode: [" + lon + ", " + lat + "]",
            location: event.mapPoint // Set the location of the popup to the clicked location
        });
        // Display the popup
        // Execute a reverse geocode using the clicked location
        locatorTask.locationToAddress(event.mapPoint).then(function (response) {
            // If an address is successfully found, show it in the popup's content
            view.popup.content = response.address;
        }).otherwise(function (err) {
            // If the promise fails and no result is found, show a generic message
            view.popup.content =
                "No address was found for this location";
        });
        self.clicked.emit(event.mapPoint);
    });
}
//# sourceMappingURL=esri-helper.js.map

/***/ }),

/***/ "../../../../../src/app/esri-map/esri-map-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__esri_map_component__ = __webpack_require__("../../../../../src/app/esri-map/esri-map.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsriMapRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__esri_map_component__["a" /* EsriMapComponent */] },
];
var EsriMapRoutingModule = (function () {
    function EsriMapRoutingModule() {
    }
    return EsriMapRoutingModule;
}());
EsriMapRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], EsriMapRoutingModule);

//# sourceMappingURL=esri-map-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/esri-map/esri-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports
exports.push([module.i, "@import url(https://js.arcgis.com/4.3/esri/css/main.css);", ""]);

// module
exports.push([module.i, "/* import the required JSAPI css */\r\n\r\n.esri-view {\r\n    height: 1000px;\r\n    width:100%\r\n}\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}", "", {"version":3,"sources":["E:/Mini-Projects/Corssover/Code/Client/src/app/esri-map/esri-map.component.css"],"names":[],"mappings":"AAAA,mCAAmC;;AAGnC;IACI,eAAe;IACf,UAAU;CACb;;AAED;IACI,2BAA2B,CAAC,gBAAgB;IAC5C,+BAA+B,CAAC,UAAU;IAC1C,mBAAmB;IACnB,aAAa;IACb,cAAc;IACd,2CAAmC;YAAnC,mCAAmC;CACtC;;AAED;IACI,KAAK,gCAAwB,CAAxB,wBAAwB,EAAE;IAC/B,OAAO,kCAA0B,CAA1B,0BAA0B,EAAE;CACtC;;AAHD;IACI,KAAK,gCAAwB,CAAxB,wBAAwB,EAAE;IAC/B,OAAO,kCAA0B,CAA1B,0BAA0B,EAAE;CACtC","file":"esri-map.component.css","sourcesContent":["/* import the required JSAPI css */\r\n@import 'https://js.arcgis.com/4.3/esri/css/main.css';\r\n\r\n.esri-view {\r\n    height: 1000px;\r\n    width:100%\r\n}\r\n\r\n.loader {\r\n    border: 16px solid #f3f3f3; /* Light grey */\r\n    border-top: 16px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 120px;\r\n    height: 120px;\r\n    animation: spin 2s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    0% { transform: rotate(0deg); }\r\n    100% { transform: rotate(360deg); }\r\n}"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/esri-map/esri-map.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-offset-1 col-md-5\">\r\n                        <h1> For Patients</h1>\r\n                        <p class=\"lead\">In case of any emergency </p>\r\n                        <p>Lookup who are near you to privide needed blood </p>\r\n                        <div routerLink='/patients' class=\"btn btn-danger\">Lookup</div>\r\n                    </div>\r\n                    <div class=\"col-md-6\" >\r\n                        <h1> For Donors  </h1>\r\n                        <p class=\"lead\">Make a difference in others lives </p>\r\n                        <p>Now you could easily pick your location and add you your info </p>\r\n                        <div routerLink='/donors' class=\"btn btn-primary\">Register</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n<div class=\"container-fluid\">\r\n                <h5 class=\"text-left\"> Chose your location by double-clicking clicking on the map, then press confirm location </h5>\r\n                \r\n               </div>\r\n            \r\n<div #mapViewNode>\r\n        <div class=\"loader\"></div>\r\n        \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/esri-map/esri-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_info_service__ = __webpack_require__("../../../../../src/app/shared/services/info.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_esri_loader__ = __webpack_require__("../../../../angular-esri-loader/angular-esri-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__esri_helper__ = __webpack_require__("../../../../../src/app/esri-map/esri-helper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service__ = __webpack_require__("../../../../../src/app/shared/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utility__ = __webpack_require__("../../../../../src/app/esri-map/utility.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__esri_config__ = __webpack_require__("../../../../../src/app/esri-map/esri.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_graphics_service__ = __webpack_require__("../../../../../src/app/shared/services/graphics.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsriMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EsriMapComponent = (function () {
    function EsriMapComponent(esriLoader, dataService, graphicsService, router, infoService) {
        this.esriLoader = esriLoader;
        this.dataService = dataService;
        this.graphicsService = graphicsService;
        this.router = router;
        this.infoService = infoService;
    }
    EsriMapComponent.prototype.ngOnInit = function () {
        this.loadMap();
    };
    EsriMapComponent.prototype.loadMap = function () {
        var _this = this;
        var self = this;
        return this.esriLoader.load({
            url: 'https://js.arcgis.com/4.4/'
        }).then(function () {
            _this.esriLoader.loadModules(__WEBPACK_IMPORTED_MODULE_3__esri_helper__["a" /* modules */]).then(function (_a) {
                var Map = _a[0], MapView = _a[1], Track = _a[2], Search = _a[3], webMercatorUtils = _a[4], FeatureLayer = _a[5], Locator = _a[6], Graphic = _a[7], Point = _a[8], SimpleMarkerSymbol = _a[9];
                var featureLayer;
                var map = new Map({
                    basemap: "streets-navigation-vector"
                });
                var view = new MapView({
                    container: _this.mapViewEl.nativeElement,
                    map: map,
                    center: __WEBPACK_IMPORTED_MODULE_6__esri_config__["a" /* center */],
                    zoom: 10,
                });
                // When data arrives from backen render the graphics
                _this.dataService.nearbyDonorsSubscription.subscribe(function (data) { return _this.graphicsService.setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data); }, function (error) { return console.log('Problem with socket connector'); });
                // Set up a locator task using the world geocoding service
                var locatorTask = new Locator({
                    url: "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer"
                });
                var getData = function () { return self.dataService.getNearbyDonors(view.center.longitude, view.center.latitude); };
                var track = new Track({
                    view: view
                });
                var searchWidget = new Search({
                    view: view
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__esri_helper__["b" /* addUI */])(view, track, searchWidget);
                view.on("drag", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["a" /* debounce */])(getData, 25));
                view.on("mouse-wheel", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["a" /* debounce */])(getData, 25));
                view.on("hold", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["a" /* debounce */])(getData, 25));
                view.on("double-click", function (event) {
                    event.stopPropagation();
                    var longitude = event.mapPoint.longitude;
                    var latitude = event.mapPoint.latitude;
                    var address = '';
                    // Execute a reverse geocode using the clicked location
                    locatorTask.locationToAddress(event.mapPoint).then(function (response) {
                        // If an address is successfully found, show it in the popup's content
                        address = response.address;
                        self.graphicsService.showAddingPopup(view, event.mapPoint, address);
                    }).otherwise(function (err) {
                        // If the promise fails and no result is found, show a generic message
                        self.graphicsService.showAddingPopup(view, event.mapPoint);
                    });
                    view.popup.on("trigger-action", function (event) {
                        if (event.action.id === "show-add-modal") {
                            self.infoService.saveLocation(longitude, latitude, address);
                            self.router.navigate(['/posting']);
                        }
                    });
                });
                view.popup.on("trigger-action", function (event) {
                    if (event.action.id === "show-hidden") {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utility__["b" /* showHiddenItems */])(view);
                    }
                });
                view.then(function (x) {
                    getData();
                });
            });
        });
    };
    return EsriMapComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["y" /* ViewChild */])('mapViewNode'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["h" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["h" /* ElementRef */]) === "function" && _a || Object)
], EsriMapComponent.prototype, "mapViewEl", void 0);
EsriMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'esri-map',
        template: __webpack_require__("../../../../../src/app/esri-map/esri-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/esri-map/esri-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_esri_loader__["b" /* EsriLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_esri_loader__["b" /* EsriLoaderService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_graphics_service__["a" /* GraphicsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_graphics_service__["a" /* GraphicsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__shared_services_info_service__["a" /* InfoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__shared_services_info_service__["a" /* InfoService */]) === "function" && _f || Object])
], EsriMapComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=esri-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/esri-map/esri-map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_esri_loader__ = __webpack_require__("../../../../angular-esri-loader/angular-esri-loader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__esri_map_esri_map_component__ = __webpack_require__("../../../../../src/app/esri-map/esri-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__esri_map_routing_module__ = __webpack_require__("../../../../../src/app/esri-map/esri-map-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriMapModule", function() { return EsriMapModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Angular Imports

// This Module's Components



var EsriMapModule = (function () {
    function EsriMapModule() {
    }
    return EsriMapModule;
}());
EsriMapModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__esri_map_routing_module__["a" /* EsriMapRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_esri_loader__["a" /* EsriLoaderModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2_angular_esri_loader__["b" /* EsriLoaderService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__esri_map_esri_map_component__["a" /* EsriMapComponent */],
        ],
    })
], EsriMapModule);

//# sourceMappingURL=esri-map.module.js.map

/***/ }),

/***/ "../../../../../src/app/esri-map/esri.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return center; });
var center = [31.2, 30];
//# sourceMappingURL=esri.config.js.map

/***/ }),

/***/ "../../../../../src/app/esri-map/utility.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["b"] = showHiddenItems;
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow)
            func.apply(context, args);
    };
}
;
function showHiddenItems(view) {
    var som = document.querySelector('.esri-popup-renderer').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
    var telephone = som.childNodes[3].childNodes[1].childNodes[0].attributes['data'].value;
    var email = som.childNodes[4].childNodes[1].childNodes[0].attributes['data'].value;
    var myContainer = som.childNodes[3].childNodes[1].childNodes[0];
    myContainer.innerText = telephone;
    myContainer = som.childNodes[4].childNodes[1].childNodes[0];
    myContainer.innerText = email;
}
//# sourceMappingURL=utility.js.map

/***/ }),

/***/ "../../../../angular-esri-loader/angular-esri-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_esri_loader__ = __webpack_require__("../../../../esri-loader/src/esri-loader.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsriLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EsriLoaderService; });



var EsriLoaderService = (function () {
    function EsriLoaderService() {
    }
    /**
     * @return {?}
     */
    EsriLoaderService.prototype.isLoaded = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["a" /* isLoaded */])();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    EsriLoaderService.prototype.load = function (options) {
        return new Promise(function (resolve, reject) {
            // don't try to load a second time
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["a" /* isLoaded */])()) {
                resolve(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["b" /* dojoRequire */]);
            }
            // wrap bootstrap in a promise
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["c" /* bootstrap */])(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["b" /* dojoRequire */]);
                }
            }, options);
        });
    };
    /**
     * @param {?} moduleNames
     * @return {?}
     */
    EsriLoaderService.prototype.loadModules = function (moduleNames) {
        return new Promise(function (resolve) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["b" /* dojoRequire */])(moduleNames, function () {
                var modules = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    modules[_i] = arguments[_i];
                }
                resolve(modules);
            });
        });
    };
    /**
     * @param {?} moduleNames
     * @param {?} callback
     * @return {?}
     */
    EsriLoaderService.prototype.require = function (moduleNames, callback) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_esri_loader__["b" /* dojoRequire */])(moduleNames, callback);
    };
    return EsriLoaderService;
}());
EsriLoaderService.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */] },
];
/**
 * @nocollapse
 */
EsriLoaderService.ctorParameters = function () { return []; };

var EsriLoaderModule = (function () {
    function EsriLoaderModule() {
    }
    return EsriLoaderModule;
}());
EsriLoaderModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */], args: [{
                providers: [EsriLoaderService]
            },] },
];
/**
 * @nocollapse
 */
EsriLoaderModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "../../../../esri-loader/src/esri-loader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isLoaded;
/* harmony export (immutable) */ __webpack_exports__["c"] = bootstrap;
/* harmony export (immutable) */ __webpack_exports__["b"] = dojoRequire;
/*
  Copyright 2017 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
// get the script injected by this library
function getScript() {
    return document.querySelector('script[data-esri-loader]');
}
// has ArcGIS API been loaded on the page yet?
function isLoaded() {
    // would like to just use window.require, but fucking typescript
    return typeof window['require'] !== 'undefined' && getScript();
}
// load the ArcGIS API on the page
function bootstrap(callback, options) {
    if (options === void 0) { options = {}; }
    // default options
    if (!options.url) {
        options.url = 'https://js.arcgis.com/4.4/';
    }
    // don't reload API if it is already loaded or in the process of loading
    if (getScript()) {
        callback(new Error('The ArcGIS API for JavaScript is already loaded.'));
        return;
    }
    // create a script object whose source points to the API
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = options.url;
    script.dataset['esriLoader'] = 'loading';
    // once the script is loaded...
    script.onload = function () {
        // update the status of the script
        script.dataset['esriLoader'] = 'loaded';
        // we can now use Dojo's require() to load esri and dojo AMD modules
        var dojoRequire = window['require'];
        if (callback) {
            // let the caller know that the API has been successfully loaded
            // and as a convenience, return the require function
            // in case they want to use it directly
            callback(null, dojoRequire);
        }
    };
    // load the script
    document.body.appendChild(script);
}
function dojoRequire(modules, callback) {
    if (isLoaded()) {
        window['require'](modules, callback);
    }
    else {
        var script_1 = getScript();
        if (script_1) {
            // Not yet loaded but script is in the body - use callback once loaded
            var onScriptLoad_1 = function () {
                window['require'](modules, callback);
                script_1.removeEventListener('load', onScriptLoad_1, false);
            };
            script_1.addEventListener('load', onScriptLoad_1);
        }
        else {
            // Not bootstrapped
            throw new Error('The ArcGIS API for JavaScript has not been loaded. You must first call esriLoader.bootstrap()');
        }
    }
}
/* unused harmony default export */ var _unused_webpack_default_export = ({
    isLoaded: isLoaded,
    bootstrap: bootstrap,
    dojoRequire: dojoRequire
});
//# sourceMappingURL=esri-loader.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map