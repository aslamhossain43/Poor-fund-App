import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ManageGrantNotGrantService {
constructor(private http: Http) {}
pushGrantNotGrantFiles(selectedProvedFile: File, status: string, grantNotGrantId: string) {
const formData: FormData = new FormData();
formData.append('provedFile', selectedProvedFile);
formData.append('grantNotGrantId', grantNotGrantId);
formData.append('status', status);
return this.http.post('http://localhost:8080/mgng/addGrantNotGrant', formData);

}
}
