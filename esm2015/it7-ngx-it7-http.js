import { Injectable, NgModule } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams, QueryEncoder, HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TrueQueryEncoder extends QueryEncoder {
    /**
     * @param {?} k
     * @return {?}
     */
    encodeKey(k) {
        return encodeURIComponent(k);
    }
    /**
     * @param {?} v
     * @return {?}
     */
    encodeValue(v) {
        return encodeURIComponent(v);
    }
}
class It7AjaxService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * @param {?} url
     * @param {?} data
     * @return {?}
     */
    post(url, data) {
        const /** @type {?} */ headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const /** @type {?} */ options = new RequestOptions({ headers: headers });
        // if(this.config.mockAJAX){return Promise.resolve(this.getMockData(url, data));}
        return this.http
            .post(url, this.urlEncode(data), options)
            .toPromise()
            .then(res => this.checkResponse(res))
            .catch(error => {
            this.handleError('Request error: ' + error.message);
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    urlEncode(obj) {
        const /** @type {?} */ urlSearchParams = new URLSearchParams('', new TrueQueryEncoder());
        for (const /** @type {?} */ key in obj) {
            if (obj.hasOwnProperty(key)) {
                urlSearchParams.append(key, obj[key]);
            }
        }
        return urlSearchParams.toString();
    }
    /**
     * @param {?} res
     * @return {?}
     */
    checkResponse(res) {
        const /** @type {?} */ response = res.json();
        if (response.error) {
            // this.err.fire('Server request error: ' + response.errorMessage);
            alert('Server request error: ' + response.errorMessage);
        }
        return res.json().data;
    }
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        // this.err.fire('Server connection error: ' + error);
        alert('Server connection error: ' + error);
        return Promise.reject(error.message || error);
    }
}
It7AjaxService.decorators = [
    { type: Injectable },
];
// private getMockData(url: string = '', data: any = undefined):any {
//     var m = 'function' === typeof this.config.mockAJAX ? this.config.mockAJAX(url, data) : {};
//     return m;
// }
/** @nocollapse */
It7AjaxService.ctorParameters = () => [
    { type: Http, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class It7HttpModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: It7HttpModule,
            providers: [It7AjaxService]
        };
    }
}
It7HttpModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpModule]
            },] },
];
/** @nocollapse */
It7HttpModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { It7HttpModule, It7AjaxService };
//# sourceMappingURL=it7-ngx-it7-http.js.map
