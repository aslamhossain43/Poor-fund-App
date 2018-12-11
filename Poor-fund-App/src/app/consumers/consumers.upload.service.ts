import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class UploadFileService {
  constructor(private http: HttpClient) { }
  pushFileToStorage(piFile: File, apiFile: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();
    formdata.append('piFile', piFile);
    formdata.append('apiFile', apiFile);
    const req = new HttpRequest('POST', 'http://localhost:8080/consumers/addFile', formdata, {
      responseType: 'text'
    });
    return this.http.request(req);
  }

}


