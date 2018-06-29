(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/http'), require('rxjs/add/operator/toPromise'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/http', 'rxjs/add/operator/toPromise', '@angular/common'], factory) :
	(factory((global['it7-ngx'] = global['it7-ngx'] || {}, global['it7-ngx']['it7-http'] = {}),global.ng.core,global.ng.http,global.Rx.Observable.prototype,global.ng.common));
}(this, (function (exports,core,http,toPromise,common) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var TrueQueryEncoder = /** @class */ (function (_super) {
    __extends(TrueQueryEncoder, _super);
    function TrueQueryEncoder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrueQueryEncoder.prototype.encodeKey = function (k) {
        return encodeURIComponent(k);
    };
    TrueQueryEncoder.prototype.encodeValue = function (v) {
        return encodeURIComponent(v);
    };
    return TrueQueryEncoder;
}(http.QueryEncoder));
var It7AjaxService = /** @class */ (function () {
    function It7AjaxService(http$$1) {
        this.http = http$$1;
    }
    It7AjaxService.prototype.post = function (url, data) {
        var _this = this;
        var headers = new http.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http.RequestOptions({ headers: headers });
        return this.http
            .post(url, this.urlEncode(data), options)
            .toPromise()
            .then(function (res) { return _this.checkResponse(res); })
            .catch(function (error) {
            _this.handleError('Request error: ' + error.message);
        });
    };
    It7AjaxService.prototype.urlEncode = function (obj) {
        var urlSearchParams = new http.URLSearchParams('', new TrueQueryEncoder());
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                urlSearchParams.append(key, obj[key]);
            }
        }
        return urlSearchParams.toString();
    };
    It7AjaxService.prototype.checkResponse = function (res) {
        var response = res.json();
        if (response.error) {
            alert('Server request error: ' + response.errorMessage);
        }
        return res.json().data;
    };
    It7AjaxService.prototype.handleError = function (error) {
        alert('Server connection error: ' + error);
        return Promise.reject(error.message || error);
    };
    return It7AjaxService;
}());
It7AjaxService.decorators = [
    { type: core.Injectable },
];
It7AjaxService.ctorParameters = function () { return [
    { type: http.Http, },
]; };
var It7HttpModule = /** @class */ (function () {
    function It7HttpModule() {
    }
    It7HttpModule.forRoot = function () {
        return {
            ngModule: It7HttpModule,
            providers: [It7AjaxService]
        };
    };
    return It7HttpModule;
}());
It7HttpModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, http.HttpModule]
            },] },
];
It7HttpModule.ctorParameters = function () { return []; };

exports.It7HttpModule = It7HttpModule;
exports.It7AjaxService = It7AjaxService;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=it7-ngx-it7-http.umd.js.map
