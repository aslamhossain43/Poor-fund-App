import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AllCandidates } from './manage-grant-not-grant.all-candidates';
import { map, catchError } from 'rxjs/operators';

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



getAllCandidatesList(): Observable<AllCandidates[]> {
    return this.http.get('http://localhost:8080/gl/grantedList')
        .pipe(map((response: Response) => response.json()),
            catchError(this.handleError));
}
private handleError(error: Response) {
    return Observable.throw(error);
}


}
