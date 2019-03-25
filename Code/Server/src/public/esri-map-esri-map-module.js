(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["esri-map-esri-map-module"],{

/***/ "./node_modules/angular-esri-loader/angular-esri-loader.js":
/*!*****************************************************************!*\
  !*** ./node_modules/angular-esri-loader/angular-esri-loader.js ***!
  \*****************************************************************/
/*! exports provided: EsriLoaderModule, EsriLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriLoaderModule", function() { return EsriLoaderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriLoaderService", function() { return EsriLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! esri-loader */ "./node_modules/esri-loader/dist/umd/esri-loader.js");
/* harmony import */ var esri_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(esri_loader__WEBPACK_IMPORTED_MODULE_1__);



var EsriLoaderService = /** @class */ (function () {
    function EsriLoaderService() {
    }
    /**
     * @return {?}
     */
    EsriLoaderService.prototype.isLoaded = function () {
        return Object(esri_loader__WEBPACK_IMPORTED_MODULE_1__["isLoaded"])();
    };
    /**
     * @param {?=} options
     * @return {?}
     */
    EsriLoaderService.prototype.load = function (options) {
        return new Promise(function (resolve, reject) {
            // don't try to load a second time
            if (Object(esri_loader__WEBPACK_IMPORTED_MODULE_1__["isLoaded"])()) {
                resolve(esri_loader__WEBPACK_IMPORTED_MODULE_1__["dojoRequire"]);
            }
            // wrap bootstrap in a promise
            Object(esri_loader__WEBPACK_IMPORTED_MODULE_1__["bootstrap"])(function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(esri_loader__WEBPACK_IMPORTED_MODULE_1__["dojoRequire"]);
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
            Object(esri_loader__WEBPACK_IMPORTED_MODULE_1__["dojoRequire"])(moduleNames, function () {
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
        return Object(esri_loader__WEBPACK_IMPORTED_MODULE_1__["dojoRequire"])(moduleNames, callback);
    };
    EsriLoaderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /**
     * @nocollapse
     */
    EsriLoaderService.ctorParameters = function () { return []; };
    return EsriLoaderService;
}());

var EsriLoaderModule = /** @class */ (function () {
    function EsriLoaderModule() {
    }
    EsriLoaderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [EsriLoaderService]
                },] },
    ];
    /**
     * @nocollapse
     */
    EsriLoaderModule.ctorParameters = function () { return []; };
    return EsriLoaderModule;
}());

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/esri-loader/dist/umd/esri-loader.js":
/*!**********************************************************!*\
  !*** ./node_modules/esri-loader/dist/umd/esri-loader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

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
var isBrowser = typeof window !== 'undefined';
var DEFAULT_URL = 'https://js.arcgis.com/4.6/';
// this is the url that is currently being, or already has loaded
var _currentUrl;
// TODO: at next breaking change replace the public isLoaded() API with this
function _isLoaded() {
    var globalRequire = window['require'];
    // .on() ensures that it's Dojo's AMD loader
    return globalRequire && globalRequire.on;
}
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // TODO: remove this if no longer needed
    script.setAttribute('data-esri-loader', 'loading');
    return script;
}
// add a one-time load handler to script
// and optionally add a one time error handler as well
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        // set up an error handler as well
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        // pass the script to the callback
        callback(script);
        // remove this event listener
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            // remove the error listener as well
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
// add a one-time error handler to the script
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        // reject the promise and remove this event listener
        callback(e.error || new Error("There was an error attempting to load " + script.src));
        // remove this event listener
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}
// allow consuming libraries to provide their own Promise implementations
var utils = {
    Promise: isBrowser ? window['Promise'] : undefined
};
// get the script injected by this library
function getScript() {
    return document.querySelector('script[data-esri-loader]');
}
// has ArcGIS API been loaded on the page yet?
function isLoaded() {
    // TODO: replace this implementation with that of _isLoaded() on next major release
    return typeof window['require'] !== 'undefined' && getScript();
}
// load the ArcGIS API on the page
function loadScript(options) {
    if (options === void 0) { options = {}; }
    // default options
    if (!options.url) {
        options.url = DEFAULT_URL;
    }
    return new utils.Promise(function (resolve, reject) {
        var script = getScript();
        if (script) {
            // the API is already loaded or in the process of loading...
            // NOTE: have to test against scr attribute value, not script.src
            // b/c the latter will return the full url for relative paths
            var src = script.getAttribute('src');
            if (src !== options.url) {
                // potentailly trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
            }
            else {
                if (_isLoaded()) {
                    // the script has already successfully loaded
                    resolve(script);
                }
                else {
                    // wait for the script to load and then resolve
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (_isLoaded()) {
                // the API has been loaded by some other means
                // potentailly trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                // this is the first time attempting to load the API
                if (options.dojoConfig) {
                    // set dojo configuration parameters before loading the script
                    window['dojoConfig'] = options.dojoConfig;
                }
                // create a script object whose source points to the API
                script = createScript(options.url);
                _currentUrl = options.url;
                // once the script is loaded...
                handleScriptLoad(script, function () {
                    // update the status of the script
                    script.setAttribute('data-esri-loader', 'loaded');
                    // return the script
                    resolve(script);
                }, reject);
                // load the script
                document.body.appendChild(script);
            }
        }
    });
}
// wrap dojo's require() in a promise
function requireModules(modules) {
    return new utils.Promise(function (resolve, reject) {
        // If something goes wrong loading the esri/dojo scripts, reject with the error.
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // remove error handler
            errorHandler.remove();
            // Resolve with the parameters from dojo require as an array.
            resolve(args);
        });
    });
}
// returns a promise that resolves with an array of the required modules
// also will attempt to lazy load the ArcGIS API if it has not already been loaded
function loadModules(modules, loadScriptOptions) {
    if (loadScriptOptions === void 0) { loadScriptOptions = {}; }
    if (!_isLoaded()) {
        // script is not yet loaded
        if (!loadScriptOptions.url && _currentUrl) {
            // alredy in the process of loading, so default to the same url
            loadScriptOptions.url = _currentUrl;
        }
        // attept to load the script then load the modules
        return loadScript(loadScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        // script is already loaded, just load the modules
        return requireModules(modules);
    }
}
// TODO: remove this next major release
function bootstrap(callback, options) {
    if (options === void 0) { options = {}; }
    console.warn('bootstrap() has been depricated and will be removed the next major release. Use loadScript() instead.');
    // default options
    if (!options.url) {
        options.url = DEFAULT_URL;
    }
    // don't reload API if it is already loaded or in the process of loading
    if (getScript()) {
        if (callback) {
            callback(new Error('The ArcGIS API for JavaScript is already loaded.'));
        }
        return;
    }
    if (options.dojoConfig) {
        // set dojo configuration parameters before loading the script
        window['dojoConfig'] = options.dojoConfig;
    }
    // create a script object whose source points to the API
    var script = createScript(options.url);
    // once the script is loaded...
    script.onload = function () {
        // update the status of the script
        script.setAttribute('data-esri-loader', 'loaded');
        // we can now use Dojo's require() to load esri and dojo AMD modules
        var _dojoRequire = window['require'];
        if (callback) {
            // let the caller know that the API has been successfully loaded
            // and as a convenience, return the require function
            // in case they want to use it directly
            callback(null, _dojoRequire);
        }
    };
    if (callback) {
        // handle any script loading errors
        handleScriptError(script, callback);
    }
    // load the script
    document.body.appendChild(script);
}
// TODO: remove this next major release
function dojoRequire(modules, callback) {
    /* tslint:disable max-line-length */
    console.warn('dojoRequire() has been depricated and will be removed the next major release. Use loadModules() instead.');
    /* tslint:enable max-line-length */
    if (isLoaded()) {
        // already loaded, just call require
        window['require'](modules, callback);
    }
    else {
        // wait for script to load then call require
        var script = getScript();
        if (script) {
            // Not yet loaded but script is in the body - use callback once loaded
            handleScriptLoad(script, function () {
                window['require'](modules, callback);
            });
        }
        else {
            // Not bootstrapped
            throw new Error('The ArcGIS API for JavaScript has not been loaded. You must first call esriLoader.bootstrap()');
        }
    }
}
// export a namespace to expose all functions
var esriLoader = {
    getScript: getScript,
    isLoaded: isLoaded,
    loadModules: loadModules,
    loadScript: loadScript,
    utils: utils,
    // TODO: remove these the next major release
    bootstrap: bootstrap,
    dojoRequire: dojoRequire
};

exports.utils = utils;
exports.getScript = getScript;
exports.isLoaded = isLoaded;
exports.loadScript = loadScript;
exports.loadModules = loadModules;
exports.bootstrap = bootstrap;
exports.dojoRequire = dojoRequire;
exports['default'] = esriLoader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=esri-loader.js.map


/***/ }),

