import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Consumers } from './consumers';
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












}

