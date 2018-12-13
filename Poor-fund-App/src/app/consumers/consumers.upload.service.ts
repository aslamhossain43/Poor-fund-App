import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
@Injectable()
export class UploadFileService {
  constructor(private http: Http) { }
  pushFileToStorage(piFile: File, apiFile: File) {
    const formdata: FormData = new FormData();
    formdata.append('piFile', piFile);
    formdata.append('apiFile', apiFile);
    return this.http.post('http://localhost:8080/consumers/addFile', formdata);
  }

}