/***/ "./src/app/esri-map/esri-map-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/esri-map/esri-map-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: EsriMapRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriMapRoutingModule", function() { return EsriMapRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _esri_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esri-map.component */ "./src/app/esri-map/esri-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _esri_map_component__WEBPACK_IMPORTED_MODULE_2__["EsriMapComponent"] },
];
var EsriMapRoutingModule = /** @class */ (function () {
    function EsriMapRoutingModule() {
    }
    EsriMapRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EsriMapRoutingModule);
    return EsriMapRoutingModule;
}());



/***/ }),

/***/ "./src/app/esri-map/esri-map.component.css":
/*!*************************************************!*\
  !*** ./src/app/esri-map/esri-map.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@import 'https://js.arcgis.com/4.4/esri/css/main.css';\n/* import the required JSAPI css */\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXNyaS1tYXAvZXNyaS1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esc0RBQXNEO0FBRHRELG1DQUFtQyIsImZpbGUiOiJzcmMvYXBwL2VzcmktbWFwL2VzcmktbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgdGhlIHJlcXVpcmVkIEpTQVBJIGNzcyAqL1xyXG5AaW1wb3J0ICdodHRwczovL2pzLmFyY2dpcy5jb20vNC40L2VzcmkvY3NzL21haW4uY3NzJztcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/esri-map/esri-map.component.html":
