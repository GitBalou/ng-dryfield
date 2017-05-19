import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ScoreService {

    private url: string;
    private Observable = new Observable<any>();

    constructor(private http: Http) {
        this.url = 'https://api.myjson.com/bins/k0mjp';
    }

    getStream() : Observable<Object[]> {
        return this.http.get(this.url)
            .map( this.extractData)
            .catch( this.handleError);
    }

    extractData(res : Response) : Object[] {
        let body = res.json();
        return body.data || {};
    }

    handleError(error: Response | any) : Observable<any>{
        return Observable.throw(error);
    }

    create(name: string, score: number) : Observable<any> {
        let headers = new Headers({ 'content-type' : 'application/json'});
        let options = new RequestOptions({ headers });
        
        return this.http.post(this.url, {name, score}, options)
            .map(this.extractData)
            .catch(this.handleError);
    }
}