import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
export declare class It7AjaxService {
    private http;
    constructor(http: Http);
    post(url: string, data: any): Promise<any>;
    private urlEncode(obj);
    private checkResponse(res);
    private handleError(error);
}