/*!**************************************************!*\
  !*** ./src/app/esri-map/esri-map.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 text-center\">\r\n            <i class=\"fa fa-heartbeat\" aria-hidden=\"true\"></i>\r\n\r\n            <h1> For Patients</h1>\r\n\r\n            <p class=\"text-muted\">Click on the putple pins to get info of donors near you and then press on \"Show phone and email\" to contact them</p>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-6 text-center\">\r\n            <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\r\n\r\n            <h1> For Donors</h1>\r\n\r\n            <p class=\"text-muted\">Chose your location by double-clicking on the map, then press \"Confirm Location\" </p>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- <div class=\"col-md-6 text-center\">\r\n            <h1> For Donors</h1>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <p class=\"lead\">Chose your location by double-clicking on the map, then press confirm location </p>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <img class=\"icons image-responsive\" src=\"assets/images/donors.png\" alt=\"\">\r\n                </div>\r\n            </div>\r\n            \r\n        </div> -->\r\n\r\n\r\n    </div>\r\n    <div #mapViewNode>\r\n        <div class=\"loader\"></div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- <div class=\"container-fluid\">\r\n                <h5 class=\"text-left\">  </h5>\r\n                \r\n               </div>\r\n             -->"

/***/ }),

/***/ "./src/app/esri-map/esri-map.component.ts":
/*!************************************************!*\
  !*** ./src/app/esri-map/esri-map.component.ts ***!
  \************************************************/
