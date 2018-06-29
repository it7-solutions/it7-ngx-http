import { __extends } from 'tslib';
import { Injectable, NgModule } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams, QueryEncoder, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CommonModule } from '@angular/common';

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
}(QueryEncoder));
var It7AjaxService = /** @class */ (function () {
    function It7AjaxService(http) {
        this.http = http;
    }
    It7AjaxService.prototype.post = function (url, data) {
        var _this = this;
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        return this.http
            .post(url, this.urlEncode(data), options)
            .toPromise()
            .then(function (res) { return _this.checkResponse(res); })
            .catch(function (error) {
            _this.handleError('Request error: ' + error.message);
        });
    };
    It7AjaxService.prototype.urlEncode = function (obj) {
        var urlSearchParams = new URLSearchParams('', new TrueQueryEncoder());
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
    { type: Injectable },
];
It7AjaxService.ctorParameters = function () { return [
    { type: Http, },
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
    { type: NgModule, args: [{
                imports: [CommonModule, HttpModule]
            },] },
];
It7HttpModule.ctorParameters = function () { return []; };

export { It7HttpModule, It7AjaxService };
//# sourceMappingURL=it7-ngx-it7-http.js.map
