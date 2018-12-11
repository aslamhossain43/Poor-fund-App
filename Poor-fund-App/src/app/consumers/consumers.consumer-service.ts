import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, ResponseContentType } from '@angular/http';
import { Consumers } from './consumers';
import { Observable } from 'rxjs';
import { Body } from '@angular/http/src/body';
import { Options } from 'selenium-webdriver/firefox';
import { map } from 'rxjs-compat/operator/map';

@Injectable()
export class ConsumerService {

constructor(private httpService: Http) {}

addConsumers(consumers: Consumers) {
const body = JSON.stringify(consumers);
const headers = new Headers({'Content-Type': 'application/json'});
const options = new RequestOptions({headers: headers});
if (consumers.id) {
    return this.httpService.put('http://localhost:8080/consumers/updateConsumers' + consumers.id, body, options);
} else {
    return this.httpService.post('http://localhost:8080/consumers/addConsumers', body, options);
}
}

getPiImage(piCode: string): Observable<any> {
return this.httpService.get('http://localhost:8080/consumers/image/' + piCode);

}











}