/*! exports provided: EsriMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriMapComponent", function() { return EsriMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_esri_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-esri-loader */ "./node_modules/angular-esri-loader/angular-esri-loader.js");
/* harmony import */ var _esri_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./esri.config */ "./src/app/esri-map/esri.config.ts");
/* harmony import */ var _services_map_core_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/map-core.service */ "./src/app/esri-map/services/map-core.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EsriMapComponent = /** @class */ (function () {
    function EsriMapComponent(esriLoader, mapCoreService) {
        this.esriLoader = esriLoader;
        this.mapCoreService = mapCoreService;
    }
    EsriMapComponent.prototype.ngOnInit = function () {
        this.loadFromRemoteSource();
    };
    EsriMapComponent.prototype.loadFromRemoteSource = function () {
        var _this = this;
        return this.esriLoader.load({ url: _esri_config__WEBPACK_IMPORTED_MODULE_2__["arcGisApiUrl"] }).then(function () { return _this.loadMap(); });
    };
    EsriMapComponent.prototype.loadModules = function () {
        return this.esriLoader.loadModules([
            "esri/Map",
            "esri/views/MapView",
            "esri/widgets/Track",
            "esri/widgets/Search",
            "esri/tasks/Locator",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/symbols/SimpleMarkerSymbol",
        ]);
    };
    EsriMapComponent.prototype.loadMap = function () {
        var _this = this;
        return this.loadModules().then(function (loadedModules) {
            _this.mapCoreService.loadMap(_this.mapViewEl.nativeElement, loadedModules);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapViewNode'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], EsriMapComponent.prototype, "mapViewEl", void 0);
    EsriMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'esri-map',
            template: __webpack_require__(/*! ./esri-map.component.html */ "./src/app/esri-map/esri-map.component.html"),
            styles: [__webpack_require__(/*! ./esri-map.component.css */ "./src/app/esri-map/esri-map.component.css")]
        }),
        __metadata("design:paramtypes", [angular_esri_loader__WEBPACK_IMPORTED_MODULE_1__["EsriLoaderService"], _services_map_core_service__WEBPACK_IMPORTED_MODULE_3__["MapCoreService"]])
    ], EsriMapComponent);
    return EsriMapComponent;
}());



/***/ }),

/***/ "./src/app/esri-map/esri-map.module.ts":
/*!*********************************************!*\
  !*** ./src/app/esri-map/esri-map.module.ts ***!
  \*********************************************/
/*! exports provided: EsriMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EsriMapModule", function() { return EsriMapModule; });
/* harmony import */ var _services_event_handlers_map_core_events_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/event-handlers/map-core-events-handler */ "./src/app/esri-map/services/event-handlers/map-core-events-handler.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_esri_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-esri-loader */ "./node_modules/angular-esri-loader/angular-esri-loader.js");
/* harmony import */ var _esri_map_esri_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../esri-map/esri-map.component */ "./src/app/esri-map/esri-map.component.ts");
/* harmony import */ var _esri_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./esri-map-routing.module */ "./src/app/esri-map/esri-map-routing.module.ts");
/* harmony import */ var _services_map_core_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/map-core.service */ "./src/app/esri-map/services/map-core.service.ts");
/* harmony import */ var _services_event_handlers_map_double_click_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/event-handlers/map-double-click-handler */ "./src/app/esri-map/services/event-handlers/map-double-click-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Angular Imports

// This Module's Components





var EsriMapModule = /** @class */ (function () {
    function EsriMapModule() {
    }
    EsriMapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _esri_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["EsriMapRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                angular_esri_loader__WEBPACK_IMPORTED_MODULE_3__["EsriLoaderModule"],
            ],
            providers: [
                angular_esri_loader__WEBPACK_IMPORTED_MODULE_3__["EsriLoaderService"],
                _services_map_core_service__WEBPACK_IMPORTED_MODULE_6__["MapCoreService"],
                _services_event_handlers_map_core_events_handler__WEBPACK_IMPORTED_MODULE_0__["MapCoreEventsHandler"],
                _services_event_handlers_map_double_click_handler__WEBPACK_IMPORTED_MODULE_7__["MapDoubleClickHandler"],
            ],
            declarations: [
                _esri_map_esri_map_component__WEBPACK_IMPORTED_MODULE_4__["EsriMapComponent"],
            ],
        })
    ], EsriMapModule);
    return EsriMapModule;
}());



/***/ }),

/***/ "./src/app/esri-map/esri.config.ts":
/*!*****************************************!*\
  !*** ./src/app/esri-map/esri.config.ts ***!
  \*****************************************/
/*! exports provided: center, locatorUrl, arcGisApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "center", function() { return center; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatorUrl", function() { return locatorUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arcGisApiUrl", function() { return arcGisApiUrl; });
var center = [31.2, 30];
var locatorUrl = 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer';
var arcGisApiUrl = 'https://js.arcgis.com/4.4/';


/***/ }),

/***/ "./src/app/esri-map/services/event-handlers/map-core-events-handler.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/esri-map/services/event-handlers/map-core-events-handler.ts ***!
  \*****************************************************************************/
