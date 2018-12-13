import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, ResponseType } from '@angular/http';
import { Consumers } from './consumers';
import { Observable } from 'rxjs';
import { map } from 'rxjs-compat/operator/map';
@Injectable()
export class ConsumerService {

    constructor(private http: Http) { }

    addConsumers(consumers: Consumers) {
        const body = JSON.stringify(consumers);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });
        if (consumers.id) {
            return this.http.put('http://localhost:8080/consumers/updateConsumers' + consumers.id, body, options);
        } else {
            return this.http.post('http://localhost:8080/consumers/addConsumers', body, options);
        }
    }












}