/*! exports provided: MapCoreEventsHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCoreEventsHandler", function() { return MapCoreEventsHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utility */ "./src/app/esri-map/services/utility.ts");
/* harmony import */ var _map_show_hidden_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-show-hidden-handler */ "./src/app/esri-map/services/event-handlers/map-show-hidden-handler.ts");
/* harmony import */ var _map_double_click_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-double-click-handler */ "./src/app/esri-map/services/event-handlers/map-double-click-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapCoreEventsHandler = /** @class */ (function () {
    function MapCoreEventsHandler(dataService, mapDoubleClickHandler) {
        this.dataService = dataService;
        this.mapDoubleClickHandler = mapDoubleClickHandler;
    }
    MapCoreEventsHandler.prototype.askForData = function (view) {
        return this.dataService.getNearbyDonors(view.center.longitude, view.center.latitude);
    };
    MapCoreEventsHandler.prototype.assignMapEventHandlers = function (view, Locator) {
        var _this = this;
        console.log(view);
        view.on("drag", Object(_utility__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () { return _this.askForData(view); }, 25));
        view.on("mouse-wheel", Object(_utility__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () { return _this.askForData(view); }, 25));
        view.on("hold", Object(_utility__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () { return _this.askForData(view); }, 25));
        this.mapDoubleClickHandler.implement(view, Locator);
        Object(_map_show_hidden_handler__WEBPACK_IMPORTED_MODULE_3__["addShowHiddenItemsHandler"])(view);
        view.then(function (x) { return _this.askForData(view); });
    };
    MapCoreEventsHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _map_double_click_handler__WEBPACK_IMPORTED_MODULE_4__["MapDoubleClickHandler"]])
    ], MapCoreEventsHandler);
    return MapCoreEventsHandler;
}());



/***/ }),

/***/ "./src/app/esri-map/services/event-handlers/map-double-click-handler.ts":
/*!******************************************************************************!*\
  !*** ./src/app/esri-map/services/event-handlers/map-double-click-handler.ts ***!
  \******************************************************************************/
/*! exports provided: MapDoubleClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDoubleClickHandler", function() { return MapDoubleClickHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_graphics_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/graphics.service */ "./src/app/shared/services/graphics.service.ts");
/* harmony import */ var _esri_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../esri.config */ "./src/app/esri-map/esri.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapDoubleClickHandler = /** @class */ (function () {
    function MapDoubleClickHandler(router, userService, graphicsService) {
        this.router = router;
        this.userService = userService;
        this.graphicsService = graphicsService;
    }
    MapDoubleClickHandler.prototype.implement = function (view, Locator) {
        var self = this;
        var locatorTask = new Locator({ url: _esri_config__WEBPACK_IMPORTED_MODULE_4__["locatorUrl"] });
        view.on("double-click", function (event) {
            event.stopPropagation();
            var longitude = event.mapPoint.longitude;
            var latitude = event.mapPoint.latitude;
            var address = 'none';
            locatorTask.locationToAddress(event.mapPoint)
                .then(function (response) { return self.showPopup(view, event.mapPoint, response.address); })
                .otherwise(function (err) { return self.showPopup(view, event.mapPoint, address); });
            view.popup.on("trigger-action", function (event) {
                if (event.action.id === "show-add-modal") {
                    self.saveLocation(longitude, latitude, address);
                    self.router.navigate(['/posting']);
                }
            });
        });
    };
    MapDoubleClickHandler.prototype.showPopup = function (view, mapPoint, address) {
        this.graphicsService.showAddingPopup(view, mapPoint, address);
    };
    MapDoubleClickHandler.prototype.saveLocation = function (longitude, latitude, address) {
        this.userService.saveLocation(longitude, latitude, address);
    };
    MapDoubleClickHandler = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _shared_services_graphics_service__WEBPACK_IMPORTED_MODULE_3__["GraphicsService"]])
    ], MapDoubleClickHandler);
    return MapDoubleClickHandler;
}());



/***/ }),

/***/ "./src/app/esri-map/services/event-handlers/map-show-hidden-handler.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/esri-map/services/event-handlers/map-show-hidden-handler.ts ***!
  \*****************************************************************************/
/*! exports provided: addShowHiddenItemsHandler, showHiddenItemsFromDom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addShowHiddenItemsHandler", function() { return addShowHiddenItemsHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showHiddenItemsFromDom", function() { return showHiddenItemsFromDom; });
function addShowHiddenItemsHandler(view) {
    view.popup.on("trigger-action", function (event) {
        if (event.action.id === "show-hidden") {
            showHiddenItemsFromDom(view);
        }
    });
}
function showHiddenItemsFromDom(view) {
    var som = document.querySelector('.esri-popup-renderer').childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
    var telephone = som.childNodes[3].childNodes[1].childNodes[0].attributes['data'].value;
    var email = som.childNodes[4].childNodes[1].childNodes[0].attributes['data'].value;
    var myContainer = som.childNodes[3].childNodes[1].childNodes[0];
    myContainer.innerText = telephone;
    myContainer = som.childNodes[4].childNodes[1].childNodes[0];
    myContainer.innerText = email;
}


/***/ }),

/***/ "./src/app/esri-map/services/map-core.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/esri-map/services/map-core.service.ts ***!
  \*******************************************************/
/*! exports provided: MapCoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapCoreService", function() { return MapCoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/data.service */ "./src/app/shared/services/data.service.ts");
/* harmony import */ var _shared_services_graphics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/graphics.service */ "./src/app/shared/services/graphics.service.ts");
/* harmony import */ var _map_ui_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map-ui-widgets */ "./src/app/esri-map/services/map-ui-widgets.ts");
/* harmony import */ var _esri_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../esri.config */ "./src/app/esri-map/esri.config.ts");
/* harmony import */ var _event_handlers_map_core_events_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-handlers/map-core-events-handler */ "./src/app/esri-map/services/event-handlers/map-core-events-handler.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapCoreService = /** @class */ (function () {
    function MapCoreService(dataService, graphicsService, mapCoreEventsHandler) {
        this.dataService = dataService;
        this.graphicsService = graphicsService;
        this.mapCoreEventsHandler = mapCoreEventsHandler;
    }
    MapCoreService.prototype.loadMap = function (mapDomElement, loadedModules) {
        var _this = this;
        var Map = loadedModules[0], MapView = loadedModules[1], Track = loadedModules[2], Search = loadedModules[3], Locator = loadedModules[4], Graphic = loadedModules[5], Point = loadedModules[6], SimpleMarkerSymbol = loadedModules[7];
        var map = new Map({ basemap: "osm" });
        var view = new MapView({
            container: mapDomElement,
            map: map,
            center: _esri_config__WEBPACK_IMPORTED_MODULE_4__["center"],
            zoom: 10,
        });
        this.dataService.nearbyDonorsSubscription.subscribe(function (data) { return _this.graphicsService.setGraphicsFromData(view, SimpleMarkerSymbol, Point, Graphic, data); }, function (error) { return console.log('Problem with socket connector'); });
        Object(_map_ui_widgets__WEBPACK_IMPORTED_MODULE_3__["addUIWidgets"])(view, Track, Search);
        this.mapCoreEventsHandler.assignMapEventHandlers(view, Locator);
    };
    MapCoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _shared_services_graphics_service__WEBPACK_IMPORTED_MODULE_2__["GraphicsService"],
            _event_handlers_map_core_events_handler__WEBPACK_IMPORTED_MODULE_5__["MapCoreEventsHandler"]])
    ], MapCoreService);
    return MapCoreService;
}());



/***/ }),

/***/ "./src/app/esri-map/services/map-ui-widgets.ts":
/*!*****************************************************!*\
  !*** ./src/app/esri-map/services/map-ui-widgets.ts ***!
  \*****************************************************/
/*! exports provided: addUIWidgets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUIWidgets", function() { return addUIWidgets; });
function addUIWidgets(view, Track, Search) {
    var track = new Track({ view: view });
    var searchWidget = new Search({ view: view });
    view.ui.add(track, "top-left");
    view.ui.add(searchWidget, {
        position: "top-left",
        index: 2
    });
}


/***/ }),

/***/ "./src/app/esri-map/services/utility.ts":
/*!**********************************************!*\
  !*** ./src/app/esri-map/services/utility.ts ***!
  \**********************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
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


/***/ })

}]);
//# sourceMappingURL=esri-map-esri-map-module.js.map